import { Meta, StoryObj } from '@storybook/react';
import {Button, ButtonSize, ThemeButton} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(ThemeButton),
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Text',
    },
};

export const Default: Story = {
    args: {
        children: 'Text',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
};

export const OutlineSizeM: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
        size: ButtonSize.M,
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const BackgroundTheme: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: 'Text',
    }
};

export const BackgroundInverted: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: 'Text',
    }
};

export const Square: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: '>',
        square: true,
    }
};

export const SquareSizeM: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.M,
    }
};

export const SquareSizeL: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.L,
    }
};

export const SquareSizeXL: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.XL,
    }
};
