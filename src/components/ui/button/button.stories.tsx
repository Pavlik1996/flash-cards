import type { Meta, StoryObj } from '@storybook/react'

import logOutIcon from '../../../assets/icons/log-out.svg'

import { Button } from './'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link', 'active'],
      control: { type: 'radio' },
    },
    fullWidth: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: true,
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false,
  },
}

export const TertiaryDisabled: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: true,
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link-button',
    disabled: false,
    as: 'a',
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
}

export const AsLink: Story = {
  args: {
    variant: 'link',
    children: 'Link that looks like a button',
    as: 'a',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'button with icon',
    icon: logOutIcon,
    disabled: false,
  },
}

export const PrimaryDisabledWithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'button with icon',
    disabled: true,
    icon: logOutIcon,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button Secondary',
    disabled: false,
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    children: 'Button Secondary',
    disabled: true,
  },
}
