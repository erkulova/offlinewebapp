self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll([
                './index.html',
                './image1.jpg',
                './image2.jpg',
                './manifest.json',
                // Add any other assets you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
