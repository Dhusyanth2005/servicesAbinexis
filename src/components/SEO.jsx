import { useEffect } from "react";

const BASE_URL = "https://abinexis.com";

export default function SEO({
  title = "Abinexis Group | Engineering, Technology & Global Ventures",
  description = "Abinexis Group is an engineering-led entrepreneurial group building software, hardware IoT systems, digital commerce platforms, and global trade solutions.",
  path = "",
  type = "website",
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (attributeName, attributeValue, content) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
    const fullUrl = cleanPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${cleanPath}`;

    // 2. Standard Meta Tags
    updateMetaTag("name", "title", title);
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Open Graph Tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", fullUrl);
    updateMetaTag("property", "og:type", type);

    // 4. Twitter Card Tags
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:url", fullUrl);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [title, description, path, type]);

  return null;
}
