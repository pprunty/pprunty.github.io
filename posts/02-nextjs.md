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

If you do not already use Google Chrome Lighthouse, you should start right now. To use Lighthouse, open 
your website in the Chrome Browser and enter inspect. Once in inspect mode, toggle the `>>` arrows in the top bar and 
select "Lighthouse".

![Optional Description](https://patrickprunty.com/images/lighthouse_location.png)

Once in the Lighthouse menu, you can toggle the button to "Analyze Page Load" with selection. This will generate a 
Lighthouse report for your webpage. It is specific to the route on your webpage that you are on and details things such 
as ...

_Note:_ 



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

function MyApp({ Component, pageProps }) {
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

export default MyApp;
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