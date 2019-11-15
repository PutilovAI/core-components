/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const buttonOnWhite = `.alfa-on-white & {
    color: var(--color-content-alfa-on-color);
    background: transparent;
    border-color: var(--color-border-control-alfa-on-color);
    border-style: solid;
    border-width: 1px;

    &.button_hovered {
        border-color: var(--color-border-control-hovered-alfa-on-color);
    }

    &.button_focused {
        border-color: var(--color-border-control-focused-alfa-on-color);
        box-shadow: inset 0 0 0 1px var(--color-content-alfa-on-color);

        &.button_hovered {
            border-color: var(--color-border-control-hovered-alfa-on-color);
            box-shadow: inset 0 0 0 1px var(--color-content-alfa-on-color);
        }
    }

    &.button_pressed,
    &:active {
        background: rgba(0, 0, 0, 0.1);
        border-color: var(--color-border-control-focused-alfa-on-color);
    }

    &.button_checked,
    &.button_view_action {
        color: var(--color-content-alfa-on-color);
        background: rgba(255, 255, 255, 0.2);
        border-color: var(--color-border-control-checked-alfa-on-color);

        &.button_hovered {
            background: rgba(255, 255, 255, 0.3);
        }

        &.button_pressed,
        &:active {
            background: rgba(255, 255, 255, 0.15);
        }

        &.button_focused {
            border-color: var(--color-border-control-focused-alfa-on-color);
        }
    }

    &.button_view_extra,
    &.button_view_rounded {
        background: var(--color-accent-translucent);
        border-color: var(--color-accent-translucent);

        color: var(--color-content-accent-alfa-on-color);

        &.button_hovered {
            background: var(--color-accent);
            border-color: var(--color-accent);
        }

        &.button_focused {
            border-color: var(--color-content-alfa-on-color);
        }

        &.button_pressed,
        &:active {
            background: var(--color-accent-alt);
            border-color: var(--color-accent-alt);
        }
    }

    &.button_pseudo {
        border-style: dashed;

        &.button_focused {
            border-style: solid;
            border-color: var(--color-content-alfa-on-color);

            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.9);

            &.button_hovered {
                box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7);
                border-color: rgba(255, 255, 255, 0.7);
            }
        }
    }

    &.button_disabled {
        background: rgba(255, 255, 255, 0.08);
        border-color: transparent;

        .button__text {
            color: var(--color-content-disabled-alfa-on-color);
        }
    }
`;
