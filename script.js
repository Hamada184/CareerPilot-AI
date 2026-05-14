const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const planButtons = document.querySelectorAll('[data-plan]');
const paymentForm = document.querySelector('[data-payment-form]');
const paymentStatus = document.querySelector('.payment__status');
const featureCards = document.querySelectorAll('[data-feature]');
const resetUsageButton = document.querySelector('[data-reset-usage]');
const accountBadge = document.querySelector('[data-account-badge]');
const accountSummary = document.querySelector('[data-account-summary]');

const STORAGE_KEY = 'careerpilot-state';
const FREE_LIMIT = 1;
const FEATURES = ['interview', 'cv', 'study', 'freelance', 'profile', 'jobs'];

const getState = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const parsed = saved ? JSON.parse(saved) : {};
  return {
    paid: Boolean(parsed.paid),
    usage: parsed.usage || {},
    history: parsed.history || []
  };
};

const saveState = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const remainingTries = (feature) => {
  const state = getState();
  if (state.paid) return Infinity;
  const used = state.usage[feature] || 0;
  return Math.max(FREE_LIMIT - used, 0);
};

const updateAccountPanel = () => {
  if (!accountBadge || !accountSummary) return;

  const state = getState();
  if (state.paid) {
    accountBadge.textContent = 'Premium Plan';
    accountBadge.classList.add('account-badge--premium');
    accountSummary.textContent = 'كل المميزات مفتوحة الآن بمحاولات لا نهائية.';
    return;
  }

  const remainingTotal = FEATURES.reduce((acc, feature) => acc + remainingTries(feature), 0);
  accountBadge.textContent = 'Free Plan';
  accountBadge.classList.remove('account-badge--premium');
  accountSummary.textContent = `متبقي لك ${remainingTotal} محاولات مجانية إجماليًا (${FEATURES.length} ميزات × محاولة واحدة).`;
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('is-open'));
}

const updateCardState = (card) => {
  const feature = card.dataset.feature;
  const usageLabel = card.querySelector('.usage');
  const openButton = card.querySelector('[data-open]');
  const state = getState();

  if (!usageLabel || !openButton) return;

  if (state.paid) {
    usageLabel.textContent = '✅ حساب Premium: محاولات لا نهائية.';
    openButton.textContent = 'استخدم الميزة الآن';
    return;
  }

  const remaining = remainingTries(feature);
  if (remaining > 0) {
    usageLabel.textContent = `متبقي لك ${remaining} محاولة مجانية.`;
    openButton.textContent = 'جرّب الميزة';
  } else {
    usageLabel.textContent = 'انتهت المحاولة المجانية — اشترك لفتح محاولات لا نهائية.';
    openButton.textContent = 'اشترك للمتابعة';
  }
};

featureCards.forEach((card) => {
  updateCardState(card);

  const feature = card.dataset.feature;
  const button = card.querySelector('[data-open]');
  if (!button) return;

  button.addEventListener('click', () => {
    if (getState().paid || remainingTries(feature) > 0) {
      window.location.href = `${feature}.html`;
      return;
    }
    document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' });
  });
});

planButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    const destination = plan === 'premium' ? 'payment' : 'features';
    document.getElementById(destination)?.scrollIntoView({ behavior: 'smooth' });
  });
});

const validCardNumber = (value) => value.replace(/\s+/g, '').length >= 16;
const validExpiry = (value) => /^\d{2}\/\d{2}$/.test(value.trim());
const validCvv = (value) => /^\d{3,4}$/.test(value.trim());

if (paymentForm && paymentStatus) {
  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(paymentForm);
    const holder = String(formData.get('holder') || '').trim();
    const card = String(formData.get('card') || '').trim();
    const expiry = String(formData.get('expiry') || '').trim();
    const cvv = String(formData.get('cvv') || '').trim();

    if (!holder || !validCardNumber(card) || !validExpiry(expiry) || !validCvv(cvv)) {
      paymentStatus.textContent = '❌ بيانات الدفع غير مكتملة. تأكد من الاسم/رقم البطاقة/MM/YY/CVV.';
      paymentStatus.classList.add('payment__status--error');
      return;
    }

    const state = getState();
    state.paid = true;
    saveState(state);

    paymentStatus.textContent = '✅ تم الدفع بنجاح. تم فتح محاولات لا نهائية لكل المميزات.';
    paymentStatus.classList.remove('payment__status--error');
    featureCards.forEach(updateCardState);
    updateAccountPanel();
    paymentForm.reset();
  });
}

if (resetUsageButton) {
  resetUsageButton.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    featureCards.forEach(updateCardState);
    updateAccountPanel();
    if (paymentStatus) {
      paymentStatus.textContent = 'تمت إعادة ضبط التجربة بنجاح.';
      paymentStatus.classList.remove('payment__status--error');
    }
  });
}

if (paymentStatus && getState().paid) {
  paymentStatus.textContent = '✅ أنت مشترك بالفعل: كل المميزات بمحاولات لا نهائية.';
}

updateAccountPanel();
