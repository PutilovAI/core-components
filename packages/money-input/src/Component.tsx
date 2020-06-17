import cn from 'classnames';
import React, { useState, useEffect } from 'react';
import { Input, InputProps } from '@alfalab/core-components-input';
import { FormControl } from '@alfalab/core-components-form-control';

import { CURRENCY_CODES, CurrencyCodes, THINSP } from './utils/currencyCodes';
import { getFormatedValue, getAmountValueFromStr, formatAmount } from './utils';
import styles from './index.module.css';

/**
 * Тип явно описывающий набор поддерживаемых валют
 * Если вам на проекте приходится что-то кастовать - дайте знать
 * TODO: тип должен стать общим для банка
 */
export { CurrencyCodes } from './utils/currencyCodes';

export type MoneyInputProps = Omit<InputProps, 'value' | 'onChange' | 'type'> & {
    /**
     * Денежное значение в минорных единицах
     * Значение null - значит не установлено
     */
    value?: number | null;

    /**
     * Валюта
     */
    currency?: CurrencyCodes;

    /**
     * Минорные единицы
     */
    minority?: number;

    /**
     * Жир
     */
    bold?: boolean;

    /**
     * Обработчик события изменения значения
     */
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement>,
        payload: {
            /**
             * Денежное значение в минорных единицах
             * Значение null - значит не установлено
             */
            value: number | null;
            /**
             * Значение инпута
             */
            valueString: string;
        },
    ) => void;
};

/**
 * Компонент для ввода денежных значений
 * [Figma](https://www.figma.com/file/KlFOLLkKO8rtvvQE3RXuhq/Click-Library?node-id=532%3A544)
 */
export const MoneyInput: React.FC<MoneyInputProps> = ({
    value = null,
    minority = 100,
    currency = 'RUR',
    label = 'Сумма',
    bold = true,
    className,
    dataTestId,
    onChange,
    ...restProps
}: MoneyInputProps) => {
    const [inputValue, setInputValue] = useState<string>(
        formatAmount({
            value,
            currency: { code: currency, minority },
        }).value,
    );

    const currencySymbol = CURRENCY_CODES[currency];

    useEffect(() => {
        const currentAmountValue = getAmountValueFromStr(inputValue, minority);
        if (currentAmountValue !== value) {
            return setInputValue(
                formatAmount({
                    value,
                    currency: { code: currency, minority },
                }).value,
            );
        }

        return () => undefined;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, currency, minority]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        const enteredValue = input.value.replace(/\s/g, '').replace('.', ',');
        const isCorrectEnteredValue = /(^[0-9]{1,9}(,([0-9]+)?)?$|^\s*$)/.test(enteredValue);

        if (isCorrectEnteredValue) {
            const newFormatedValue = getFormatedValue(enteredValue, currency, minority);

            if (newFormatedValue === inputValue) {
                const caret = input.selectionStart;
                window.requestAnimationFrame(() => {
                    input.selectionStart = caret;
                    input.selectionEnd = caret;
                });
            } else {
                /**
                 * Поддержка положения картки
                 * Поскольку при форматировании введенного значения могут появляться символы типа пробела
                 * или запятая - каретка прыгает в конец и ее необходимо ставить в правильное место
                 */

                // Узнаем длину оригинального инпута с условием обрезания лишних символов

                const [head, tail] = input.value.split(/\.|,/);
                let notFormattedEnteredValueLength = head.length;
                if (tail) {
                    notFormattedEnteredValueLength += 1; // запятая или точка
                    notFormattedEnteredValueLength += tail.slice(0, 2).length; // только 2 символа в минорной части
                }

                const diff = newFormatedValue.length - notFormattedEnteredValueLength;
                const caret = (input.selectionStart as number) + diff;
                window.requestAnimationFrame(() => {
                    input.selectionStart = caret;
                    input.selectionEnd = caret;
                });
            }

            setInputValue(newFormatedValue);
            if (onChange) {
                onChange(e, {
                    value: getAmountValueFromStr(newFormatedValue, minority),
                    valueString: newFormatedValue,
                });
            }
        } else {
            // Не двигаем каретку когда вставляется невалидный символ
            const caret = (input.selectionStart as number) - 1;
            window.requestAnimationFrame(() => {
                input.selectionStart = caret;
                input.selectionEnd = caret;
            });
        }
    };

    return (
        <div className={cn({ [styles.bold]: bold })}>
            <FormControl {...restProps} label={label} className={cn(styles.fakeValueWithCurrency)}>
                {inputValue}
                {inputValue && (
                    <span className={styles.currency}>
                        {THINSP}
                        {currencySymbol}
                    </span>
                )}
            </FormControl>

            <Input
                {...restProps}
                label={label}
                value={inputValue}
                className={cn(styles.component, className)}
                inputClassName={styles.input}
                onChange={handleChange}
                dataTestId={dataTestId}
            />
        </div>
    );
};