import { FOOTER } from '../../../config/footer';
import styles from './Footer.module.css';
import Logo from '../Header/Logo';

function ArrowUp() {
    return (
        <svg
            className={styles.arrowIcon}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
        </svg>
    );
}

export default function Footer() {
    const { brand } = FOOTER;

    const scrollToTop = () => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Logo />
                    </div>

                    <nav aria-label={FOOTER.navLabel}>
                        <ul className={styles.links}>
                            {FOOTER.links.map((link) => (
                                <li key={link.href}>
                                    <a className={styles.link} href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>{FOOTER.copyright}</p>

                    <button type="button" className={styles.backToTop} onClick={scrollToTop}>
                        {FOOTER.backToTop}
                        <span className={styles.arrow} aria-hidden="true">
                            <ArrowUp />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}