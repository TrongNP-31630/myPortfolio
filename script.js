'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
const mobile = window.matchMedia('(max-width: 720px)');
function syncMenu() {
  menu.hidden = !mobile.matches;
  navigation.hidden = mobile.matches;
  menu.setAttribute('aria-expanded', 'false');
}
syncMenu();
mobile.addEventListener('change', syncMenu);
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.hidden = expanded;
});
navigation.addEventListener('click', event => {
  if (mobile.matches && event.target.closest('a')) {
    navigation.hidden = true;
    menu.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
    navigation.hidden = true;
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.querySelector('.copy-email');
const toast = document.querySelector('.toast');
let toastTimer;
if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('trongnp.work@gmail.com');
      toast.textContent = document.documentElement.lang === 'en' ? 'Email address copied.' : 'Đã sao chép địa chỉ email.';
    } catch {
      toast.textContent = document.documentElement.lang === 'en' ? 'Could not copy. Please select the email address directly.' : 'Chưa sao chép được. Bạn có thể chọn trực tiếp địa chỉ email.';
    }
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
  });
}

// Keep the current section when changing language; static links also work without JS.
const languageSwitch = document.querySelector('.language-toggle');
if (languageSwitch) {
  const languagePage = languageSwitch.getAttribute('href').split('#')[0];
  const syncLanguageAnchor = () => languageSwitch.setAttribute('href', languagePage + window.location.hash);
  syncLanguageAnchor();
  window.addEventListener('hashchange', syncLanguageAnchor);
}
