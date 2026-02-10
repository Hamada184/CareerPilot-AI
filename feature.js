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
    result: (value) => `ATS Score المبدئي: ${Math.min(95, 60 + value.length % 40)}/100. أضف كلمات مفتاحية مثل: React, API, Testing.`
  },
  study: {
    title: 'AI Study Planner',
    placeholder: 'اكتب المهارات والوقت المتاح أسبوعيًا...',
    result: (value) => `الخطة الأسبوعية: 5 أيام تعلم + يوم مشاريع + يوم مراجعة. وقتك المتاح (${value || 'غير محدد'}) تم إدراجه بالخطة.`
  },
  freelance: {
    title: 'Freelancer Hub',
    placeholder: 'اكتب عدد المشاريع والعملاء الحاليين...',
    result: () => 'تقرير ربح: ابدأ بخدمة أساسية + باقة شهرية للعميل المتكرر لرفع الدخل الشهري 15%-20%.'
  },
  profile: {
    title: 'Smart Profile',
    placeholder: 'اكتب نبذة قصيرة عنك ومهاراتك...',
    result: (value) => `Bio مقترح: ${value || 'Frontend Developer'} | متخصص في بناء منتجات سريعة وقابلة للتوسع.`
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
  return { paid: Boolean(parsed.paid), usage: parsed.usage || {}, history: parsed.history || [] };
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
const historyList = document.querySelector('[data-history]');

let ranAnalysis = false;

const renderHistory = () => {
  if (!historyList) return;
  const records = getState().history.filter((entry) => entry.feature === feature).slice(-5).reverse();
  historyList.innerHTML = '';

  if (!records.length) {
    historyList.innerHTML = '<li>لا توجد جلسات سابقة لهذه الميزة.</li>';
    return;
  }

  records.forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = `${entry.time} — ${entry.summary}`;
    historyList.appendChild(li);
  });
};

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
    if (!value) {
      resultEl.textContent = 'من فضلك اكتب مدخلات قبل تشغيل التحليل.';
      return;
    }

    const output = config.result(value);
    resultEl.textContent = output;
    ranAnalysis = true;
  });
}

if (finishBtn) {
  finishBtn.addEventListener('click', () => {
    if (!ranAnalysis) {
      alert('شغل التحليل أولًا قبل إنهاء الجلسة.');
      return;
    }

    const newState = getState();
    const now = new Date();
    const summary = (resultEl.textContent || '').slice(0, 80);

    newState.history.push({
      feature,
      time: now.toLocaleString('ar-EG'),
      summary
    });

    if (!newState.paid) {
      const current = newState.usage[feature] || 0;
      if (current < FREE_LIMIT) {
        newState.usage[feature] = current + 1;
      }
      alert('تم استخدام المحاولة المجانية لهذه الميزة. المرة القادمة يلزم الاشتراك.');
    } else {
      alert('تم حفظ الجلسة. يمكنك إعادة المحاولة بدون حدود لأنك Premium.');
    }

    saveState(newState);
    window.location.href = 'index.html#features';
  });
}

renderHistory();
