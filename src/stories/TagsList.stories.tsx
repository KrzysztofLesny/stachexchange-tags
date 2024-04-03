import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { 
    List, 
    ListItem,
    Typography,
    Box 
} from '@mui/material'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onChange: fn()},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    render: ({ ...args }) => {
        const data = [
            {name: 'item 1', count: 1},
            {name: 'item 2', count: 2},
            {name: 'item 3', count: 3},
            {name: 'item 4', count: 4},
        ];
        return (
            <List>
                {data.map((item: any) => (
                    <ListItem key={item.name} alignItems="center">
                        <Typography>
                            <Box component="span" fontWeight='bold'>{item.name}</Box> has <Box component="span" fontWeight='bold'>{item.count}</Box> associated posts
                        </Typography>
                    </ListItem>
                ))}
            </List>
        );
    }
};
