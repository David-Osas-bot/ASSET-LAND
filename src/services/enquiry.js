const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

/**
 * Emails an enquiry to the Asset Land inbox through Web3Forms.
 * data: { name, email, phone, organization, sourcing, details, website }
 * `website` is the hidden honeypot field: real visitors leave it empty.
 * Resolves on success, throws on failure.
 */
export async function submitEnquiry(data) {
    // Honeypot filled in: it's a bot. Pretend it worked and send nothing.
    if (data.website) return { ok: true };

    if (!ACCESS_KEY) {
        throw new Error(
            'Web3Forms is not configured. Set VITE_WEB3FORMS_ACCESS_KEY in .env, then restart the dev server.',
        );
    }

    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: `New enquiry: ${data.sourcing} from ${data.name}`,
            from_name: 'Asset Land website',
            name: data.name,
            email: data.email,
            phone: data.phone || 'Not provided',
            organization: data.organization || 'Not provided',
            sourcing: data.sourcing,
            message: data.details,
            submitted_at: new Date().toLocaleString('en-GB', {
                dateStyle: 'medium',
                timeStyle: 'short',
                timeZone: 'Africa/Lagos',
            }),
        }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
        throw new Error(result?.message || `Enquiry failed with status ${response.status}`);
    }

    return { ok: true };
}