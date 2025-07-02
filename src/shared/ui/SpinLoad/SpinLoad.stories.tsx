import { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {SpinLoad} from "shared/ui/SpinLoad/SpinLoad";


const meta = {
    title: 'shared/SpinLoad',
    component: SpinLoad,
    argTypes: {},
} satisfies Meta<typeof SpinLoad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};