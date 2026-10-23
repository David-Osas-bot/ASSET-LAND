import solar from '../assets/images/catalog/product-solar.jpg';
import mobile from '../assets/images/catalog/product-mobile.jpg';
import security from '../assets/images/catalog/product-security.jpg';
import kitchen from '../assets/images/catalog/product-kitchen.jpg';
import flooring from '../assets/images/catalog/product-flooring.jpg';

const ENQUIRE_HREF = '#quote';

/** Catalog section content. Edit copy, filters and products here. */
export const CATALOG = {
    id: 'catalog',
    eyebrow: 'Supply, across the everyday',
    headline: ['A portfolio built', 'around real needs.'],
    intro: 'Browse the range. For product availability and procurement details, start a conversation with our team.',
    filterLabel: 'Filter the portfolio',
    enquireLabel: 'Enquire',
    categories: [
        { id: 'all', label: 'All' },
        { id: 'solar', label: 'Solar & power' },
        { id: 'mobile', label: 'Mobile & accessories' },
        { id: 'security', label: 'Security' },
        { id: 'commercial', label: 'Commercial spaces' },
    ],
    // `category` must be an id from `categories` above. `price` is optional.
    items: [
        {
            id: 'solar-panels',
            category: 'solar',
            tag: 'Energy',
            title: 'SAJ solar panels',
            text: 'Solar energy for home and business use.',
            image: solar,
            alt: 'SAJ solar panel beside an inverter and battery stack',
            href: ENQUIRE_HREF,
        },
        {
            id: 'inverters-batteries',
            category: 'solar',
            tag: 'Backup',
            title: 'Inverters & batteries',
            text: 'Backup power essentials, brought together.',
            image: solar,
            alt: 'Inverter and battery stack beside a solar panel',
            href: ENQUIRE_HREF,
        },
        {
            id: 'mobile-phones',
            category: 'mobile',
            tag: 'Connected',
            title: 'Mobile phones',
            text: 'Everyday mobile devices for personal and business use.',
            image: mobile,
            alt: 'Smartphone, smart watch, power bank and charger on a stone surface',
            href: ENQUIRE_HREF,
        },
        {
            id: 'smart-watches',
            category: 'mobile',
            tag: 'Connected',
            title: 'Smart watches',
            text: 'Connected wearables for everyday use.',
            image: mobile,
            alt: 'Smart watch beside a smartphone and power bank',
            href: ENQUIRE_HREF,
        },
        {
            id: 'power-banks',
            category: 'mobile',
            tag: 'On the go',
            title: 'High-grade power banks',
            text: 'Portable power and charging accessories.',
            image: mobile,
            alt: 'Power bank, charger and smartphone',
            href: ENQUIRE_HREF,
        },
        {
            id: 'usb-c-charger',
            category: 'mobile',
            tag: 'Per piece',
            title: 'Samsung 45W USB-C charger',
            price: '₦30,000',
            text: 'USB-C charging, sold per piece.',
            image: mobile,
            alt: 'USB-C wall charger beside a smartphone',
            href: ENQUIRE_HREF,
        },
        {
            id: 'cctv',
            category: 'security',
            tag: 'Security',
            title: 'Modern CCTV',
            text: 'Camera systems for homes and businesses.',
            image: security,
            alt: 'Security camera mounted on a modern building',
            href: ENQUIRE_HREF,
        },
        {
            id: 'kitchen-equipment',
            category: 'commercial',
            tag: 'Professional',
            title: 'Commercial kitchen equipment',
            text: 'Equipment for professional kitchen environments.',
            image: kitchen,
            alt: 'Professional kitchen with a stainless steel range',
            href: ENQUIRE_HREF,
        },
        {
            id: 'garage-flooring',
            category: 'commercial',
            tag: 'Modular',
            title: 'Modular garage flooring mats',
            text: 'Modular floor covering for garage spaces.',
            image: flooring,
            alt: 'Interlocking modular garage floor tiles in black and copper',
            href: ENQUIRE_HREF,
        },
    ],
};