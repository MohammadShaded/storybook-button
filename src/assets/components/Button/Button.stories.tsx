import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: { control: { type: 'radio' }, options: ['primary', 'secondary', 'text'] },
		size: { control: { type: 'radio' }, options: ['small', 'medium', 'large'] },
		color: { control: { type: 'radio' }, options: ['blue', 'red', 'green'] },
	}
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
		size: 'medium',
		color: 'blue'
	}
};

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
		size: 'medium',
		color: 'blue'
	}
};

export const Text: Story = {
	args: {
		children: 'Text Button',
		variant: 'text',
		size: 'medium',
		color: 'blue'
	}
};

