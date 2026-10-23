import { PORTFOLIO } from '../../../config/portfolio';
import {
    ArrowRightIcon,
    BatteryIcon,
    BoltIcon,
    ShieldIcon,
    SunIcon,
} from '../../../ui/Icons';
import styles from './Portfolio.module.css';

const ICONS = {
    sun: SunIcon,
    battery: BatteryIcon,
    shield: ShieldIcon,
    bolt: BoltIcon,
};

const pad = (value) => String(value).padStart(2, '0');

export default function Portfolio() {
    return (
        <section
            id={PORTFOLIO.id}
            className={styles.portfolio}
            aria-labelledby="portfolio-heading"
        >
            <div className={styles.inner}>
                <header className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>{PORTFOLIO.eyebrow}</p>
                        <h2 id="portfolio-heading" className={styles.heading}>
                            {PORTFOLIO.headline.map((line) => (
                                <span key={line} className={styles.headingLine}>
                                    {line}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <p className={styles.intro}>{PORTFOLIO.intro}</p>
                </header>

                <ul className={styles.grid}>
                    {PORTFOLIO.items.map((item, i) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <li key={item.id} className={styles.cell}>
                                <a className={styles.card} href={item.href}>
                                    <span className={styles.top}>
                                        <span className={styles.number}>{pad(i + 1)}</span>
                                        <span className={styles.icon} aria-hidden="true">
                                            <Icon width={20} height={20} />
                                        </span>
                                    </span>

                                    <span className={styles.body}>
                                        <span className={styles.title}>{item.title}</span>
                                        <span className={styles.cta}>
                                            {PORTFOLIO.ctaLabel}
                                            <ArrowRightIcon
                                                className={styles.ctaArrow}
                                                width={13}
                                                height={13}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}