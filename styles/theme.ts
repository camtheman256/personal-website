import { Theme } from "@theme-ui/css";

const theme: Theme = {
    useLocalStorage: false,
    colors: {
        text: '#000',
        background: '#fff',
        //TODO: make light mode color scheme
        primary: 'red',
        secondary: '',
        accent: '',
        muted: '#444',
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
        '40em', '54em', '62em'
    ],
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body'
        },
    },
    layout: {
        container: {
            maxWidth: [ '40em', '44em', '54em' ] ,
        }
    },
}

export { theme as default };