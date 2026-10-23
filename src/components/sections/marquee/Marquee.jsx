import { MARQUEE } from '../../../config/marquee';
import styles from './Marquee.module.css';

function Group({ hidden = false }) {
    return (
        <ul className={styles.group} aria-hidden={hidden || undefined}>
            {MARQUEE.items.map((item) => (
                <li key={item} className={styles.item}>
                    <span className={styles.text}>{item}</span>
                    <span className={styles.diamond} aria-hidden="true" />
                </li>
            ))}
        </ul>
    );
}

export default function Marquee() {
    return (
        <section
            className={styles.marquee}
            aria-label={MARQUEE.label}
            style={{ '--marquee-duration': `${MARQUEE.durationSec}s` }}
        >
            <div className={styles.band}>
                <div className={styles.track}>
                    <Group />
                    {/* Identical copy so the loop never shows a gap. Hidden from screen readers. */}
                    <Group hidden />
                </div>
            </div>
        </section>
    );
}