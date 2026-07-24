
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    mobileMenu.addEventListener('click', () => navMenu.classList.toggle('show'));
    document.querySelectorAll('#nav-menu a').forEach(l => l.addEventListener('click', () => navMenu.classList.remove('show')));



    const obs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('visible'), i * 90);
                obs.unobserve(e.target);
            }
        });
    }, {threshold: 0.12});
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

    // â”€â”€â”€ CINEMATIC ARTES MARCIALES BIDIRECCIONAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    (function () {
        const rows = Array.from(document.querySelectorAll('.art-row'));
        if (!rows.length) return;

        const FIGHTER_DURATION_MS = 1150;
        const TEXT_DELAY_AFTER_MS = 200;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const row = entry.target;
                if (entry.isIntersecting) {
                    // Entra al viewport: deslizar hacia adentro
                    row.classList.add('fighter-in');
                    
                    if(row.textTimeout) clearTimeout(row.textTimeout);
                    row.textTimeout = setTimeout(() => {
                        row.classList.add('text-in');
                    }, FIGHTER_DURATION_MS + TEXT_DELAY_AFTER_MS);
                } else {
                    // Sale del viewport: deslizar hacia afuera
                    row.classList.remove('fighter-in', 'text-in');
                    if(row.textTimeout) clearTimeout(row.textTimeout);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

        rows.forEach(row => {
            observer.observe(row);
        });
    })();

