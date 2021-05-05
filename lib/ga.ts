export const G_MEASUREMENT_ID = "G-1K81THS49N";

export const pageview = (url: URL) => {
  window.gtag("config", G_MEASUREMENT_ID, {
    page_path: url
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}