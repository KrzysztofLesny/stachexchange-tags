import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState, useCallback, ReactNode } from 'react';
import { 
    FormControl, 
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent
} from '@mui/material'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Select',
  component: Select,
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
      options: ['filled', 'outlined', 'standard'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onChange: fn()},
} satisfies Meta<typeof Select>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: ({ ...args }) => {
    const selectValues = [
        'value 1',
        'value 2',
        'value 3',
        'value 4',
    ];
    const [value, setValue] = useState('')

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const {
            target: { value },
        } = event
        setValue(value as string)
    }
    /*
    const renderValue = useCallback(
        (selected: string): ReactNode =>
            selected === '' ? '' : selected,
        [],
    )

    Did not use above function as I was getting the following error and I couldn't find a way to fix it

    Type '(selected: string) => ReactNode' is not assignable to type '(value: unknown) => ReactNode'.
    Types of parameters 'selected' and 'value' are incompatible.
    Type 'unknown' is not assignable to type 'string'.ts(2322)
    Select.d.ts(130, 3): The expected type comes from property 'renderValue' which is declared here on type 'IntrinsicAttributes & SelectProps<unknown>'
    */

    return (
        <FormControl sx={{width: 300}}>
            <InputLabel id="sort-by-label">Sort by:</InputLabel>
            <Select
                labelId="sort-by-label"
                id="sort-by"
                value={value}
                label="Sort by"
                onChange={handleChange}
                /* renderValue={renderValue} */
                {...args}
            >
                {selectValues.map(selectValue => (
                    <MenuItem key={selectValue} value={selectValue}>
                        {selectValue}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
  }
};
