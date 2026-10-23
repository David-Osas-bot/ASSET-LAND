import kitchenImage from '../assets/images/commercial-kitchen.jpg';
import garageImage from '../assets/images/commercial-garage.jpg';

/** Professional environments section content. */
export const PROFESSIONAL = {
    id: 'commercial', // matches the "#commercial" portfolio card link
    eyebrow: 'For professional environments',
    headline: ['When the space has', 'a job to do.'],
    intro: 'Equipment and materials for the places where work happens—from a professional kitchen to a well-equipped garage.',
    // `title` is an array: each entry is one line
    items: [
        {
            id: 'kitchen',
            tag: 'Professional supply', // optional lime tag, top left
            label: 'Commercial kitchen',
            title: ['Built for service.'],
            text: 'Professional commercial kitchen equipment.',
            image: kitchenImage,
            alt: 'Professional kitchen with a stainless steel range and tiled wall',
            href: '#kitchen',
        },
        {
            id: 'garage',
            label: 'Garage & workspace',
            title: ['A better floor', 'to work from.'],
            text: 'Modular garage flooring mats, made to configure.',
            image: garageImage,
            alt: 'Interlocking modular garage floor tiles in black and copper',
            href: '#flooring',
        },
    ],
    footer: {
        text: 'Explore equipment for your commercial environment.',
        cta: { label: 'Discuss a requirement', href: '#quote' },
    },
};