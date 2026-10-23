import { useState } from 'react';
import { CATALOG } from '../../../config/catalog';
import { ArrowRightIcon, ArrowUpRightIcon } from '../../../ui/Icons';
import styles from './Catalog.module.css';

const CATEGORY_LABELS = Object.fromEntries(CATALOG.categories.map((c) => [c.id, c.label]));

export default function Catalog() {
    const [filter, setFilter] = useState('all');

    const visible =
        filter === 'all'
            ? CATALOG.items
            : CATALOG.items.filter((item) => item.category === filter);

    return (
        <section id={CATALOG.id} className={styles.catalog} aria-labelledby="catalog-heading">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>{CATALOG.eyebrow}</p>
                        <h2 id="catalog-heading" className={styles.heading}>
                            {CATALOG.headline.map((line) => (
                                <span key={line} className={styles.headingLine}>
                                    {line}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <p className={styles.intro}>{CATALOG.intro}</p>
                </header>

                <div className={styles.bar}>
                    <div className={styles.tabs} role="group" aria-label={CATALOG.filterLabel}>
                        {CATALOG.categories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                className={styles.tab}
                                aria-pressed={filter === category.id}
                                onClick={() => setFilter(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <p className={styles.count} aria-live="polite">
                        {visible.length} {visible.length === 1 ? 'item' : 'items'}
                    </p>
                </div>

                {/* key={filter} remounts the grid so cards animate in again on each filter */}
                <ul key={filter} className={styles.grid}>
                    {visible.map((item, i) => (
                        <li key={item.id} className={styles.cell} style={{ '--i': i }}>
                            <a className={styles.card} href={item.href}>
                                <span className={styles.media}>
                                    <img
                                        className={styles.image}
                                        src={item.image}
                                        alt={item.alt}
                                        width={900}
                                        height={750}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className={styles.tag}>{item.tag}</span>
                                    <span className={styles.go} aria-hidden="true">
                                        <ArrowUpRightIcon width={16} height={16} />
                                    </span>
                                </span>

                                <span className={styles.body}>
                                    <span className={styles.category}>
                                        {CATEGORY_LABELS[item.category]}
                                    </span>

                                    <span className={styles.titleRow}>
                                        <span className={styles.title}>{item.title}</span>
                                        {item.price && <span className={styles.price}>{item.price}</span>}
                                    </span>

                                    <span className={styles.text}>{item.text}</span>

                                    <span className={styles.enquire}>
                                        {CATALOG.enquireLabel}
                                        <span className={styles.enquireArrow} aria-hidden="true">
                                            <ArrowRightIcon
                                                className={styles.enquireArrowIcon}
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                    </span>
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}