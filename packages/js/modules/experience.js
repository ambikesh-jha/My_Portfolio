/* ============================================================
   experience.js
   Shared utility — imported by both landing.js and about.js.

   Calculates total experience from a fixed start date and
   stamps the result into every [data-exp] element on the page.

   Attribute values:
     data-exp="full"    →  "1.6 years"
     data-exp="decimal" →  "1.6"
     data-exp="years"   →  "1"
     data-exp="months"  →  "7"
   ============================================================ */


function getExperience() {
    const start = new Date(2024, 6, 1); // July 2024
    const now   = new Date();

    let years  = now.getFullYear() - start.getFullYear();
    let months = now.getMonth()    - start.getMonth();

    if (months < 0) { years--; months += 12; }

    return {
        full:    `${(years + months / 12).toFixed(1)} years`,
        years,
        months,
        decimal: (years + months / 12).toFixed(1)
    };
}

export function updateAllExperience() {
    const exp = getExperience();

    document.querySelectorAll('[data-exp]').forEach(el => {
        switch (el.dataset.exp) {
            case 'full':    el.textContent = exp.full;    break;
            case 'decimal': el.textContent = exp.decimal; break;
            case 'years':   el.textContent = exp.years;   break;
            case 'months':  el.textContent = exp.months;  break;
            default:        el.textContent = exp.full;
        }
    });
}