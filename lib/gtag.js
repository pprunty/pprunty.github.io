export const GA_TRACKING_ID = 'G-LSBKKYLNC4'; // Replace with your actual tracking ID

// Initialize Google Analytics pageview tracking
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Report Core Web Vitals to Google Analytics
export const sendToGoogleAnalytics = ({ name, delta, id }) => {
  event({
    action: name,
    category: 'Web Vitals',
    label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta), // values must be integers
  });
};
