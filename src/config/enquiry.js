/** Enquiry section content. Edit copy, options and the featured product here. */
export const ENQUIRY = {
    id: 'quote', // matches the Hero's "#quote" link

    // Lime strip above the dark section
    featured: {
        eyebrow: 'Clear product details',
        title: 'Samsung 45W USB-C charger',
        detail: '— ₦30,000 per piece.',
        cta: 'Ask about this item',
        // Clicking the button pre-fills the form with these
        sourcing: 'mobile', // must be an id from `sourcingOptions`
        message: "I'd like to ask about the Samsung 45W USB-C charger.",
    },

    eyebrow: 'Start with a conversation',
    headline: ['Your next supply', 'starts here.'],
    lead: "Tell us what you're sourcing. Share a few details and submit a product enquiry directly to Asset Land.",
    assurance: 'Household solutions and professional procurement, in one considered portfolio.',

    form: {
        title: 'Product enquiry',
        step: '01 — Tell us a little',
        stepDone: '02 — Received',
        nameLabel: 'Your name',
        namePlaceholder: 'Name',
        emailLabel: 'Email address',
        emailPlaceholder: 'you@example.com',
        phoneLabel: 'Phone',
        phonePlaceholder: 'Phone number',
        orgLabel: 'Organization',
        orgPlaceholder: 'Business or organization',
        sourcingLabel: 'What are you sourcing?',
        sourcingPlaceholder: 'Choose a category',
        detailsLabel: 'A few details',
        detailsPlaceholder: 'Share what you have in mind…',
        note: 'Your request is stored by Asset Land. Submitting does not send email or WhatsApp notifications.',
        submit: 'Send enquiry',
        sending: 'Sending…',
        error: 'Something went wrong. Please try again in a moment.',
        successTitle: 'Thank you. Your enquiry is in.',
        successText: "We've received your details and will respond about your request.",
        again: 'Send another enquiry',
    },

    sourcingOptions: [
        { id: 'solar', label: 'Solar panels, inverters & batteries' },
        { id: 'mobile', label: 'Mobile phones & accessories' },
        { id: 'security', label: 'CCTV & security' },
        { id: 'kitchen', label: 'Commercial kitchen equipment' },
        { id: 'flooring', label: 'Modular garage flooring' },
        { id: 'other', label: 'Something else' },
    ],
};