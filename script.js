const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const planButtons = document.querySelectorAll('[data-plan]');
const payButton = document.querySelector('[data-pay]');
const paymentStatus = document.querySelector('.payment__status');
const featureCards = document.querySelectorAll('[data-feature]');

const STORAGE_KEY = 'careerpilot-state';
const FREE_LIMIT = 1;

const getState = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const parsed = saved ? JSON.parse(saved) : {};
  return {
    paid: Boolean(parsed.paid),
    usage: parsed.usage || {}
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

if (payButton && paymentStatus) {
  payButton.addEventListener('click', () => {
    const state = getState();
    state.paid = true;
    saveState(state);
    paymentStatus.textContent = 'تم الدفع بنجاح ✅ تم تفعيل محاولات لا نهائية لكل المميزات.';
    featureCards.forEach(updateCardState);
  });
}

// initial payment state UI
if (paymentStatus && getState().paid) {
  paymentStatus.textContent = '✅ أنت مشترك بالفعل: كل المميزات بمحاولات لا نهائية.';
}
