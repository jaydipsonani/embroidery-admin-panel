import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    icon,
    className,
    ...props
}) => {
    return (
        <div className={clsx(styles.container, className)}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.wrapper}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <input
                    className={clsx(styles.input, { [styles.hasIcon]: !!icon, [styles.hasError]: !!error })}
                    {...props}
                />
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
