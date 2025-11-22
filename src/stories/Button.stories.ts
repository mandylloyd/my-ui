import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Primary button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Single primary button variation.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
