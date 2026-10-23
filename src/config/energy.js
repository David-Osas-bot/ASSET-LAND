import energyVideos from '../assets/videos/energy-setup.mp4';

/** Energy section content. Edit copy, list rows and links here. */
export const ENERGY = {
    id: 'energy', // matches an "#energy" nav link
    eyebrow: 'Keep the day moving',
    headline: ['A thoughtful start to', 'your energy setup.'],
    lead: 'Explore SAJ solar panels alongside inverters and batteries. A focused range for households and businesses planning around their power needs.',
    video: energyVideos,
    imageAlt: 'SAJ solar panel, inverter and battery stack against a terracotta wall',
    badge: 'Designed to power what matters',
    tag: 'Energy essentials',
    items: [
        { id: 'panels', label: 'SAJ solar panels', href: '#solar-panels' },
        { id: 'inverters', label: 'Inverters', href: '#inverters' },
        { id: 'batteries', label: 'Batteries', href: '#batteries' },
    ],
    cta: { label: 'Explore solar & backup', href: '#solar' },
};