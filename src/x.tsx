import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';
import App from "./App";

const meta = {
    title: 'App',
    component: App,
    decorators: [withRouter],
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                searchParams: { 
                    pagesize: "10",
                    sort: "popular",
                    order: "desc",
                    page: "1" 
                },
            },
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Deafult: Story = {};