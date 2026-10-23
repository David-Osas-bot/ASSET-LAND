import powerImage from '../assets/images/hero-power.jpg';
import mobileImage from '../assets/images/hero-mobile.jpg';
import securityImage from '../assets/images/hero-security.jpg';
import commercialImage from '../assets/images/hero-commercial.jpg';

/** Hero section content. Edit copy and slides here, not in the components. */
export const HERO = {
    eyebrow: 'Considered supply, made simpler',
    headline: ['The right things.', 'Reliably', 'supplied.'],
    lead: 'From backup power at home to equipment for a busy commercial kitchen, Asset Land brings practical products together in one dependable supply partner.',
    primaryCta: { label: 'Explore the portfolio', href: '#portfolio' },
    secondaryCta: { label: 'Talk supply', href: '#quote' },
    assurance: {
        title: 'For everyday living and serious operations.',
        text: 'A practical portfolio, thoughtfully brought together.',
    },

    carousel: {
        label: 'Featured supply categories',
        intervalMs: 6000,
        href: '#portfolio',
        // `icon` must be a key of SLIDE_ICONS in HeroCarousel.jsx
        slides: [
            {
                id: 'power',
                category: 'Power',
                icon: 'bolt',
                image: powerImage,
                alt: 'Three installers lifting a solar panel into place on a roof',
                badge: 'Product-led. Purpose-built.',
                card: {
                    eyebrow: 'A broad supply portfolio',
                    title: 'For homes & businesses',
                },
            },
            {
                id: 'mobile',
                category: 'Mobile',
                icon: 'battery',
                image: mobileImage,
                alt: 'Portable power equipment ready for use on site', // update to match your photo
                badge: 'Portable. Dependable.',
                card: {
                    eyebrow: 'Mobile power',
                    title: 'Wherever the work goes',
                },
            },
            {
                id: 'security',
                category: 'Security',
                icon: 'shield',
                image: securityImage,
                alt: 'Security equipment installed at a building entrance', // update to match your photo
                badge: 'Protection you can rely on.',
                card: {
                    eyebrow: 'Security & monitoring',
                    title: 'For homes & sites',
                },
            },
            {
                id: 'commercial',
                category: 'Commercial',
                icon: 'store',
                image: commercialImage,
                alt: 'Commercial kitchen equipment in a busy restaurant', // update to match your photo
                badge: 'Built for busy kitchens.',
                card: {
                    eyebrow: 'Commercial equipment',
                    title: 'For serious operations',
                },
            },
        ],
    },

    scrollCue: { label: 'Scroll to explore', href: '#portfolio' },
};