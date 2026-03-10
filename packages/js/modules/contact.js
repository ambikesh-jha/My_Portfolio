/*
 * contact.js
 * Handles:
 *   - EmailJS form submission
 *   - Floating-label field validation (blur + live)
 *   - Loading / success / error states
 *
 * Usage:
 *   import { initContact } from './packages/js/modules/contact.js';
 *   initContact();
 *
 * ─────────────────────────────────────────────────────────────
 * SETUP — replace the three placeholders with your EmailJS keys:
 *
 *   PUBLIC_KEY   →  Account > API Keys  in the EmailJS dashboard
 *   SERVICE_ID   →  Email Services tab
 *   TEMPLATE_ID  →  Email Templates tab
 *
 * Template variables expected in your EmailJS template:
 *   {{user_name}}  {{user_email}}  {{subject}}  {{message}}
 * ─────────────────────────────────────────────────────────────
 */

const EMAILJS_PUBLIC_KEY  = 'EJRVS7zJMG2G3tEl0';
const EMAILJS_SERVICE_ID  = 'service_yp5gme7';
const EMAILJS_TEMPLATE_ID = 'template_6n4rwsw';

export function initContact() {
    /* ── guard: only run on pages that have the contact form ── */
    const form      = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn  = document.getElementById('contact-submit');
    const formInner  = document.getElementById('contact-form-inner');
    const successEl  = document.getElementById('contact-success');
    const resetBtn   = document.getElementById('success-reset');

    /* ── init EmailJS ── */
    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    } else {
        console.warn('contact.js: EmailJS SDK not loaded. Add the CDN script before this module.');
    }

    /*
     * ─────────────────────────────────────────
     * VALIDATION HELPERS
     * ─────────────────────────────────────────
     */
    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    }

    function validateField(input) {
        const isEmail = input.type === 'email';
        const ok = isEmail
            ? isValidEmail(input.value)
            : input.value.trim().length > 0;

        const field = input.closest('.contact__field');
        input.classList.toggle('error', !ok);
        field.classList.toggle('has-error', !ok);
        return ok;
    }

    /* live validation — remove error once user fixes the field */
    form.querySelectorAll('input, textarea').forEach(el => {
        el.addEventListener('blur',  () => validateField(el));
        el.addEventListener('input', () => {
            if (el.classList.contains('error')) validateField(el);
        });
    });

    /*
     * ─────────────────────────────────────────
     * SUBMIT
     * ─────────────────────────────────────────
     */
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        /* validate all fields first */
        const fields    = [...form.querySelectorAll('input, textarea')];
        const allValid  = fields.map(validateField).every(Boolean);
        if (!allValid) return;

        /* show loading state */
        setLoading(true);

        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS SDK not available.');
            }
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
            showSuccess();
        } catch (err) {
            console.error('EmailJS send error:', err);
            setLoading(false);
            showErrorBanner();
        }
    });

    /*
     * ─────────────────────────────────────────
     * RESET (Send Another)
     * ─────────────────────────────────────────
     */
    resetBtn?.addEventListener('click', () => {
        form.reset();
        form.querySelectorAll('input, textarea').forEach(el => {
            el.classList.remove('error');
            el.closest('.contact__field')?.classList.remove('has-error');
        });
        removeErrorBanner();
        successEl.classList.remove('show');
        formInner.classList.remove('hidden');
        setLoading(false);
    });

    /*
     * ─────────────────────────────────────────
     * STATE HELPERS
     * ─────────────────────────────────────────
     */
    function setLoading(state) {
        submitBtn.classList.toggle('loading', state);
        submitBtn.disabled = state;
    }

    function showSuccess() {
        formInner.classList.add('hidden');
        successEl.classList.add('show');
    }

    function showErrorBanner() {
        let banner = document.getElementById('contact-error-banner');
        if (!banner) {
            banner = document.createElement('p');
            banner.id = 'contact-error-banner';
            banner.style.cssText = [
                'color: var(--first-color-second, #f4377c)',
                'font-size: 0.78rem',
                'text-align: center',
                'margin-top: 0.75rem',
                'line-height: 1.55',
            ].join(';');
            form.appendChild(banner);
        }
        banner.textContent =
            'Something went wrong. Please email me directly at jhaambikesh8@gmail.com';
    }

    function removeErrorBanner() {
        document.getElementById('contact-error-banner')?.remove();
    }
}