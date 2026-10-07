    // THEME TOGGLE
    // Switches between dark and light mode.
    // The choice is saved in localStorage so it remembers next time.

    function toggleTheme() {
      const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    document.getElementById('theme-btn').textContent =
    next === 'dark' ? '[ turn it on! ]' : '[ turn it off! ]';
    }

    // Restore saved theme on page load
    (function () {
      const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('theme-btn').textContent =
    saved === 'dark' ? '[ turn it on! ]' : '[ turn it off! ]';
      }
    })();

    // ARCHIVE FILTER

    (function () {
      const filters = document.querySelectorAll('.archive-filter');
    const entries = document.querySelectorAll('.archive-entry');

      filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const selected = filter.dataset.filter;

            filters.forEach(button => {
                button.classList.remove('active');
            });

            filter.classList.add('active');

            entries.forEach(entry => {
                const category = entry.dataset.category;

                if (selected === 'all' || category === selected) {
                    entry.style.display = '';
                } else {
                    entry.style.display = 'none';
                }
            });
        });
      });
    })();

    // CONTACT FORM
    // Right now this just shows an alert as a placeholder.
    // Will connect it to smth so real messages land in  my email inbox.

    function handleSend() {
      const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const msg = document.getElementById('f-msg').value.trim();

    if (!name || !email || !msg) {
        alert('Please fill in all fields before sending.');
    return;
      }

    // Placeholder action — replace with real form action later
    alert('Message ready to send....Just kidding! Will connect this to a real email service soon!');
    }
    /* ============================================================
       TRAIN ANIMATION JAVASCRIPT
       Reads the 5 train rows from the template, then every 260ms:
         - Swaps smoke characters on rows 0 and 1 (puffing effect)
         - Alternates wheel chars on row 4 (spinning effect)
       The CSS keyframe handles the left-to-right movement.
    ============================================================ */
    (function () {
      const tpl = document.getElementById('train-tpl');
    const pre = document.getElementById('train-pre');
    const gnd = document.getElementById('train-ground');
    if (!tpl || !pre) return;

    if (gnd) gnd.textContent = '-~-'.repeat(100);

    const raw = tpl.innerHTML;
      const lines = raw.split('\n').filter(l => l.length > 0);

    const SMOKE_TOP = [
    '    o O O  ',
    '   o   O  o',
    '    O    o ',
    '   o O   O ',
    ];
    const SMOKE_MID = [
    '   o    ',
    '  o O   ',
    '   o    ',
    '  O  o  ',
    ];

    const wheelBase = lines[4] || '';
    let alt = false;
      const wheelSpun = wheelBase.replace(/-0-/g, () => {
        alt = !alt;
    return alt ? '-O-' : '-0-';
      });
    const WHEELS = [wheelBase, wheelBase, wheelSpun, wheelBase];

    let tick = 0;

    function render() {
        const si = tick % 4;
    const row0 = SMOKE_TOP[si] + (lines[0] || '').slice(SMOKE_TOP[si].length);
    const row1 = SMOKE_MID[si] + (lines[1] || '').slice(SMOKE_MID[si].length);
    pre.textContent = [row0, row1, lines[2] || '', lines[3] || '', WHEELS[si]].join('\n');
    tick++;
      }

    render();
    let timer = setInterval(render, 260);

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {clearInterval(timer); }
    else {timer = setInterval(render, 260); }
      });
    })();
