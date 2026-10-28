import logoImage from '../../../assets/images/logo/assetland-logo.png';
import styles from './Logo.module.css';

export function Logo({ href = '/', className = '' }) {
    return (
        <a className={`${styles.logo} ${className}`} href={href}>
            <img
                className={styles.image}
                src={logoImage}
                alt="Asset Land Limited"
                width={700}
                height={226}
                decoding="async"
            />
        </a>
    );
}

export default Logo;