import { Meta, StoryObj } from '@storybook/react';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(AppLinkTheme),
        },
        to: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
        to: '/'
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
        to: '/'
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
        to: '/'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
        to: '/'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};