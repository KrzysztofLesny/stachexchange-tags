import type { Meta, StoryObj } from '@storybook/react';
import { 
    Alert, 
    AlertTitle
} from '@mui/material'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Alert',
  component: Alert,
 
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
    color: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
    variant: {
        control: 'select',
        options: ['standard', 'filled', 'outlined'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    children: 'Success',
    variant: "standard",
    severity: 'success'
  },
};
export const Info: Story = {
  args: {
    ...Success.args,
    children: 'Info',
    severity: 'info'
  },
};
export const Error: Story = {
  args: {
    ...Success.args,
    children: 'Error',
    severity: 'error'
  },
};
export const Warning: Story = {
  args: {
    ...Success.args,
    children: 'Warning',
    severity: 'warning'
  },
};
export const SuccessWithTitle: Story = {
  args: {
    ...Success.args,
  },
  render: ({ ...args }) => {
    return (
      <Alert>
        <AlertTitle>{args.children}</AlertTitle>
        message
      </Alert>
  )}
};
export const InfoWithTitle: Story = {
  args: {
    ...Info.args,
  },
  render: ({ ...args }) => {
    return (
      <Alert severity={args.severity}>
        <AlertTitle>{args.children}</AlertTitle>
        message
      </Alert>
  )}
};
export const ErrorWithTitle: Story = {
  args: {
    ...Error.args,
  },
  render: ({ ...args }) => {
    return (
      <Alert severity={args.severity}>
        <AlertTitle>{args.children}</AlertTitle>
        message
      </Alert>
  )}
};
export const WarningWithTitle: Story = {
  args: {
    ...Warning.args,
  },
  render: ({ ...args }) => {
    return (
      <Alert severity={args.severity}>
        <AlertTitle>{args.children}</AlertTitle>
        message
      </Alert>
  )}
};