self.addEventListener("push", (event) => {
  const data = event.data?.json() || {};
  const title = data.title || "New Message";
  const options = {
    body: data.body || "You have a new message",
    icon: "/logo192.png",
    badge: "/logo192.png",
    data: { url: data.url || "/admin" },
  };
  event.waitUntil(
    Promise.all([
      self.registration.showNotification(title, options),
      navigator.setAppBadge?.(),
    ])
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/admin";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(url) && "focus" in client) return client.focus();
      }
      return clients.openWindow(url);
    })
  );
});
