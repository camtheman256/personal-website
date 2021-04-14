import { Theme } from "@theme-ui/css";

const theme: Theme = {
    useLocalStorage: false,
    colors: {
        text: '#000',
        background: '#fff',
        primary: 'red',
        muted: 'grey',
        modes: {
            dark: {
                text: '#fff',
                background: '#000'
            }
        }
    },
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    },
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body'
        },
    },
}

export { theme as default };