---
title: "Enhancing Your NextJS/ReactJS Project"
date: "2024-05-01"
image: "/images/cpu.jpg"
description: "A comprehensive guide to improving your NextJS/ReactJS project with PWAs, React Query for caching, memoization, and more."
artwork: "Dan Williams / Pixabay.com"
---

Developing a frontend user interface is often simply a question of making things look good. Seldomly, developers
focus on areas which are not obvious to the eye. This guide will walk through how integrating the following 
components can elevate your NextJS/ReactJS project to the next level:

1. **Google Chrome Lighthouse**: Provides automated auditing, performance metrics, and best practice recommendations to improve the quality and performance of web applications, ensuring they meet high standards.
2. **Caching with Service Workers**: Uses service workers to cache assets and API responses, significantly reducing load times and enabling offline functionality, which enhances the overall user experience.
3. **React Memoization**: Enhances performance by preventing unnecessary re-renders and recalculations, comparing previous and current props to avoid redundant updates, which results in smoother and faster UI updates.
4. **NextJS Image Optimization**: Automatically optimizes images by providing a blur effect while they load, which improves load times and enhances the user experience by reducing perceived latency.
5. **NextJS Scroll Restoration**: Automatically restores the scroll position to its previous state when navigating back to a page, providing a seamless user experience and preserving the context for users.
6. **Dynamic Route Matching (slugs)**: Uses URL-friendly identifiers to create dynamic routes, making it easier to handle content-based navigation and improve SEO by using meaningful paths.
7. **Open Graph Metatags (SEO)**: Adds metadata to web pages to control how they are displayed when shared on social media, improving visibility and click-through rates by enhancing the presentation of shared content.
8. **Progressive Web Apps (PWAs)**: Enable offline functionality and the ability to download the website as an app, improving user accessibility and engagement even without an internet connection.
9. **Native Share API**: Allows content sharing directly through mobile device interfaces, such as sharing a blog post via messaging apps or social media platforms, enhancing user interaction.
10. **Google AdSense**: Integrates advertising into your application, allowing you to monetize content by displaying relevant ads and generating revenue based on user interactions.


## 1. Google Chrome Lighthouse

If you do not already use Google Chrome Lighthouse, you should start now. To use Lighthouse, open your website in the Chrome Browser and enter inspect mode. Once in inspect mode, toggle the >> arrows in the top bar and select "Lighthouse".

![Optional Description](https://patrickprunty.com/images/lighthouse_location.png)

Once in the Lighthouse menu, you can toggle the button to "Analyze Page Load" with selection. This will generate a 
Lighthouse report for your webpage. It is specific to the route on your webpage that you are on and details things such 
as ...

In the Lighthouse menu, you can toggle the button to "Analyze Page Load" with your desired settings. This will generate a Lighthouse report for your webpage, specific to the route you are on, detailing performance metrics, accessibility scores, SEO recommendations, and more.

![Optional Description](https://patrickprunty.com/images/lighthouse_report.png)

Ensure you run analysis of your page in an incognito tab since Chrome extensions can interfere with the generatd report.

_Note: Ensure your webpage is open in only one tab when using Lighthouse. Close other tabs and reload if you encounter any issues._


## 2. Progressive Web Apps (PWAs) 

In the Lighthouse tab, you will see a check if your webpage is optimized for PWA (Progressive Web App). A progressive web 
app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a 
platform-specific app. In other words, users can use your website on an iPhone like it is a native application 
downloaded from the Apple App Store. So if you want to enable ability to do this with your frontend application on mobile:

![Optional Description](https://patrickprunty.com/gifs/pwa_mobile.gif)

Or this on desktop devices:

![Optional Description](https://patrickprunty.com/gifs/pwa_desktop.gif)

You must optimize your application for PWA by doing the following:

1. Ensure your site is served over HTTPS.
2. Provide a web app manifest with icons, a theme color, and a start URL.
3. Enable service workers to cache assets for offline use.
4. Implement a responsive design for various screen sizes.

### 1. Ensure your site is served over HTTPS

To serve your site over HTTPs, you need to obtain an SSL/TLS certificate and configure your server to use it if it is
running on the server side. If you are serving your site statically over AWS or Azure, you will need to configure your
CDN (Content Delivery Network) to serve static assets over HTTPs and not HTTP. 

_Note: If you use [GitHub Pages](https://pages.github.com/) to host your static site, it will automatically host your site over HTTPs._

### 3. Provide a web app manifest with icons, a theme color, and a start URL

To create a PWA manifest, you can use an online provider, such as [PWA Manifest Generator](https://www.simicart.com/manifest-generator.html/).
This will generate a `manifest.json` and images of different sizes for your app icon.

Place the manifest and images in your `public` directory of your NextJS or ReactJS project like so:

```shell
public/
├── favicon.ico
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
  "theme_color": "#f0f0f0", // This is the overflow color for your PWA
  "background_color": "#f0f0f0", // This is the background color for the body of your PWA
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
      "purpose": "any", // It is important at least one icon has "purpose": "any" in order to be a valid PWA
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "orientation": "any",
  "display": "standalone",
  "dir": "auto",
  "lang": "en-GB",
  "name": "Patrick Prunty",
  "short_name": "patrickprunty", // This will display as the short title for your PWA
  "start_url": "https://patrickprunty.com",
  "scope": "https://patrickprunty.com/",
  "description": "Software, education, consultations & creative media." // This will be the description for your PWA
}
```

Additionally, you must have the following tag: `<meta name="theme-color" content="#317EFB"/>` defined in the `<head>` of 
your application for all routes/pages. This can be done in NextJS by adding this tag in the `<head>` section of the `_app.tsx` file, or 
in the `App.tsx` file of your ReactJS application.

_Note: If you are working on localhost and using Lighthouse to test PWA validity, you must change the `scope` and `start_url` fields in the `manifest.json` to `/`. Make sure to update this to your actual site URL in before deploying to production._

### 3. Enable service workers to cache assets for offline use

To enable a service worker for caching assets, you must additionally create a `sw.js` file in the `public` directory of 
your app. This file will look something like this:

```javascript
const CACHE_NAME = 'my-nextjs-pwa-cache-v8';
const urlsToCache = [
  // Add route specific urls for your service worker to cache
  '/',
  '/manifest.json',
  '/images/favicon.ico',
  '/photography',
  '/newsletter',
  // Add more routes as necessary
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
        <meta property="og:image" content="/images/favicon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.png" />
        <meta name="theme-color" content="#F0F0F0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
```

We have this `useEffect` hook because ...


## 4. Implement a responsive design for various screen sizes


## Caching Backend Queries with React Query

React Query simplifies data fetching in React apps, making it easy to manage server state. It provides out-of-the-box caching, synchronization, and background data fetching.

### Example: Caching API Requests

First, install React Query:

```bash
npm install react-query
```


![Optional Description](https://patrickprunty.com/gifs/image-optimization.gif)

Next, set up a query client and use the `useQuery` hook to fetch and cache data.

```javascript
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Users />
        </QueryClientProvider>
    );
}

function Users() {
    const { data, error, isLoading } = useQuery('users', fetchUsers);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users</div>;

    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

async function fetchUsers() {
    const response = await fetch('/api/users');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export default App;
```

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2453030550493085"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2453030550493085"
data-ad-slot="4949482188"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

#### **Pros:**
- Simplifies data fetching and state management.
- Provides built-in caching and synchronization.
- Automatically refetches data in the background.

#### Cons
- Adds an additional library to the project.
- May require adjustments in the existing data fetching logic.

## Progressive Web Apps (PWAs)

PWAs provide offline capabilities and improve performance and user engagement through features like service workers and caching.

### Example: Setting Up a Service Worker

First, create a `public/sw.js` file:

```javascript
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
```

Next, register the service worker in your `_app.js` file:

```javascript
import { useEffect } from 'react';

function App({ Component, pageProps }) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch(error => {
                console.error('Service Worker registration failed:', error);
            });
        }
    }, []);

    return <Component {...pageProps} />;
}

export default App;
```

**Pros:**
- Enhances user experience with offline capabilities.
- Improves performance by caching resources.
- Provides a more resilient application.

**Cons:**
- Requires additional setup and maintenance.
- Potentially complex debugging.

## Memoization in React

Memoization helps optimize React components by preventing unnecessary re-renders.

### Example: Using `React.memo` and `useCallback`

```javascript
import React, { useState, useCallback } from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
    // Expensive computation here
    return <div>{data}</div>;
});

function App() {
    const [count, setCount] = useState(0);
    const data = "Some data";

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <ExpensiveComponent data={data} />
            <button onClick={increment}>Increment</button>
            <p>{count}</p>
        </div>
    );
}

export default App;
```

**Pros:**
- Improves performance by avoiding unnecessary re-renders.
- `useCallback` ensures that the function reference remains the same between renders.

**Cons:**
- Overuse can lead to premature optimization.
- Requires understanding of React's rendering behavior.

## Authentication Management

Managing authentication states is crucial for maintaining secure and seamless access across sessions.

### Example: Using NextAuth.js

First, install NextAuth.js:

```bash
npm install next-auth
```

Next, configure NextAuth in `pages/api/auth/[...nextauth].js`:

```javascript
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    database: process.env.DATABASE_URL,
});
```

Finally, use the `useSession` hook in your components:

```javascript
import { signIn, signOut, useSession } from 'next-auth/client';

function AuthButton() {
    const [session, loading] = useSession();

    return (
        <div>
            {!session && <button onClick={() => signIn()}>Sign In</button>}
            {session && (
                <div>
                    <span>{session.user.name}</span>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
            )}
        </div>
    );
}

export default AuthButton;
```

**Pros:**
- Simplifies authentication implementation.
- Provides built-in support for multiple providers.
- Securely manages sessions.

**Cons:**
- Adds dependency on external library.
- Requires additional configuration for database support.

## Offline Accessibility

Ensuring your site remains accessible offline is crucial for providing a consistent user experience.

### Example: Cache API Responses

In your service worker, add logic to cache API responses:

```javascript
self.addEventListener('fetch', event => {
    if (event.request.url.includes('/api/')) {
        event.respondWith(
            caches.open('api-cache').then(cache => {
                return fetch(event.request).then(response => {
                    cache.put(event.request, response.clone());
                    return response;
                }).catch(() => {
                    return caches.match(event.request);
                });
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request);
            })
        );
    }
});
```

**Pros:**
- Improves user experience by providing offline access.
- Reduces server load by serving cached content.

**Cons:**
- Requires additional setup and maintenance.
- Can complicate debugging.

## Enhancing `next.config.mjs`

### Static Export for Images

Next.js can be configured to optimize images during the build process for static export.

```javascript
// next.config.mjs
export default {
    images: {
        loader: 'imgix',
        path: '/',
    },
    exportTrailingSlash: true,
};
```

### Enabling Experimental Features

Next.js often introduces new features under an experimental flag.

```javascript
// next.config.mjs
export default {
    experimental: {
        scrollRestoration: true,
        esmExternals: true,
    },
};
```

![Optional Description](https://patrickprunty.com/gifs/scroll-restoration.gif)