self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("paymentrequest", e => {
  e.respondWith(
    Promise.resolve({
      methodName: e.methodData[0].supportedMethods,
      details: { result: "success" }
    })
  );
});
