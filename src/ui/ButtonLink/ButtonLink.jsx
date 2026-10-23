import styles from './ButtonLink.module.css';

/**
 * Link styled as a button.
 *
 * @param {object} props
 * @param {string} props.href
 * @param {'primary' | 'text'} [props.variant='primary']
 * @param {'md' | 'lg'} [props.size='md']  Only affects the primary variant.
 * @param {boolean} [props.fullWidth=false]
 * @param {import('react').ReactNode} [props.icon]  Rendered after the label.
 */
export default function ButtonLink({
    href,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    icon,
    children,
    ...rest
}) {
    const className = [
        styles.base,
        styles[variant],
        variant === 'primary' && size === 'lg' ? styles.large : '',
        fullWidth ? styles.fullWidth : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <a className={className} href={href} {...rest}>
            {children}
            {icon}
        </a>
    );
}