const base = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
};

export function SearchIcon(props) {
    return (
        <svg {...base} {...props}>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
        </svg>
    );
}

export function ArrowUpRightIcon(props) {
    return (
        <svg {...base} strokeWidth={2} {...props}>
            <path d="M7 17 17 7M8 7h9v9" />
        </svg>
    );
}

export function ArrowRightIcon(props) {
    return (
        <svg {...base} strokeWidth={2} {...props}>
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    );
}

export function ArrowDownIcon(props) {
    return (
        <svg {...base} strokeWidth={2} {...props}>
            <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
    );
}

export function MenuIcon(props) {
    return (
        <svg {...base} {...props}>
            <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
    );
}

export function CloseIcon(props) {
    return (
        <svg {...base} {...props}>
            <path d="m6 6 12 12M18 6 6 18" />
        </svg>
    );
}

export function SunIcon(props) {
    return (
        <svg {...base} {...props}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
    );
}

export function ShieldIcon(props) {
    return (
        <svg {...base} {...props}>
            <path d="M12 3 5 6v5.5c0 4.4 3 7.9 7 9.5 4-1.6 7-5.1 7-9.5V6z" />
        </svg>
    );
}

export function BoltIcon(props) {
    return (
        <svg {...base} {...props}>
            <path d="M13 3 5 14h6l-1 7 8-11h-6z" />
        </svg>
    );
}

export function BatteryIcon(props) {
    return (
        <svg {...base} {...props}>
            <rect x="2" y="7" width="17" height="10" rx="2" />
            <path d="M22 11v2M6 10.5v3M10 10.5v3" />
        </svg>
    );
}

export function StoreIcon(props) {
    return (
        <svg {...base} {...props}>
            <path d="M3 9.5 5 4h14l2 5.5" />
            <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
            <path d="M5 12.5V20h14v-7.5" />
        </svg>
    );
}

export function PauseIcon(props) {
    return (
        <svg {...base} strokeWidth={2.5} {...props}>
            <path d="M8 5v14M16 5v14" />
        </svg>
    );
}

export function PlayIcon(props) {
    return (
        <svg {...base} strokeWidth={2} {...props}>
            <path d="M7 5l12 7-12 7z" />
        </svg>
    );
}