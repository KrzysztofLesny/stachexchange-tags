import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextField } from '@mui/material';

const meta = {
    title: 'Components/TextField',
    component: TextField,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: 'select',
            options: ['standard', 'filled', 'outlined'],
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'error', 'info', 'success', 'warning' ],
        }
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
  } satisfies Meta<typeof TextField>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Default: Story = {
    args: {
        placeholder: 'Placeholder text',
        variant: "standard",
    },
  };

  export const WithLabel: Story = {
    args: {
        ...Default.args,
        label: 'Label' 
    },
  };
  export const WithdValue: Story = {
    args: {
        ...Default.args,
        value: "Example value" 
    },
  };
  export const WithLabelAndValue: Story = {
    args: {
        ...WithLabel.args,
        value: "Example value" 
    },
    render: ({ ...args }) => {
        return (
            <TextField  value={args.value} label={args.label} ></TextField>
        )
    }
  };