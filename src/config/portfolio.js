/** Portfolio section content. Edit copy and cards here, not in the component. */
export const PORTFOLIO = {
    id: 'portfolio', // matches the Hero's "#portfolio" link
    eyebrow: 'What we bring together',
    headline: ['Practical essentials.', 'Professional supply.'],
    intro: 'Explore a considered range for households, workspaces and commercial environments.',
    ctaLabel: 'Explore range',
    // `icon` must be a key of ICONS in Portfolio.jsx
    items: [
        { id: 'power', title: 'Solar & backup power', icon: 'sun', href: '#power' },
        { id: 'mobile', title: 'Phones & accessories', icon: 'battery', href: '#mobile' },
        { id: 'security', title: 'CCTV & security', icon: 'shield', href: '#security' },
        { id: 'commercial', title: 'Commercial spaces', icon: 'bolt', href: '#commercial' },
    ],
};