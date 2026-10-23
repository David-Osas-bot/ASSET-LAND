const ENDPOINT = import.meta.env.VITE_ENQUIRY_URL;

/**
 * Sends an enquiry to the backend as JSON:
 * { name, email, phone, organization, sourcing, details }
 * Resolves on success, throws on failure.
 */
export async function submitEnquiry(data) {
    if (!ENDPOINT) {
        console.warn('[enquiry] VITE_ENQUIRY_URL is not set: simulating success, nothing was saved.');
        await new Promise((resolve) => setTimeout(resolve, 900));
        return { ok: true, simulated: true };
    }

    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Enquiry failed with status ${response.status}`);

    return response.json().catch(() => ({ ok: true }));
}