import { Fragment, useRef, useState } from 'react';
import useCarousel from '../../../hooks/useCarousel';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import {
    ArrowUpRightIcon,
    BatteryIcon,
    BoltIcon,
    PauseIcon,
    PlayIcon,
    ShieldIcon,
    StoreIcon,
} from '../../../ui/Icons';
import styles from './HeroCarousel.module.css';

const SLIDE_ICONS = {
    bolt: BoltIcon,
    battery: BatteryIcon,
    shield: ShieldIcon,
    store: StoreIcon,
};

const SWIPE_THRESHOLD_PX = 40;
const pad = (value) => String(value).padStart(2, '0');

/**
 * Auto-advancing image carousel. The badge, portfolio card and range card
 * animate with each slide so the overlays always describe the visible image.
 *
 * Auto-play pauses on mouse hover, keyboard focus and via the pause button,
 * and is disabled for visitors who prefer reduced motion.
 */
export default function HeroCarousel({ label, slides, intervalMs, href }) {
    const { index, next, prev, goTo } = useCarousel(slides.length);
    const reducedMotion = usePrefersReducedMotion();
    const [isPausedByUser, setIsPausedByUser] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const touchStartX = useRef(null);

    const isAutoPlaying = !isPausedByUser && !reducedMotion;
    const slide = slides[index];
    const SlideIcon = SLIDE_ICONS[slide.icon];
    const categoryNames = slides.map((item) => item.category);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') next();
        if (event.key === 'ArrowLeft') prev();
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(distance) < SWIPE_THRESHOLD_PX) return;
        if (distance < 0) next();
        else prev();
    };

    return (
        <div
            className={styles.media}
            role="region"
            aria-roledescription="carousel"
            aria-label={label}
            data-holding={isHovered || isFocused}
            style={{ '--carousel-interval': `${intervalMs}ms` }}
            onKeyDown={handleKeyDown}
            onPointerEnter={(event) => event.pointerType === 'mouse' && setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onFocus={(event) => {
                // Only keyboard focus pauses; clicking a button shouldn't freeze the slideshow.
                if (event.target.matches(':focus-visible')) setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
        >
            <div
                className={styles.frame}
                aria-live={isAutoPlaying ? 'off' : 'polite'}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((item, i) => (
                    <div
                        key={item.id}
                        className={styles.slide}
                        data-active={i === index}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} of ${slides.length}`}
                        aria-hidden={i !== index}
                    >
                        <img
                            className={styles.image}
                            src={item.image}
                            alt={item.alt}
                            width={1500}
                            height={1250}
                            decoding="async"
                            fetchPriority={i === 0 ? 'high' : 'low'}
                        />
                    </div>
                ))}

                <p className={styles.badge}>
                    <span className={styles.badgeDot} aria-hidden="true" />
                    <span key={slide.id} className={styles.swap}>
                        {slide.badge}
                    </span>
                </p>

                <div className={styles.controls}>
                    <ul className={styles.segments}>
                        {slides.map((item, i) => {
                            const isActive = i === index;
                            return (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        className={styles.segment}
                                        aria-label={`Show ${item.category}, slide ${i + 1} of ${slides.length}`}
                                        aria-current={isActive ? 'true' : undefined}
                                        data-running={isActive && isAutoPlaying}
                                        onClick={() => goTo(i)}
                                    >
                                        <span className={styles.segmentTrack}>
                                            <span
                                                className={styles.segmentFill}
                                                onAnimationEnd={isActive && isAutoPlaying ? next : undefined}
                                            />
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {!reducedMotion && (
                        <button
                            type="button"
                            className={styles.playToggle}
                            onClick={() => setIsPausedByUser((paused) => !paused)}
                            aria-label={isPausedByUser ? 'Play slideshow' : 'Pause slideshow'}
                        >
                            {isPausedByUser ? (
                                <PlayIcon width={14} height={14} />
                            ) : (
                                <PauseIcon width={14} height={14} />
                            )}
                        </button>
                    )}
                </div>
            </div>

            <div className={styles.portfolioCard}>
                <div
                    key={slide.id}
                    className={`${styles.portfolioInner} ${styles.swap}`}
                    style={{ '--swap-delay': '80ms' }}
                >
                    <span className={styles.portfolioIcon} aria-hidden="true">
                        <SlideIcon width={18} height={18} />
                    </span>
                    <div>
                        <p className={styles.portfolioEyebrow}>{slide.card.eyebrow}</p>
                        <p className={styles.portfolioTitle}>{slide.card.title}</p>
                    </div>
                </div>
            </div>

            <a
                className={styles.rangeCard}
                href={href}
                aria-label={`Explore the portfolio: ${categoryNames.join(', ')}`}
            >
                <ArrowUpRightIcon className={styles.rangeArrow} width={16} height={16} />
                <span
                    key={slide.id}
                    className={`${styles.rangeNumber} ${styles.swap}`}
                    style={{ '--swap-delay': '140ms' }}
                    aria-hidden="true"
                >
                    {pad(index + 1)}—{pad(slides.length)}
                </span>
                <span className={styles.rangeCategories} aria-hidden="true">
                    {slides.map((item, i) => (
                        <Fragment key={item.id}>
                            {i > 0 && <span className={styles.rangeSeparator}>{' · '}</span>}
                            <span className={styles.rangeCategory} data-active={i === index}>
                                {item.category}
                            </span>
                        </Fragment>
                    ))}
                </span>
            </a>
        </div>
    );
}