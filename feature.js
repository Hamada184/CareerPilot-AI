const STORAGE_KEY = 'careerpilot-state';
const FREE_LIMIT = 1;

const FEATURE_COPY = {
  interview: {
    title: 'AI Interview Simulator',
    placeholder: 'اكتب إجابتك على سؤال: عرّف event loop في JavaScript',
    result: (value) => `تقييم مبدئي: إجابتك كانت جيدة. الخطوة التالية: زوّد أمثلة عملية عن استخدام ${value.slice(0, 20) || 'المفهوم'}.`
  },
  cv: {
    title: 'Smart CV Analyzer',
    placeholder: 'ألصق ملخص CV هنا...',
    result: (value) => `ATS Score المبدئي: 78/100. أضف كلمات مفتاحية مثل: React, API, Testing. تمت قراءة ${value.length} حرف.`
  },
  study: {
    title: 'AI Study Planner',
    placeholder: 'اكتب المهارات والوقت المتاح أسبوعيًا...',
    result: () => 'الخطة: 5 أيام تعلم + يوم مشاريع + يوم مراجعة. الأولوية: الأساسيات ثم التطبيق العملي.'
  },
  freelance: {
    title: 'Freelancer Hub',
    placeholder: 'اكتب عدد المشاريع والعملاء الحاليين...',
    result: () => 'تقرير سريع: تحتاج رفع سعر الخدمة الأساسية 10% وتنظيم المواعيد على أسبوعين لزيادة الربح.'
  },
  profile: {
    title: 'Smart Profile',
    placeholder: 'اكتب نبذة قصيرة عنك ومهاراتك...',
    result: () => 'تم إنشاء Bio احترافي: Frontend Developer متخصص في React وبناء واجهات عالية الأداء.'
  },
  jobs: {
    title: 'Job Radar',
    placeholder: 'اكتب مهاراتك الحالية للبحث عن وظائف مناسبة...',
    result: () => 'نتائج مطابقة: 12 فرصة (Internship/Junior/Remote). أعلى تطابق: Frontend Junior React.'
  }
};

const getState = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const parsed = saved ? JSON.parse(saved) : {};
  return { paid: Boolean(parsed.paid), usage: parsed.usage || {} };
};

const saveState = (state) => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

const feature = document.body.dataset.feature;
const state = getState();
const config = FEATURE_COPY[feature];

const titleEl = document.querySelector('[data-feature-title]');
const inputEl = document.querySelector('[data-input]');
const runBtn = document.querySelector('[data-run]');
const finishBtn = document.querySelector('[data-finish]');
const resultEl = document.querySelector('[data-result]');
const statusEl = document.querySelector('[data-status]');
const lockEl = document.querySelector('[data-locked]');
const workEl = document.querySelector('[data-workspace]');

if (titleEl && config) titleEl.textContent = config.title;
if (inputEl && config) inputEl.placeholder = config.placeholder;

const used = state.usage[feature] || 0;
const blocked = !state.paid && used >= FREE_LIMIT;

if (state.paid) {
  statusEl.textContent = '✅ Premium مفعل: لديك محاولات لا نهائية.';
} else {
  statusEl.textContent = `الحالة المجانية: ${Math.max(FREE_LIMIT - used, 0)} محاولة متبقية.`;
}

if (blocked) {
  if (lockEl) lockEl.hidden = false;
  if (workEl) workEl.hidden = true;
}

if (runBtn) {
  runBtn.addEventListener('click', () => {
    const value = inputEl?.value?.trim() || '';
    resultEl.textContent = config.result(value);
  });
}

if (finishBtn) {
  finishBtn.addEventListener('click', () => {
    if (!state.paid) {
      const newState = getState();
      const current = newState.usage[feature] || 0;
      if (current < FREE_LIMIT) {
        newState.usage[feature] = current + 1;
        saveState(newState);
      }
      alert('تم استخدام المحاولة المجانية لهذه الميزة. المرة القادمة يلزم الاشتراك.');
    } else {
      alert('تم حفظ الجلسة. يمكنك إعادة المحاولة بدون حدود لأنك Premium.');
    }
    window.location.href = 'index.html#features';
  });
}
