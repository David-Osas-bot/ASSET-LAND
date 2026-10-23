import { useState } from 'react';
import { ENQUIRY } from '../../../config/enquiry';
import { submitEnquiry } from '../../../services/enquiry';
import { ArrowRightIcon, ArrowUpRightIcon } from '../../../ui/Icons';
import styles from './Enquiry.module.css';

const EMPTY = { name: '', email: '', phone: '', organization: '', sourcing: '', details: '' };

function CheckIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
    );
}

function Field({ id, label, optional = false, wide = false, children }) {
    return (
        <div className={`${styles.field} ${wide ? styles.wide : ''}`}>
            <label className={styles.label} htmlFor={id}>
                {label}
                {optional && <span className={styles.optional}> (optional)</span>}
            </label>
            <div className={styles.control}>{children}</div>
        </div>
    );
}

export default function Enquiry() {
    const { featured, form } = ENQUIRY;
    const [values, setValues] = useState(EMPTY);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const update = (field) => (event) =>
        setValues((current) => ({ ...current, [field]: event.target.value }));

    // The lime strip pre-fills the form, then the #enquiry-form anchor scrolls to it
    const askAboutFeatured = () => {
        setValues((current) => ({
            ...current,
            sourcing: featured.sourcing,
            details: current.details || featured.message,
        }));
        setStatus('idle');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (status === 'sending') return;

        setStatus('sending');
        try {
            await submitEnquiry(values);
            setValues(EMPTY);
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    const isSending = status === 'sending';

    return (
        <div id={ENQUIRY.id}>
            {/* ---------- Lime featured-product strip ---------- */}
            <aside className={styles.featured} aria-label={featured.eyebrow}>
                <div className={styles.featuredInner}>
                    <div>
                        <p className={styles.featuredEyebrow}>{featured.eyebrow}</p>
                        <p className={styles.featuredTitle}>
                            {featured.title} <span className={styles.featuredDetail}>{featured.detail}</span>
                        </p>
                    </div>

                    <a className={styles.featuredCta} href="#enquiry-form" onClick={askAboutFeatured}>
                        {featured.cta}
                        <span className={styles.featuredArrow} aria-hidden="true">
                            <ArrowUpRightIcon
                                className={styles.featuredArrowIcon}
                                width={14}
                                height={14}
                            />
                        </span>
                    </a>
                </div>
            </aside>

            {/* ---------- Dark enquiry section ---------- */}
            <section className={styles.contact} aria-labelledby="enquiry-heading">
                <div className={styles.inner}>
                    {/* Decorative rings behind the form */}
                    <div className={styles.rings} aria-hidden="true">
                        <span className={styles.ring} />
                        <span className={`${styles.ring} ${styles.ringInner}`} />
                        <span className={styles.ripple} />
                        <span className={`${styles.ripple} ${styles.rippleLate}`} />
                    </div>

                    <div className={styles.left}>
                        <p className={styles.eyebrow}>{ENQUIRY.eyebrow}</p>
                        <h2 id="enquiry-heading" className={styles.heading}>
                            {ENQUIRY.headline.map((line) => (
                                <span key={line} className={styles.headingLine}>
                                    {line}
                                </span>
                            ))}
                        </h2>
                        <p className={styles.lead}>{ENQUIRY.lead}</p>

                        <div className={styles.assurance}>
                            <span className={styles.check}>
                                <CheckIcon />
                            </span>
                            <p className={styles.assuranceText}>{ENQUIRY.assurance}</p>
                        </div>
                    </div>

                    <div className={styles.card} id="enquiry-form">
                        <div className={styles.cardHeader}>
                            <p className={styles.cardTitle}>{form.title}</p>
                            <p className={styles.step}>
                                {status === 'success' ? form.stepDone : form.step}
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div className={styles.success} role="status">
                                <span className={`${styles.check} ${styles.checkLarge}`}>
                                    <CheckIcon size={26} />
                                </span>
                                <p className={styles.successTitle}>{form.successTitle}</p>
                                <p className={styles.successText}>{form.successText}</p>
                                <button
                                    type="button"
                                    className={styles.again}
                                    onClick={() => setStatus('idle')}
                                >
                                    {form.again}
                                </button>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <Field id="enquiry-name" label={form.nameLabel}>
                                    <input
                                        id="enquiry-name"
                                        className={styles.input}
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        placeholder={form.namePlaceholder}
                                        value={values.name}
                                        onChange={update('name')}
                                        required
                                    />
                                </Field>

                                <Field id="enquiry-email" label={form.emailLabel}>
                                    <input
                                        id="enquiry-email"
                                        className={styles.input}
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        placeholder={form.emailPlaceholder}
                                        value={values.email}
                                        onChange={update('email')}
                                        required
                                    />
                                </Field>

                                <Field id="enquiry-phone" label={form.phoneLabel} optional>
                                    <input
                                        id="enquiry-phone"
                                        className={styles.input}
                                        type="tel"
                                        name="phone"
                                        autoComplete="tel"
                                        placeholder={form.phonePlaceholder}
                                        value={values.phone}
                                        onChange={update('phone')}
                                    />
                                </Field>

                                <Field id="enquiry-org" label={form.orgLabel} optional>
                                    <input
                                        id="enquiry-org"
                                        className={styles.input}
                                        type="text"
                                        name="organization"
                                        autoComplete="organization"
                                        placeholder={form.orgPlaceholder}
                                        value={values.organization}
                                        onChange={update('organization')}
                                    />
                                </Field>

                                <Field id="enquiry-sourcing" label={form.sourcingLabel} wide>
                                    <select
                                        id="enquiry-sourcing"
                                        className={`${styles.input} ${styles.select}`}
                                        name="sourcing"
                                        value={values.sourcing}
                                        onChange={update('sourcing')}
                                        required
                                    >
                                        <option value="" disabled>
                                            {form.sourcingPlaceholder}
                                        </option>
                                        {ENQUIRY.sourcingOptions.map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </Field>

                                <Field id="enquiry-details" label={form.detailsLabel} wide>
                                    <textarea
                                        id="enquiry-details"
                                        className={`${styles.input} ${styles.textarea}`}
                                        name="details"
                                        rows={3}
                                        placeholder={form.detailsPlaceholder}
                                        value={values.details}
                                        onChange={update('details')}
                                        required
                                    />
                                </Field>

                                <div className={styles.footer}>
                                    <div>
                                        <p className={styles.note}>{form.note}</p>
                                        {status === 'error' && (
                                            <p className={styles.error} role="alert">
                                                {form.error}
                                            </p>
                                        )}
                                    </div>

                                    <button className={styles.submit} type="submit" disabled={isSending}>
                                        {isSending ? form.sending : form.submit}
                                        <span className={styles.submitArrow} aria-hidden="true">
                                            <ArrowRightIcon
                                                className={styles.submitArrowIcon}
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}