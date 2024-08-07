---
title: "How to Transform Your NextJS/ReactJS Project into a Progressive Web App (PWA)"
date: "2024-06-20"
image: "/images/articles/pwa.jpeg"
description: "A comprehensive guide to making your NextJS/ReactJS frontend a progressive web application (PWA)."
artwork: "iStock / Getty Images"
tags: ["NextJS", "ReactJS", "PWA", "web development", "frontend", "JavaScript", "mobile-first", "performance optimization"]
---

Recently, I transformed my personal website, [patrickprunty.com](https://patrickprunty.com), into a Progressive Web
App (PWA). This allows users to access my site on any device
&mdash; iPhone, MacBook, Android, or Windows &mdash; as if it were a native app downloaded from their device's app
store.

The benefits of PWAs can be substantial. According to
a [report](https://www.outerboxdesign.com/digital-marketing/progressive-web-apps-pwas)
from [OuterBox](https://www.outerboxdesign.com),

> When [Pinterest](https://pinterest.com) adopted a PWA, it saw a 40% increase in time spent on the site and a 50%
> increase in ad click-throughs, which
> significantly boosted their revenue.

Moreover, Progressive Web Apps offer a strategic advantage for startups and other companies whom are yet to develop
dedicated desktop or
mobile applications for their SaaS products, providing a cost-effective way to deliver a native app-like experience to
their users.

If you are interested in enabling similar functionality for your NextJS/ReactJS application, allowing users to
download your web application on their mobile devices like this:

<figure>
  <img src="https://patrickprunty.com/gifs/pwa_mobile.gif" alt="PWA on Mobile Devices">
  <figcaption>PWA on Mobile Devices</figcaption>
</figure>

Or on desktop devices, like this:

<figure>
  <img src="https://patrickprunty.com/gifs/pwa_desktop.gif" alt="PWA on Desktop Devices">
  <figcaption>PWA on Desktop Devices</figcaption>
</figure>

This guide will walk you through the process. We will cover the essential steps to transform your application into a
PWA,
starting with using Google Chrome Lighthouse for performance auditing and to ensure PWA compliance, and then
implementing service workers for offline
caching to enhance functionality and user experience.

## Google Chrome Lighthouse

Start using Google Chrome Lighthouse to audit your website's performance, accessibility, and SEO. Here’s how to get
started:

1. **Open Lighthouse**: In Google Chrome, navigate to your website and enter inspect mode (right-click on the page and
   select "Inspect" or press `Ctrl+Shift+I`). Click the `>>` arrows in the top bar and select "Lighthouse".

   <figure>
     <img src="https://patrickprunty.com/images/articles/next-js-pwa/lighthouse_location.png" alt="Image description here">
     <figcaption>Google Chrome Lighthouse Tab Location</figcaption>
   </figure>

2. **Run an Audit**: In the Lighthouse tab, click "Generate report" to analyze your page. Lighthouse will evaluate the
   specific route you are on and provide detailed insights on performance metrics, accessibility scores, SEO
   recommendations, and more.

   <figure>
     <img src="https://patrickprunty.com/images/articles/next-js-pwa/lighthouse_report.png" alt="Image description here">
     <figcaption>Google Chrome Lighthouse Report Audit</figcaption>
   </figure>

3. **Tips for Accurate Results**: Run the analysis in an incognito tab to avoid interference from Chrome extensions.

_Note: Ensure your webpage is open in only one tab when using Lighthouse. Close other tabs and reload if you encounter
any issues._

## Progressive Web Apps (PWAs)

In the Lighthouse tab, you will see a check if your webpage is optimized for PWA (Progressive Web App).

You must optimize your application for PWA by doing the following:

1. Ensure your site is served over HTTPS.
2. Provide a web app manifest with icons, a theme color, and a start URL.
3. Enable service workers to cache assets for offline use.
4. Implement a responsive design for various screen sizes.

### 1. Ensure your site is served over HTTPS

To serve your site over HTTPs, you need to obtain an SSL/TLS certificate and configure your server to use it if it's
running on the server side. If you are serving your site statically over AWS or Azure, you will need to configure your
CDN (Content Delivery Network) to serve static assets over HTTPs and not HTTP.

_Note: If you use [GitHub Pages](https://pages.github.com/) to host your static site, it will automatically host your
site over HTTPs._

### 3. Provide a web app manifest with icons, a theme color, and a start URL

To create a PWA manifest, you can use an online provider, such
as [PWA Manifest Generator](https://www.simicart.com/manifest-generator.html/).
This will generate a `manifest.json` and images of different sizes for your app icon.

Place the manifest and images in your `public` directory of your NextJS or ReactJS project like so:

```shell
public/
├── favicon2.ico
├── icon-192x192.png
├── icon-196-maskable.png
├── icon-256x256.png
├── icon-384x384.png
├── icon-512-maskable.png
├── icon-512x512.png
├── images
│   ├── ...
├── manifest.json
└── sw.js
```

_Note: There is additional icons with `-maskable` suffix. To generate these maskable (rounded) icons, you can use this
provider [maskable.app](https://maskable.app/editor), where you can choose whether the icon should be a circle, rounded
rectangle, or something else._

After generating your images and manifest, your `manifest.json` should like this:

```json
{
  "theme_color": "#f0f0f0",
  // This is the overflow color for your PWA
  "background_color": "#f0f0f0",
  // This is the background color for the body of your PWA
  "icons": [
    {
      "purpose": "maskable",
      "sizes": "196x196",
      "src": "icon-196-maskable.png",
      "type": "image/png"
    },
    {
      "purpose": "maskable",
      "sizes": "512x512",
      "src": "icon-512-maskable.png",
      "type": "image/png"
    },
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "purpose": "any",
      // it's important at least one icon has "purpose": "any" in order to be a valid PWA
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "orientation": "any",
  "display": "standalone",
  "dir": "auto",
  "lang": "en-GB",
  "name": "Patrick Prunty",
  "short_name": "patrickprunty",
  // This will display as the short title for your PWA
  "start_url": "https://patrickprunty.com",
  "scope": "https://patrickprunty.com/",
  "description": "Software, education, consultations & creative media."
  // This will be the description for your PWA
}
```

**Please delete the comments in this JSON or it will prevent the json from working correctly. The comments are to
emphasize importance of certain fields.**

Additionally, you must have the following tag: `<meta name="theme-color" content="#317EFB"/>` defined in the `<head>` of
your application for all routes/pages. This can be done in NextJS by adding this tag in the `<head>` section of
the `_app.tsx` file, or
in the `App.tsx` file of your ReactJS application.

_Note: If you are working on localhost and using Lighthouse to test PWA validity, you must change the `scope`
and `start_url` fields in the `manifest.json` to `/`. Make sure to update this to your actual site URL in before
deploying to production._

### 3. Enable service workers to cache assets for offline use

To enable a service worker for caching assets, you must additionally create a `sw.js` file in the `public` directory of
your app. This file will look something like this:

```javascript
const CACHE_NAME = 'my-nextjs-pwa-cache-v8';
const urlsToCache = [
  // Add route specific urls for your service worker to cache
  '/',
  '/manifest.json',
  '/images/articles/next-js-pwa/favicon.ico',
  '/photography',
  '/newsletter',
  // Add more routes or static assets (images) as necessary
];

// Check if the environment is production based on the domain
const isProduction = self.location.hostname === 'patrickprunty.com' || self.location.hostname === "https://patrickprunty.com";

// Cache static assets during the install phase
self.addEventListener('install', (event) => {
  if (isProduction) {
    console.log('Service Worker: Installing and caching assets...');
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return Promise.all(
          urlsToCache.map((url) => {
            return cache.add(url).catch((error) => {
              console.error(`Service Worker: Failed to cache ${url}:`, error);
            });
          })
        );
      }).then(() => {
        console.log('Service Worker: Caching completed successfully.');
        self.skipWaiting();
      }).catch((error) => {
        console.error('Service Worker: Caching failed during install:', error);
      })
    );
  } else {
    console.log('Service Worker: Skipping caching since environment is not production.');
  }
});

// Clean up old caches during the activate phase
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating and cleaning up old caches...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log(`Service Worker: Deleting cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activation and cleanup completed.');
      return self.clients.claim();
    }).catch((error) => {
      console.error('Service Worker: Activation failed:', error);
    })
  );
});

// Fetch handler to serve cached content
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request).then((fetchResponse) => {
      // Check if we received a valid response
      if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
        return fetchResponse;
      }

      // Clone the response
      const responseToCache = fetchResponse.clone();

      caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, responseToCache).catch((error) => {
          console.error('Service Worker: Caching failed during fetch:', error);
        });
      });

      return fetchResponse;
    }).catch(() => {
      // If fetch fails, try to get from cache
      return caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        // Fallback for offline use if both cache and network fail
        return caches.match('/').then((fallbackResponse) => {
          if (fallbackResponse) {
            console.log('Service Worker: Serving fallback content for offline use.');
          } else {
            console.error('Service Worker: No fallback content available.');
          }
          return fallbackResponse;
        });
      });
    })
  );
});

self.addEventListener('controllerchange', () => {
  console.log('Service Worker: Controller changed. A new service worker has taken control.');
  self.clients.matchAll().then(clients => {
    clients.forEach(client => client.postMessage({ type: 'NEW_SW_AVAILABLE' }));
  });
});
```

_Note: There is a check in this `sw.js` to only run if isProduction is `true`. This check is made against the URL of my
site in production `patrickprunty.com`. Make sure to update this to match your site's URL._

Once the `sw.js` code is added, you must register the service worker for use in your app. To do so, add this `useEffect`
hook in your `_app.tsx` or `App.tsx` file:

```javascript
import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const handleLoad = () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
          console.error('Service Worker registration failed:', error);
        });

        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'NEW_SW_AVAILABLE') {
            if (confirm('A new version of this site is available. Reload to update?')) {
              window.location.reload();
            }
          }
        });
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          handleLoad();
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Patrick Prunty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software, education, blog, YouTube creative media & consultations." />
        <meta property="og:image" content="/images/articles/next-js-pwa/favicon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/articles/next-js-pwa/favicon.png" />
        <meta name="theme-color" content="#F0F0F0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
```

The `useEffect` hook ensures the service worker is registered when the page loads and re-registers it whenever the page
becomes visible. This approach improves the reliability of the service worker registration, especially when users
navigate away from and back to the page.

### 4. Implement a responsive design for various screen sizes

_Note: If your site is already responsive for various screen sizes, you can skip this section..._

To ensure your PWA looks great on all devices, implement a responsive design. This involves using CSS media queries to
adjust the layout based on the screen size. We will also cover how to achieve this using `styled-components` and
device-width usage in Next.js/React.js.

### Using CSS Media Queries

Add media queries to your CSS to handle different screen sizes.

```css
.container {
  width: 100%;
  padding: 15px;
  margin: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

### Using Flexible Layouts

Utilize flexible grid layouts and relative units like percentages (`%`), viewport width (`vw`), and viewport
height (`vh`).

```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Using Styled-Components

Styled-components allow you to write plain CSS in your JavaScript files. Here's how to achieve responsive design with
styled-components in a React component.

```jsx
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 15px;
  margin: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
```

### Using Device Width in Next.js/React.js Head

To handle device width and set responsive meta tags in the head section of your Next.js application, use the `Head`
component from `next/head`.

```jsx
import Head from 'next/head';

const App = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Responsive PWA</title>
    </Head>
    <Container>
      {/* Your content here */}
    </Container>
  </>
);

export default App;
```

You can do the same in your App.tsx file in your ReactJS project:

```javascript
import React from 'react';
import { Helmet } from 'react-helmet';

const App = () => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Responsive PWA</title>
    </Helmet>
    <div className="container">
      {/* Your content here */}
    </div>
  </>
);

export default App;
```

### Test Responsiveness

To ensure your site is responsive, you can use browser developer tools to test your site on different screen sizes and
devices. Here are step-by-step instructions for testing responsiveness using developer tools in Chrome:

1. **Open Developer Tools:**

   Press `F12` or `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac) to open Developer Tools.

2. **Toggle Device Toolbar:**

   Click the "Toggle device toolbar" button, which looks like a smartphone and tablet icon, or
   press` Ctrl + Shift + M` (Windows/Linux) or `Cmd + Shift + M`(Mac).

3. **Select a Device:**

   In the device toolbar, you can select a device from the dropdown menu to see how your site looks on different devices
   like iPhones, iPads, or Android phones.

4. **Adjust Viewport Size:**

   You can also manually adjust the viewport size by dragging the edges or entering specific dimensions.

5. **Rotate the Screen:**

   Click the rotate button (next to the device dropdown) to switch between portrait and landscape modes.

6. **Test Responsiveness:**

   Navigate through your site to see how it adapts to different screen sizes. Make adjustments to your styles as needed.

By implementing these responsive design techniques, you can ensure that your PWA provides an optimal user experience on
any device, enhancing usability and engagement.

## Conclusion

_Note: If your app does not yet meet the necessary requirements to be a PWA, it's possible that there are additional
factors not covered in this article. We recommend running Google Chrome Lighthouse again to analyze your page for PWA
compatibility and identify any remaining issues._

By following these steps, you have transformed your NextJS/ReactJS application into a Progressive Web App. Your users
can now enjoy a seamless, app-like experience across various devices, even offline.

If you have any questions or need further assistance, please feel free to contact me, or set up some time with me via
the [consultations tab on my website](https://calendly.com/jigsawpresents).