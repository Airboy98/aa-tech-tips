import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_META, NOT_FOUND_META, SITE_URL } from "../pageMeta";

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setMeta(key, content, attr = "name") {
  setTag(
    `meta[${attr}="${key}"]`,
    () => {
      const el = document.createElement("meta");
      el.setAttribute(attr, key);
      return el;
    },
    "content",
    content,
  );
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const meta = PAGE_META[path] || NOT_FOUND_META;
    const url = SITE_URL + (path === "/" ? "/" : path);

    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("robots", meta.noindex ? "noindex" : "index, follow");
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setTag(
      'link[rel="canonical"]',
      () => {
        const el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        return el;
      },
      "href",
      url,
    );
  }, [pathname]);

  return null;
}
