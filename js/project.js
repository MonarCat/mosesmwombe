/* ============================================================
   Portfolio – project.js
   Handles the project detail page: reads ?id= from the URL,
   populates all content, and wires up the CTA buttons.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = id ? getProjectById(id) : null;

  if (!project) {
    showNotFound();
    return;
  }

  populatePage(project);
  initMobileNav();
  initScrollHeader();
});

/* ── Populate all page content ──────────────────────────────── */
function populatePage(p) {
  // <title>
  document.title = `${p.title} | Moses Mwombe Portfolio`;

  // Hero image
  const heroImg = document.getElementById("project-hero-img");
  if (heroImg) {
    heroImg.src = p.image;
    heroImg.alt = `${p.title} screenshot`;
    heroImg.onerror = () => { heroImg.src = "images/placeholder.svg"; };
  }

  // Status badge
  const badge = document.getElementById("project-status-badge");
  if (badge) {
    badge.textContent = STATUS_LABELS[p.status];
    badge.className = `status-badge status-${p.status}`;
  }

  // Title & tagline
  setText("project-title", p.title);
  setText("project-tagline", p.tagline);
  setText("project-description", p.description);

  // Price
  setText("project-price", formatPrice(p.price, p.currency));

  // Live URL
  const liveBtn = document.getElementById("project-live-btn");
  if (liveBtn) {
    if (p.liveUrl && p.liveUrl !== "#") {
      liveBtn.href = p.liveUrl;
      liveBtn.removeAttribute("aria-disabled");
    } else {
      liveBtn.href = "#";
      liveBtn.setAttribute("aria-disabled", "true");
      liveBtn.textContent = "Preview Coming Soon";
    }
  }

  // Tech stack
  const techList = document.getElementById("project-tech");
  if (techList) {
    techList.innerHTML = p.tech
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");
  }

  // Features
  const featuresList = document.getElementById("project-features");
  if (featuresList) {
    featuresList.innerHTML = p.features
      .map((f) => `<li><span class="feature-icon">✓</span> ${f}</li>`)
      .join("");
  }

  // CTA buttons
  const buyBtn = document.getElementById("btn-buy");
  const investBtn = document.getElementById("btn-invest");

  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      openModal("buy", p);
    });
  }
  if (investBtn) {
    investBtn.addEventListener("click", () => {
      openModal("invest", p);
    });
  }

  // Back-link breadcrumb
  const backLink = document.getElementById("back-link");
  if (backLink) {
    backLink.href = "index.html#projects";
  }
}

/* ── CTA Modal ──────────────────────────────────────────────── */
function openModal(type, project) {
  const existing = document.getElementById("cta-modal");
  if (existing) existing.remove();

  const isBuy = type === "buy";
  const subject = isBuy
    ? `Buying ${project.title}`
    : `Investing in ${project.title}`;
  const body = isBuy
    ? `Hi Moses,\n\nI am interested in buying the ${project.title} project (${formatPrice(project.price, project.currency)}).\n\nPlease share more details on the acquisition process.\n\nThank you.`
    : `Hi Moses,\n\nI am interested in investing in the ${project.title} project.\n\nPlease share your investment pitch and expected ROI details.\n\nThank you.`;

  const mailtoLink = `mailto:iammwombe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const modal = document.createElement("div");
  modal.id = "cta-modal";
  modal.className = "modal-overlay";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", isBuy ? "Buy this project" : "Invest in this project");
  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" aria-label="Close dialog">&times;</button>
      <h2>${isBuy ? "🛒 Buy This Project" : "💼 Invest in This Project"}</h2>
      <p class="modal-subtitle">${project.title}</p>
      <p class="modal-price">${formatPrice(project.price, project.currency)}</p>
      <p>${
        isBuy
          ? "Ready to own this project? Click the button below to send an enquiry email, and Moses will get back to you with acquisition details."
          : "Interested in partnering or investing? Click below to reach out and discuss investment terms, equity share, and projected returns."
      }</p>
      <a href="${mailtoLink}" class="btn btn-primary modal-action">
        ${isBuy ? "Send Buy Enquiry" : "Send Investment Enquiry"}
      </a>
      <p class="modal-or">or contact directly at <a href="mailto:iammwombe@gmail.com">iammwombe@gmail.com</a></p>
    </div>`;

  // Close on overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
  modal.querySelector(".modal-close").addEventListener("click", () => modal.remove());

  // Close on Escape
  document.addEventListener("keydown", function onEsc(e) {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", onEsc);
    }
  });

  document.body.appendChild(modal);
  // Focus trap: focus close button
  modal.querySelector(".modal-close").focus();
}

/* ── 404 / Not Found ────────────────────────────────────────── */
function showNotFound() {
  document.title = "Project Not Found | Moses Mwombe Portfolio";
  const main = document.getElementById("project-main");
  if (main) {
    main.innerHTML = `
      <section class="not-found">
        <h1>Project Not Found</h1>
        <p>The project you are looking for doesn't exist or has been removed.</p>
        <a href="index.html" class="btn btn-primary">← Back to Portfolio</a>
      </section>`;
  }
}

/* ── Shared helpers ─────────────────────────────────────────── */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.innerHTML = open ? "&#10005;" : "&#9776;";
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
      toggle.innerHTML = "&#9776;";
    });
  });
}

function initScrollHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
}
