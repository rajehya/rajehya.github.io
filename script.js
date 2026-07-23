document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", link.getAttribute("href"));
      }
    });
  });

  // Screenshot lightbox (project pages)
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.getElementById("lightboxClose");

    document.querySelectorAll(".shot").forEach(shot => {
      shot.addEventListener("click", () => {
        const img = shot.querySelector("img");
        const caption = shot.querySelector("figcaption");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : "";
        lightbox.classList.add("open");
      });
    });

    const closeLightbox = () => lightbox.classList.remove("open");
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeLightbox();
    });
  }

  // Scrollspy for the project table of contents
  const tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks.length) {
    const sections = Array.from(tocLinks)
      .map(link => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const setActive = () => {
      let current = sections[0];
      sections.forEach(section => {
        if (section.getBoundingClientRect().top - 120 <= 0) {
          current = section;
        }
      });
      tocLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
      });
    };

    document.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }
});
