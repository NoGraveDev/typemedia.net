/* ═══════════════════════════════════════════════════
   TYPE MEDIA DAO — Main JS
   ═══════════════════════════════════════════════════ */

// ── Mobile Menu Toggle ──────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    // Close on link click
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            toggle.classList.remove('active');
        });
    });
}

// ── Scroll Animations (Intersection Observer) ────────
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.info-card, .dao-card, .member-card, .asset-card').forEach((el, i) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// ── Nav background on scroll ────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const current = window.scrollY;
        if (current > 100) {
            nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
        } else {
            nav.style.borderBottomColor = 'rgba(255,255,255,0.04)';
        }
        lastScroll = current;
    }, { passive: true });
}

// ── Smooth card hover tilt (subtle) ─────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.member-card, .dao-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-4px) perspective(800px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
