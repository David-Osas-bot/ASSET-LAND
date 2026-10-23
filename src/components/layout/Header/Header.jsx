import { useEffect, useId, useRef, useState } from 'react';
import {
    ANNOUNCEMENT,
    HEADER_CTA,
    NAV_LINKS,
    SITE,
} from '../../../config/site';
import ButtonLink from '../../../ui/ButtonLink/ButtonLink';
import {
    ArrowUpRightIcon,
    CloseIcon,
    MenuIcon,
    SearchIcon,
} from '../../../ui/Icons';
import Logo from './Logo';
import styles from './Header.module.css';

// Must match the breakpoint in Header.module.css
const DESKTOP_QUERY = '(min-width: 55em)';

/**
 * Site header: announcement bar, primary navigation and quote CTA.
 *
 * @param {{ onSearchClick?: () => void }} props
 */
export default function Header({ onSearchClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const panelId = useId();
    const toggleRef = useRef(null);

    // While the mobile menu is open: Escape closes it and the page doesn't scroll behind it.
    useEffect(() => {
        if (!isMenuOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                toggleRef.current?.focus();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    // Close the mobile menu if the viewport grows to desktop size.
    useEffect(() => {
        const mediaQuery = window.matchMedia(DESKTOP_QUERY);
        const handleChange = (event) => {
            if (event.matches) setIsMenuOpen(false);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);
    const ctaIcon = <ArrowUpRightIcon width={14} height={14} />;

    return (
        <>
            <a className={styles.skipLink} href="#main-content">
                Skip to main content
            </a>

            <div className={styles.announcement}>
                <p className={styles.announcementText}>
                    <span className={styles.announcementLabel}>{ANNOUNCEMENT.label}</span>
                    <span className={styles.announcementSeparator} aria-hidden="true">
                        /
                    </span>
                    <span>{ANNOUNCEMENT.message}</span>
                </p>
            </div>

            <header className={styles.header}>
                <div className={styles.inner}>
                    <Logo />

                    <nav className={styles.nav} aria-label="Primary">
                        <ul className={styles.navList}>
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <a className={styles.navLink} href={href}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.actions}>
                        <button
                            type="button"
                            className={styles.iconButton}
                            onClick={onSearchClick}
                            aria-label="Search"
                        >
                            <SearchIcon />
                        </button>

                        <div className={styles.ctaDesktop}>
                            <ButtonLink href={HEADER_CTA.href} icon={ctaIcon}>
                                {HEADER_CTA.label}
                            </ButtonLink>
                        </div>

                        <button
                            ref={toggleRef}
                            type="button"
                            className={`${styles.iconButton} ${styles.menuToggle}`}
                            onClick={() => setIsMenuOpen((open) => !open)}
                            aria-expanded={isMenuOpen}
                            aria-controls={panelId}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                <div id={panelId} className={styles.panel} hidden={!isMenuOpen}>
                    <nav aria-label={`${SITE.name} mobile`}>
                        <ul>
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <a className={styles.panelLink} href={href} onClick={closeMenu}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.panelCta}>
                        <ButtonLink
                            href={HEADER_CTA.href}
                            icon={ctaIcon}
                            fullWidth
                            onClick={closeMenu}
                        >
                            {HEADER_CTA.label}
                        </ButtonLink>
                    </div>
                </div>
            </header>
        </>
    );
}