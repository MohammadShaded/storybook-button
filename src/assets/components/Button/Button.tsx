import React from 'react';
import './button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'blue' | 'red' | 'green';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	color?: ButtonColor;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'medium',
	color = 'blue',
	className = '',
	...rest
}) => {
	const classes = ['sb-btn', `sb-btn--${variant}`, `sb-btn--${size}`, `sb-btn--${color}`, className]
		.filter(Boolean)
		.join(' ');

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	);
};

export default Button;
