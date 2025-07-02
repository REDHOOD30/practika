import React, { Suspense } from 'react';
import type { Decorator } from '@storybook/react';

export const SuspenseDecorator: Decorator = (Story) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Story />
    </Suspense>
);