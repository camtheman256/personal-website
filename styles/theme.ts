import { Theme } from "@theme-ui/css";

const theme: Theme = {
    useLocalStorage: false,
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#BA160C',         // international orange engineering
        secondary: '#191970',       // midnight blue
        accent: '#B14AED',          // electric purple
        muted: '#444',
        "extra-muted": "#888",
        modes: {
            dark: {
                text: '#fff',
                background: '#111',
                primary: '#F08080',         // light coral
                secondary: '#63D2FF',       // baby blue
                accent: '#37FF8B',          // spring green
                muted: '#ccc',
            }
        }
    },
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    },
    fontSizes: {
        small: 12,
        body: 16,
        large: 24,
        subheading: 32,
        title: 48,
        "display-2": 54,
        display: 72,
    },
    breakpoints: [
        '42em', '60em'
    ],
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body'
        },
        li: {
            marginBottom: 2
        },
        a: {
            fontWeight: '700',
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
                color: 'primary'
            }
        },
        h2: {
            textDecorationLine: 'underline',
            textDecorationColor: 'accent',
            textDecorationThickness: 1,
            textUnderlineOffset: 12,
        }
    },
    layout: {
        container: {
            maxWidth: [ '40em', '46em', '64em' ] ,
        }
    },
}

export { theme as default };
