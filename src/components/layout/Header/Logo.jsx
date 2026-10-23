import { SITE } from '../../../config/site';
import styles from './Header.module.css';

export default function Logo() {
    return (
        <a className={styles.logo} href="/" aria-label={`${SITE.name}, home`}>
            <span className={styles.logoMark} aria-hidden="true">
                {SITE.logoMark}
                <span className={styles.logoDot} />
            </span>
            <span className={styles.logoText}>
                <span className={styles.logoName}>{SITE.name.toUpperCase()}</span>
                <span className={styles.logoTagline}>{SITE.tagline}</span>
            </span>
        </a>
    );
}