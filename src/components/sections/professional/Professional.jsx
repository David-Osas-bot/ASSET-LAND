import { PROFESSIONAL } from '../../../config/professional';
import { ArrowRightIcon, ArrowUpRightIcon } from '../../../ui/Icons';
import styles from './Professional.module.css';

const pad = (value) => String(value).padStart(2, '0');

export default function Professional() {
    const { footer } = PROFESSIONAL;

    return (
        <section
            id={PROFESSIONAL.id}
            className={styles.professional}
            aria-labelledby="professional-heading"
        >
            <div className={styles.inner}>
                <header className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>{PROFESSIONAL.eyebrow}</p>
                        <h2 id="professional-heading" className={styles.heading}>
                            {PROFESSIONAL.headline.map((line) => (
                                <span key={line} className={styles.headingLine}>
                                    {line}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <p className={styles.intro}>{PROFESSIONAL.intro}</p>
                </header>

                <ul className={styles.grid}>
                    {PROFESSIONAL.items.map((item, i) => (
                        <li key={item.id} className={styles.cell}>
                            <a className={styles.panel} href={item.href}>
                                <img
                                    className={styles.image}
                                    src={item.image}
                                    alt={item.alt}
                                    width={1600}
                                    height={1100}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <span className={styles.shade} aria-hidden="true" />

                                {item.tag && <span className={styles.tag}>{item.tag}</span>}

                                <span className={styles.content}>
                                    <span className={styles.label}>
                                        {pad(i + 1)} / {item.label}
                                    </span>
                                    <span className={styles.title}>
                                        {item.title.map((line) => (
                                            <span key={line} className={styles.titleLine}>
                                                {line}
                                            </span>
                                        ))}
                                    </span>
                                    <span className={styles.text}>{item.text}</span>
                                </span>

                                <span className={styles.go} aria-hidden="true">
                                    <ArrowUpRightIcon
                                        className={styles.goIcon}
                                        width={16}
                                        height={16}
                                    />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.footer}>
                    <p className={styles.footerText}>{footer.text}</p>
                    <a className={styles.footerLink} href={footer.cta.href}>
                        {footer.cta.label}
                        <span className={styles.footerArrow} aria-hidden="true">
                            <ArrowRightIcon
                                className={styles.footerArrowIcon}
                                width={14}
                                height={14}
                            />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}