import { HERO } from "../../../config/hero";
import ButtonLink from '../../../ui/ButtonLink';
import {
    ArrowDownIcon,
    ArrowRightIcon,
    BoltIcon,
    ShieldIcon,
    SunIcon,
} from '../../../ui/Icons';
import HeroCarousel from './HeroCarousel';
import styles from './Hero.module.css';

const ASSURANCE_ICONS = [
    { name: 'sun', Icon: SunIcon },
    { name: 'shield', Icon: ShieldIcon },
    { name: 'bolt', Icon: BoltIcon },
];

export default function Hero() {
    const { carousel } = HERO;

    return (
        <section className={styles.hero} aria-labelledby="hero-heading">
            <div className={styles.inner}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>{HERO.eyebrow}</p>

                    <h1 id="hero-heading" className={styles.heading}>
                        {HERO.headline.map((line) => (
                            <span key={line} className={styles.headingLine}>
                                {line}{' '}
                            </span>
                        ))}
                    </h1>

                    <p className={styles.lead}>{HERO.lead}</p>

                    <div className={styles.actions}>
                        <ButtonLink
                            href={HERO.primaryCta.href}
                            size="lg"
                            icon={<ArrowRightIcon width={16} height={16} />}
                        >
                            {HERO.primaryCta.label}
                        </ButtonLink>
                        <ButtonLink href={HERO.secondaryCta.href} variant="text">
                            {HERO.secondaryCta.label}
                        </ButtonLink>
                    </div>

                    <div className={styles.assurance}>
                        <div className={styles.assuranceIcons} aria-hidden="true">
                            {ASSURANCE_ICONS.map(({ name, Icon }) => (
                                <span key={name} className={styles.assuranceIcon}>
                                    <Icon width={15} height={15} />
                                </span>
                            ))}
                        </div>
                        <div>
                            <p className={styles.assuranceTitle}>{HERO.assurance.title}</p>
                            <p className={styles.assuranceText}>{HERO.assurance.text}</p>
                        </div>
                    </div>
                </div>

                <HeroCarousel
                    label={carousel.label}
                    slides={carousel.slides}
                    intervalMs={carousel.intervalMs}
                    href={carousel.href}
                />

                <a className={styles.scrollCue} href={HERO.scrollCue.href}>
                    <ArrowDownIcon width={14} height={14} />
                    {HERO.scrollCue.label}
                </a>
            </div>
        </section>
    );
}