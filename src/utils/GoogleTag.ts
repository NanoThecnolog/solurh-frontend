export const gtag = {
    event: (action: string, params: Record<string, unknown>) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', action, params)
        }
    },
}