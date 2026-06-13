import { useEffect } from "react";

const usePageTitle = (title, description) => {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | Jazzmatazz` : "Jazzmatazz - Cinematic Jazz Fusion Experience";

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      description || "Jazzmatazz - A cinematic live-performance experience blending jazz roots, immersive atmosphere, and modern fusion stage energy."
    );

    // Update Open Graph tags for better social sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", document.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", metaDescription.getAttribute("content"));

    return () => {
      // Cleanup or reset on unmount if needed
    };
  }, [title, description]);
};

export default usePageTitle;
