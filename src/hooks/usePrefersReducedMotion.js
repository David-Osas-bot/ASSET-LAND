import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/** True when the visitor has asked their device to minimise motion. */
export default function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(QUERY);
        const handleChange = (event) => setReduced(event.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return reduced;
}