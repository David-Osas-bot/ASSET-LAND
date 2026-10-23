import { ENERGY } from '../../../config/energy';
import { ArrowRightIcon, ArrowUpRightIcon, SunIcon } from '../../../ui/Icons';
import styles from './Energy.module.css';

const pad = (value) => String(value).padStart(2, '0');

export default function Energy() {
    return (
        <section id={ENERGY.id} className={styles.energy} aria-labelledby="energy-heading">
            <div className={styles.inner}>
                <div className={styles.media}>
                    <div className={styles.frame}>
                        <video
                            className={styles.image} // or styles.video
                            src={ENERGY.video}      // path to your .mp4 file
                            width={1200}
                            height={1050}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <p className={styles.badge}>{ENERGY.badge}</p>

                    <p className={styles.tag}>
                        <SunIcon width={14} height={14} aria-hidden="true" />
                        {ENERGY.tag}
                    </p>
                </div>

                <div className={styles.content}>
                    <p className={styles.eyebrow}>{ENERGY.eyebrow}</p>

                    <h2 id="energy-heading" className={styles.heading}>
                        {ENERGY.headline.map((line) => (
                            <span key={line} className={styles.headingLine}>
                                {line}
                            </span>
                        ))}
                    </h2>

                    <p className={styles.lead}>{ENERGY.lead}</p>

                    <ul className={styles.list}>
                        {ENERGY.items.map((item, i) => (
                            <li key={item.id} className={styles.listItem}>
                                <a className={styles.row} href={item.href}>
                                    <span className={styles.number}>{pad(i + 1)}</span>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.arrow} aria-hidden="true">
                                        <ArrowRightIcon
                                            className={styles.arrowIcon}
                                            width={16}
                                            height={16}
                                        />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a className={styles.cta} href={ENERGY.cta.href}>
                        {ENERGY.cta.label}
                        <span className={styles.ctaArrow} aria-hidden="true">
                            <ArrowUpRightIcon
                                className={styles.ctaArrowIcon}
                                width={13}
                                height={13}
                            />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}