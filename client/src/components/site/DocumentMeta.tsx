import { useEffect } from "react";

interface DocumentMetaProps {
  title: string;
  description: string;
  path?: string;
}

function setMeta(selector: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}

export function DocumentMeta({ title, description, path = "/" }: DocumentMetaProps) {
  useEffect(() => {
    const canonicalUrl = `https://itzdovesglam.makeup${path}`;
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setCanonical(canonicalUrl);
  }, [description, path, title]);

  return null;
}
