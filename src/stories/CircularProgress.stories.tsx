import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from '@mui/material';

const meta = {
    title: 'Components/CircularProgress',
    component: CircularProgress,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit' ],
        }
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { },
  } satisfies Meta<typeof CircularProgress>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Default: Story = {
    args: {},
  };