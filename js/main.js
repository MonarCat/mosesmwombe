/* ============================================================
   Portfolio – main.js
   Handles the home/landing page: rendering project cards,
   filtering by status, and smooth-scroll contact link.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initFilter();
  initMobileNav();
  initScrollHeader();
  highlightActiveNav();
  initContactForm();
});

/* ── Render project cards ──────────────────────────────────── */
function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const list =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.status === filter);

  grid.innerHTML = list
    .map(
      (p) => `
    <article class="project-card" data-status="${p.status}" data-id="${p.id}">
      <a href="project.html?id=${p.id}" class="card-link" aria-label="View details for ${p.title}">
        <div class="card-image-wrap">
          <img
            src="${p.image}"
            alt="${p.title} screenshot"
            class="card-image"
            loading="lazy"
            onerror="this.src='images/placeholder.svg'"
          />
          <span class="status-badge status-${p.status}">${STATUS_LABELS[p.status]}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-tagline">${p.tagline}</p>
          <div class="card-footer">
            <span class="card-price">${formatPrice(p.price, p.currency)}</span>
            <span class="card-cta">View Details →</span>
          </div>
        </div>
      </a>
    </article>`
    )
    .join("");
}

/* ── Filter tabs ────────────────────────────────────────────── */
function initFilter() {
  const tabs = document.querySelectorAll(".filter-btn");
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ── Mobile nav toggle ──────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.innerHTML = open ? "&#10005;" : "&#9776;";
  });

  // Close menu when a link is clicked
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
      toggle.innerHTML = "&#9776;";
    });
  });
}

/* ── Sticky header shadow ───────────────────────────────────── */
function initScrollHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
}

/* ── Highlight active nav link ──────────────────────────────── */
function highlightActiveNav() {
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    if (link.getAttribute("href") === "index.html" || link.getAttribute("href") === "./") {
      link.classList.add("active");
    }
  });
}

/* ── Contact form (mailto via JS to avoid browser security warning) ── */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameEl    = document.getElementById("contact-name");
    const emailEl   = document.getElementById("contact-email");
    const messageEl = document.getElementById("contact-message");
    if (!nameEl || !emailEl || !messageEl) return;

    const name    = nameEl.value.trim();
    const email   = emailEl.value.trim();
    const message = messageEl.value.trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent("Portfolio enquiry from " + name);
    const body    = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    );

    window.location.href =
      "mailto:iammwombe@gmail.com?subject=" + subject + "&body=" + body;
  });
}
