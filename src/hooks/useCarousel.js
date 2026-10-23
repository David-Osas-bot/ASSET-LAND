import { useCallback, useState } from 'react';

/**
 * Index state for a looping carousel.
 *
 * @param {number} length  Number of slides.
 */
export default function useCarousel(length) {
    const [index, setIndex] = useState(0);

    const next = useCallback(
        () => setIndex((current) => (current + 1) % length),
        [length],
    );

    const prev = useCallback(
        () => setIndex((current) => (current - 1 + length) % length),
        [length],
    );

    return { index, next, prev, goTo: setIndex };
}