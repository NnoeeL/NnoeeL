/**
 * ==========================================================================
 * PORTOFOLIO PRIBADI - MAHASISWA INFORMATIKA
 * File: script.js
 * Deskripsi: Interaktivitas (Typing animation, render data skill & proyek,
 *            navigasi mobile, toggle tema dark/light, scroll reveal & copy email)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ==========================================================================
  // 1. DATA KEAHLIAN (SKILLS)
  // Edit data di bawah untuk menambah atau mengubah keahlian Anda
  // ==========================================================================
  const skillCategories = [
    {
      title: "Bahasa & Web",
      icon: "fa-solid fa-code",
      skills: [
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "TypeScript", icon: "fa-solid fa-code" },
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Lua", icon: "fa-solid fa-gamepad" },
        { name: "Python", icon: "fa-brands fa-python" },
      ],
    },
    {
      title: "Tools & Lingkungan",
      icon: "fa-solid fa-screwdriver-wrench",
      skills: [
        { name: "Git & GitHub", icon: "fa-brands fa-github" },
        { name: "VS Code", icon: "fa-solid fa-laptop-code" },
        { name: "Terminal / Bash", icon: "fa-solid fa-terminal" },
        { name: "Roblox Studio", icon: "fa-solid fa-cube" },
        { name: "Postman", icon: "fa-solid fa-paper-plane" },
      ],
    },
    {
      title: "Konsep & Lainnya",
      icon: "fa-solid fa-microchip",
      skills: [
        { name: "RESTful API", icon: "fa-solid fa-network-wired" },
        { name: "WebSocket & Baileys", icon: "fa-solid fa-comments" },
        { name: "Struktur Data", icon: "fa-solid fa-sitemap" },
        { name: "UI/UX & Responsif", icon: "fa-solid fa-mobile-screen" },
        { name: "PWA / Hybrid App", icon: "fa-solid fa-layer-group" },
      ],
    },
  ];

  // ==========================================================================
  // 2. DATA PROYEK
  // Edit data di bawah untuk menambah portofolio proyek baru
  // ==========================================================================
  const projectsData = [
    {
      id: "proyek-1",
      category: "Automation & Bot",
      title: "WhatsApp Bot Multi-Device",
      description:
        "Bot asisten WhatsApp pintar berbasis Baileys & Node.js dengan fitur manajemen grup otomatis, auto-responder, downloader media, pengingat jadwal kuliah, dan integrasi webhook.",
      tags: ["Node.js", "Baileys", "JavaScript", "Automation"],
      icon: "fa-brands fa-whatsapp",
      demoUrl: "https://github.com/NnoeeL",
      repoUrl: "https://github.com/NnoeeL",
    },
    {
      id: "proyek-2",
      category: "Game Development",
      title: "Roblox Multi-Mechanics Game",
      description:
        "Pengembangan game interaktif di platform Roblox Studio. Mengimplementasikan logika scripting Lua untuk physics engine, sistem kustomisasi karakter, inventory data store, dan networking multiplayer.",
      tags: ["Lua", "Roblox Studio", "Game Logic", "Multiplayer"],
      icon: "fa-solid fa-gamepad",
      demoUrl: "https://github.com/NnoeeL",
      repoUrl: "https://github.com/NnoeeL",
    },
    {
      id: "proyek-3",
      category: "Web & Mobile App",
      title: "Sahabat Mahasiswa (Student Superapp)",
      description:
        "Aplikasi kebutuhan mahasiswa terintegrasi untuk kalkulasi IPK, tracking tugas kuliah, pencarian kosan terdekat, dan jadwal kampus dengan tampilan modern serta dukungan offline-first.",
      tags: ["HTML5", "CSS3", "JavaScript", "PWA"],
      icon: "fa-solid fa-graduation-cap",
      demoUrl: "https://sahabatmahasiswa.site",
      demoText: "Kunjungi Web",
      repoUrl: "https://github.com/NnoeeL",
    },
  ];

  // ==========================================================================
  // 3. FUNGSI RENDER DATA KE DOM (SKILL & PROYEK)
  // ==========================================================================
  const renderSkills = () => {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = skillCategories
      .map(
        (cat) => `
      <div class="skill-category-card reveal">
        <div class="skill-category-header">
          <i class="${cat.icon} skill-category-icon"></i>
          <h3 class="skill-category-title">${cat.title}</h3>
        </div>
        <div class="skill-badge-list">
          ${cat.skills
            .map(
              (skill) => `
            <span class="badge">
              <i class="${skill.icon}"></i> ${skill.name}
            </span>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  };

  const renderProjects = () => {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = projectsData
      .map(
        (project) => `
      <article class="project-card reveal" id="${project.id}">
        <div class="project-banner">
          <div class="project-window-controls">
            <span class="terminal-dot dot-red"></span>
            <span class="terminal-dot dot-yellow"></span>
            <span class="terminal-dot dot-green"></span>
          </div>
          <div class="project-banner-icon">
            <i class="${project.icon}"></i>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); z-index: 1;">
            ~/projects/${project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
          </div>
        </div>

        <div class="project-body">
          <span class="project-category">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          
          <div class="project-tags">
            ${project.tags
              .map((tag) => `<span class="project-tag">${tag}</span>`)
              .join("")}
          </div>

          <div class="project-links">
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex: 1;">
              <i class="fa-brands fa-github"></i> Repository
            </a>
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> ${project.demoText || "Demo"}
            </a>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  };

  // Jalankan render awal
  renderSkills();
  renderProjects();

  // ==========================================================================
  // 4. TYPING ANIMATION (EFEK TERMINAL BERGAYA CODE/WHOAMI)
  // ==========================================================================
  const typingElement = document.getElementById("typing-text");
  const wordsToType = [
    "Mahasiswa Teknik Informatika",
    "Bot & Automation Developer",
    "Game & Interactive Web Creator",
    "Penggemar Kode Bersih & Open Source",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  const typeWriterEffect = () => {
    if (!typingElement) return;

    const currentWord = wordsToType[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50; // Lebih cepat saat menghapus
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100; // Kecepatan normal saat mengetik
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Jeda setelah selesai mengetik satu kata penuh
      isDeleting = true;
      typingDelay = 2000;
    } else if (isDeleting && charIndex === 0) {
      // Berpindah ke kata berikutnya
      isDeleting = false;
      wordIndex = (wordIndex + 1) % wordsToType.length;
      typingDelay = 500;
    }

    setTimeout(typeWriterEffect, typingDelay);
  };

  // Mulai animasi typing
  typeWriterEffect();

  // ==========================================================================
  // 5. TOGGLE TEMA (DARK / LIGHT MODE DENGAN LOCALSTORAGE)
  // ==========================================================================
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Periksa tema tersimpan atau preferensi sistem (default dark)
  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const targetTheme = currentTheme === "light" ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem("portfolio_theme", targetTheme);
      updateThemeIcon(targetTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "light") {
      themeIcon.className = "fa-solid fa-sun";
      themeIcon.style.color = "var(--neon-amber)";
    } else {
      themeIcon.className = "fa-solid fa-moon";
      themeIcon.style.color = "var(--text-main)";
    }
  }

  // ==========================================================================
  // 6. MENU MOBILE & HAMBURGER
  // ==========================================================================
  const hamburgerBtn = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-link");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      const icon = hamburgerBtn.querySelector("i");
      if (icon) {
        icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      }
    });

    // Tutup menu saat salah satu link diklik
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        const icon = hamburgerBtn.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });

    // Tutup menu saat klik di luar area menu
    document.addEventListener("click", (e) => {
      if (
        mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        mobileMenu.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        const icon = hamburgerBtn.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      }
    });
  }

  // ==========================================================================
  // 7. ACTIVE NAV LINK & SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================================================
  const sections = document.querySelectorAll("section[id]");
  const desktopNavLinks = document.querySelectorAll(".nav-links .nav-link");

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNavOnScroll, { passive: true });

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Hanya animasi 1 kali
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ==========================================================================
  // 8. TOMBOL KEMBALI KE ATAS (BACK TO TOP)
  // ==========================================================================
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 400) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      },
      { passive: true }
    );

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ==========================================================================
  // 9. SALIN EMAIL KE CLIPBOARD & TOAST NOTIFICATION
  // ==========================================================================
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const emailTextElem = document.getElementById("email-text");
  const toast = document.getElementById("toast");

  if (copyEmailBtn && emailTextElem) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = emailTextElem.textContent.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback untuk browser lawas / non-HTTPS
          const tempInput = document.createElement("input");
          tempInput.value = email;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
        }

        // Tampilkan notifikasi toast
        if (toast) {
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
          }, 3000);
        }
      } catch (err) {
        console.error("Gagal menyalin email:", err);
      }
    });
  }

  // ==========================================================================
  // 10. AUTO UPDATE TAHUN DI FOOTER
  // ==========================================================================
  const yearElem = document.getElementById("current-year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
