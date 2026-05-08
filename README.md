<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CareerPilot AI</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Cairo", sans-serif;
        background: #f7f8fb;
        color: #121826;
        line-height: 1.7;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      ul {
        list-style: none;
      }

      .hero {
        background: radial-gradient(circle at top, #e0f2ff, #f7f8fb);
        padding: 40px 6vw 80px;
      }

      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 40px;
      }

      .logo {
        font-weight: 700;
        font-size: 1.4rem;
      }

      .nav__links {
        display: flex;
        gap: 20px;
        align-items: center;
      }

      .nav__links a {
        font-weight: 600;
        color: #233151;
      }

      .nav__toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.6rem;
      }

      .hero__content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 32px;
        align-items: center;
      }

      .hero__text h1 {
        font-size: clamp(2rem, 4vw, 3.2rem);
        margin: 12px 0 18px;
      }

      .hero__text h1 span {
        display: block;
        color: #4158d0;
        font-size: 0.8em;
        margin-top: 8px;
      }

      .eyebrow {
        font-weight: 600;
        color: #4c5b77;
      }

      .lead {
        color: #3a475f;
        margin-bottom: 24px;
      }

      .hero__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 24px;
      }

      .hero__stats {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
      }

      .hero__stats div {
        background: white;
        padding: 12px 18px;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(18, 24, 38, 0.06);
      }

      .hero__stats strong {
        font-size: 1.2rem;
        display: block;
      }

      .hero__card {
        background: white;
        padding: 24px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(18, 24, 38, 0.12);
      }

      .hero__card ul {
        margin: 16px 0;
        display: grid;
        gap: 10px;
      }

      .btn {
        border: none;
        padding: 12px 22px;
        border-radius: 999px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        font-family: "Cairo", sans-serif;
        font-size: 1rem;
      }

      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 20px rgba(18, 24, 38, 0.12);
      }

      .btn--primary {
        background: #4158d0;
        color: white;
      }

      .btn--secondary {
        background: #2bb673;
        color: white;
      }

      .btn--ghost {
        background: white;
        border: 1px solid #cbd5e1;
        color: #233151;
      }

      .section {
        padding: 70px 6vw;
      }

      .section--alt {
        background: white;
      }

      .section__header {
        text-align: center;
        margin-bottom: 40px;
      }

      .section__header h2 {
        font-size: clamp(1.8rem, 3vw, 2.4rem);
        margin-bottom: 12px;
      }

      .grid {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      }

      .card {
        background: white;
        padding: 24px;
        border-radius: 18px;
        box-shadow: 0 14px 30px rgba(18, 24, 38, 0.08);
      }

      .card ul {
        margin-top: 16px;
        display: grid;
        gap: 8px;
        color: #4c5b77;
      }

      .stack {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
      }

      .stack__item {
        background: #f7f8fb;
        padding: 20px;
        border-radius: 16px;
        border: 1px solid #e2e8f0;
      }

      .pricing {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        align-items: stretch;
      }

      .price-card {
        background: white;
        padding: 26px;
        border-radius: 20px;
        box-shadow: 0 16px 30px rgba(18, 24, 38, 0.08);
        position: relative;
      }

      .price-card--highlight {
        border: 2px solid #4158d0;
      }

      .badge {
        position: absolute;
        top: 16px;
        left: 16px;
        background: #2bb673;
        color: white;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.8rem;
      }

      .price {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 10px 0 16px;
      }

      .price-card ul {
        display: grid;
        gap: 8px;
        margin-bottom: 20px;
      }

      .features {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      }

      .feature-card {
        background: #0f172a;
        color: #e2e8f0;
        padding: 22px;
        border-radius: 18px;
        display: grid;
        gap: 12px;
        min-height: 200px;
      }

      .feature-card p {
        color: #cbd5f5;
      }

      .feature-card .usage {
        font-size: 0.85rem;
        color: #facc15;
      }

      .feature-card .btn {
        justify-self: start;
      }

      .feature-card.is-active {
        outline: 2px solid #2bb673;
        box-shadow: 0 12px 30px rgba(43, 182, 115, 0.35);
      }

      .payment {
        background: white;
        padding: 26px;
        border-radius: 18px;
        display: grid;
        gap: 18px;
        align-items: center;
        box-shadow: 0 14px 30px rgba(18, 24, 38, 0.08);
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      }

      .payment__status {
        font-weight: 600;
        color: #2bb673;
      }

      .footer {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        padding: 40px 6vw 60px;
        background: #121826;
        color: white;
      }

      .footer ul {
        margin-top: 10px;
        display: grid;
        gap: 6px;
      }

      @media (max-width: 768px) {
        .nav__toggle {
          display: block;
        }

        .nav__links {
          position: absolute;
          top: 80px;
          right: 6vw;
          background: white;
          flex-direction: column;
          padding: 16px;
          border-radius: 16px;
          box-shadow: 0 18px 30px rgba(18, 24, 38, 0.1);
          display: none;
          z-index: 100;
        }

        .nav__links.is-open {
          display: flex;
        }
      }

      .feature-page {
        max-width: 860px;
        margin: 0 auto;
        background: white;
        border-radius: 18px;
        padding: 28px;
        box-shadow: 0 16px 28px rgba(18, 24, 38, 0.08);
        display: grid;
        gap: 16px;
      }

      .back-link {
        color: #4158d0;
        font-weight: 700;
        cursor: pointer;
      }

      .feature-status {
        background: #eef2ff;
        border: 1px solid #c7d2fe;
        color: #1e1b4b;
        border-radius: 12px;
        padding: 10px 14px;
      }

      .workspace {
        display: grid;
        gap: 12px;
      }

      .workspace textarea {
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 12px;
        font-family: 'Cairo', sans-serif;
        font-size: 1rem;
      }

      .workspace__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .result-box {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 12px;
        min-height: 70px;
      }

      .locked-box {
        background: #fff7ed;
        border: 1px solid #fdba74;
        color: #7c2d12;
        border-radius: 12px;
        padding: 16px;
        display: grid;
        gap: 10px;
      }

      .account-panel {
        max-width: 820px;
        margin: 0 auto;
        background: white;
        border-radius: 16px;
        border: 1px solid #e2e8f0;
        padding: 20px;
        display: grid;
        gap: 10px;
      }

      .account-badge {
        width: fit-content;
        background: #e2e8f0;
        color: #1e293b;
        border-radius: 999px;
        padding: 4px 12px;
        font-weight: 700;
      }

      .account-badge--premium {
        background: #dcfce7;
        color: #166534;
      }

      .account-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .payment-form {
        display: grid;
        gap: 12px;
      }

      .payment-form label {
        display: grid;
        gap: 6px;
        font-weight: 600;
      }

      .payment-form input {
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        padding: 10px;
        font-family: "Cairo", sans-serif;
        font-size: 1rem;
      }

      .payment-form__row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .payment__status--error {
        color: #b91c1c;
      }

      .history-box {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 12px;
        background: #f8fafc;
      }

      .history-box ul {
        list-style: disc;
        padding-inline-start: 18px;
        display: grid;
        gap: 8px;
        margin-top: 8px;
      }

      /* Page routing */
      .page { display: none; }
      .page.active { display: block; }
    </style>
  </head>
  <body>

    <!-- ===== INDEX PAGE ===== -->
    <div id="page-index" class="page active">
      <header class="hero">
        <nav class="nav">
          <div class="logo">CareerPilot AI</div>
          <button class="nav__toggle" type="button" aria-label="فتح القائمة">☰</button>
          <ul class="nav__links">
            <li><a href="#modules" onclick="scrollToSection('modules')">الوحدات</a></li>
            <li><a href="#stack" onclick="scrollToSection('stack')">التقنيات</a></li>
            <li><a href="#pricing" onclick="scrollToSection('pricing')">الاشتراك</a></li>
            <li><a href="#features" onclick="scrollToSection('features')">الاستخدام</a></li>
          </ul>
        </nav>

        <div class="hero__content">
          <div class="hero__text">
            <p class="eyebrow">منصة ذكية لمسارك المهني بالكامل</p>
            <h1>
              CareerPilot AI
              <span>من الطالب حتى إدارة العمل الحر</span>
            </h1>
            <p class="lead">
              منصة واحدة تجمع محاكاة المقابلات، تحليل الـ CV، خطط المذاكرة
              الذكية، إدارة المشاريع الحرة، وبورد وظائف للفريش في تجربة سلسة
              مدعومة بالذكاء الاصطناعي.
            </p>
            <div class="hero__actions">
              <button class="btn btn--primary" onclick="scrollToSection('pricing')">ابدأ مجانًا</button>
              <button class="btn btn--ghost" onclick="scrollToSection('modules')">شاهد الوحدات</button>
            </div>
            <div class="hero__stats">
              <div><strong>6+</strong><span>وحدة متكاملة</span></div>
              <div><strong>100%</strong><span>تجربة عربية</span></div>
              <div><strong>24/7</strong><span>مساعد مهني</span></div>
            </div>
          </div>
          <div class="hero__card">
            <h3>CareerPilot – Interview Lab</h3>
            <p>محاكاة مقابلات حقيقية مع تقييم فوري ونقاط تحسين.</p>
            <ul>
              <li>أسئلة تقنية + سلوكية حسب الدور والمستوى</li>
              <li>تحليل الإجابات ودرجة من 100</li>
              <li>تتبع للتقدم وتاريخ المقابلات</li>
            </ul>
            <button class="btn btn--secondary" onclick="openFeaturePage('interview')">جرّب محاكي المقابلات</button>
          </div>
        </div>
      </header>

      <main>
        <section id="modules" class="section">
          <div class="section__header">
            <h2>الوحدات الأساسية</h2>
            <p>كل ما تحتاجه لبناء مسارك المهني في منصة واحدة.</p>
          </div>
          <div class="grid">
            <article class="card">
              <h3>Interview Lab</h3>
              <p>محاكاة مقابلات ذكية مع أسئلة تقنية وسلوكية.</p>
              <ul><li>Score من 100</li><li>نقاط قوة وضعف</li><li>مواضيع مقترحة للدراسة</li></ul>
            </article>
            <article class="card">
              <h3>CV Doctor</h3>
              <p>تحليل احترافي للسيرة الذاتية مع ATS Score.</p>
              <ul><li>مقارنة مع الوصف الوظيفي</li><li>نسبة تطابق المهارات</li><li>كلمات مفتاحية مقترحة</li></ul>
            </article>
            <article class="card">
              <h3>Study Planner</h3>
              <p>خطة مذاكرة ديناميكية حسب وقتك ومستواك.</p>
              <ul><li>أولويات واضحة</li><li>خطة أسبوعية</li><li>جلسات مراجعة ذكية</li></ul>
            </article>
            <article class="card">
              <h3>Freelancer Hub</h3>
              <p>لوحة إدارة كاملة لمشاريعك وعملائك.</p>
              <ul><li>فواتير وربح شهري</li><li>تنبيهات بالمواعيد</li><li>اقتراح مهارات لزيادة الدخل</li></ul>
            </article>
            <article class="card">
              <h3>Smart Profile</h3>
              <p>صفحة Link-in-bio احترافية لعرض أعمالك.</p>
              <ul><li>CV + Portfolio</li><li>تحليلات زيارات</li><li>روابط تواصل جاهزة</li></ul>
            </article>
            <article class="card">
              <h3>Job Radar</h3>
              <p>بورد وظائف مخصص للفريش والانترنشب.</p>
              <ul><li>فلترة حسب المهارات</li><li>مطابقة مع أداء المقابلات</li><li>وظائف ريموت ودخولية</li></ul>
            </article>
          </div>
        </section>

        <section id="stack" class="section section--alt">
          <div class="section__header">
            <h2>Tech Stack المقترح</h2>
            <p>بنية ذكية وبسيطة للتوسع السريع.</p>
          </div>
          <div class="stack">
            <div class="stack__item"><h4>Backend</h4><p>Python · FastAPI · PostgreSQL · OpenAI/LLM</p></div>
            <div class="stack__item"><h4>Frontend</h4><p>React أو HTML/CSS/JS · Streamlit MVP</p></div>
            <div class="stack__item"><h4>Auth</h4><p>Firebase Auth أو Supabase</p></div>
          </div>
        </section>

        <section id="pricing" class="section">
          <div class="section__header">
            <h2>نموذج الربح</h2>
            <p>خطة مجانية قوية مع باقات Premium مرنة.</p>
          </div>
          <div class="pricing">
            <article class="price-card">
              <h3>Free</h3>
              <p class="price">0$</p>
              <ul>
                <li>عدد محدود من محاولات المقابلة</li>
                <li>تحليل CV أساسي</li>
                <li>Study Plan مبدئي</li>
              </ul>
              <button class="btn btn--ghost" type="button" data-plan="free">ابدأ مجانًا</button>
            </article>
            <article class="price-card price-card--highlight">
              <div class="badge">الأكثر طلبًا</div>
              <h3>Premium</h3>
              <p class="price">9.99$ / شهر</p>
              <ul>
                <li>Unlimited Interviews</li>
                <li>ATS Optimization متقدم</li>
                <li>Smart Job Matching</li>
                <li>Freelance Dashboard</li>
              </ul>
              <button class="btn btn--primary" type="button" data-plan="premium">اشترك الآن</button>
            </article>
          </div>
        </section>

        <section id="account" class="section">
          <div class="section__header">
            <h2>حالة حسابك</h2>
            <p>تابع محاولاتك المتبقية أو فعّل الاشتراك المميز.</p>
          </div>
          <div class="account-panel">
            <p class="account-badge" data-account-badge>Free Plan</p>
            <p data-account-summary>لم تبدأ أي محاولات بعد.</p>
            <div class="account-actions">
              <button class="btn btn--ghost" type="button" data-reset-usage>إعادة ضبط التجربة</button>
              <button class="btn btn--primary" onclick="scrollToSection('payment')">ترقية إلى Premium</button>
            </div>
          </div>
        </section>

        <section id="features" class="section section--alt">
          <div class="section__header">
            <h2>تجربة المنصة (نسخة ديناميكية)</h2>
            <p>كل ميزة متاحة للجميع مرة واحدة مجانًا، وبعدها تحتاج للاشتراك لإكمال الاستخدام.</p>
          </div>
          <div class="features">
            <article class="feature-card" data-feature="interview">
              <h3>محاكي المقابلات</h3>
              <p>ابدأ مقابلة تجريبية واحصل على تقييم مباشر.</p>
              <button class="btn btn--secondary" type="button" data-open>ابدأ المحاكاة</button>
              <span class="usage">متاح لك محاولة مجانية واحدة.</span>
            </article>
            <article class="feature-card" data-feature="cv">
              <h3>CV Doctor</h3>
              <p>ارفع الـ CV وشاهد التحليل والـ ATS Score.</p>
              <button class="btn btn--secondary" type="button" data-open>حلّل الـ CV</button>
              <span class="usage">متاح لك تحليل مجاني واحد.</span>
            </article>
            <article class="feature-card" data-feature="study">
              <h3>Study Planner</h3>
              <p>أنشئ خطة مذاكرة ذكية حسب وقتك.</p>
              <button class="btn btn--secondary" type="button" data-open>أنشئ الخطة</button>
              <span class="usage">متاح لك خطة مجانية واحدة.</span>
            </article>
            <article class="feature-card" data-feature="freelance">
              <h3>Freelancer Hub</h3>
              <p>افتح لوحة إدارة مشاريعك وأرباحك.</p>
              <button class="btn btn--secondary" type="button" data-open>افتح اللوحة</button>
              <span class="usage">متاح لك دخول مجاني واحد.</span>
            </article>
            <article class="feature-card" data-feature="profile">
              <h3>Smart Profile</h3>
              <p>أنشئ صفحة البايو الاحترافية الآن.</p>
              <button class="btn btn--secondary" type="button" data-open>أنشئ صفحتك</button>
              <span class="usage">متاح لك إنشاء مجاني واحد.</span>
            </article>
            <article class="feature-card" data-feature="jobs">
              <h3>Job Radar</h3>
              <p>استعرض الوظائف المناسبة لمستواك.</p>
              <button class="btn btn--secondary" type="button" data-open>اعرض الوظائف</button>
              <span class="usage">متاح لك بحث مجاني واحد.</span>
            </article>
          </div>
        </section>

        <section id="payment" class="section">
          <div class="section__header">
            <h2>صفحة الدفع</h2>
            <p>أكمل الاشتراك للوصول غير المحدود لكل المزايا.</p>
          </div>
          <div class="payment">
            <div>
              <h3>Premium Checkout</h3>
              <p>بعد الدفع سيتم تفعيل جميع المميزات بلا حدود، مع تقارير وذكاء اصطناعي متقدم.</p>
            </div>
            <form class="payment-form" data-payment-form>
              <label>الاسم على البطاقة<input type="text" name="holder" placeholder="Mohamed Ali" required /></label>
              <label>رقم البطاقة<input type="text" name="card" inputmode="numeric" placeholder="4242 4242 4242 4242" required /></label>
              <div class="payment-form__row">
                <label>MM/YY<input type="text" name="expiry" placeholder="12/29" required /></label>
                <label>CVV<input type="password" name="cvv" inputmode="numeric" placeholder="123" required /></label>
              </div>
              <button class="btn btn--primary" type="submit" data-pay>تأكيد الدفع</button>
            </form>
            <span class="payment__status">جاهز للدفع.</span>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div>
          <h3>CareerPilot AI</h3>
          <p>منصة عربية تبني مسارك المهني من أول خطوة حتى الاحتراف.</p>
        </div>
        <div>
          <h4>تواصل معنا</h4>
          <ul><li>hello@careerpilot.ai</li><li>+20 100 000 0000</li></ul>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <ul>
            <li><a onclick="scrollToSection('modules')" style="cursor:pointer">الوحدات</a></li>
            <li><a onclick="scrollToSection('pricing')" style="cursor:pointer">الاشتراك</a></li>
            <li><a onclick="scrollToSection('features')" style="cursor:pointer">الاستخدام</a></li>
          </ul>
        </div>
      </footer>
    </div>

    <!-- ===== FEATURE PAGE ===== -->
    <div id="page-feature" class="page">
      <main class="section">
        <div class="feature-page">
          <a class="back-link" onclick="goBackToIndex()">← رجوع للصفحة الرئيسية</a>
          <h1 data-feature-title>Feature</h1>
          <p class="feature-status" data-status></p>

          <div data-locked hidden class="locked-box">
            <h3>انتهت المحاولة المجانية</h3>
            <p>لاستخدام هذه الميزة مرة أخرى، اشترك في Premium لتفعيل محاولات لا نهائية.</p>
            <button class="btn btn--primary" onclick="goToPayment()">اذهب للدفع الآن</button>
          </div>

          <section data-workspace class="workspace">
            <label for="feature-input">جرب الميزة الآن:</label>
            <textarea id="feature-input" data-input rows="6"></textarea>
            <div class="workspace__actions">
              <button class="btn btn--secondary" type="button" data-run>تشغيل التحليل</button>
              <button class="btn btn--primary" type="button" data-finish>إنهاء الجلسة</button>
            </div>
            <div class="result-box" data-result>النتيجة ستظهر هنا بعد الضغط على تشغيل التحليل.</div>
            <div class="history-box">
              <h3>آخر الجلسات</h3>
              <ul data-history></ul>
            </div>
          </section>
        </div>
      </main>
    </div>

    <script>
      // ===== STORAGE & STATE =====
      const STORAGE_KEY = 'careerpilot-state';
      const FREE_LIMIT = 1;
      const FEATURES = ['interview', 'cv', 'study', 'freelance', 'profile', 'jobs'];

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

      const remainingTries = (feature) => {
        const state = getState();
        if (state.paid) return Infinity;
        const used = state.usage[feature] || 0;
        return Math.max(FREE_LIMIT - used, 0);
      };

      // ===== ROUTING =====
      let currentFeature = null;
      let ranAnalysis = false;

      function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        window.scrollTo(0, 0);
      }

      function scrollToSection(id) {
        showPage('page-index');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }

      function goBackToIndex() {
        showPage('page-index');
        setTimeout(() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }

      function goToPayment() {
        showPage('page-index');
        setTimeout(() => {
          document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }

      function openFeaturePage(feature) {
        currentFeature = feature;
        ranAnalysis = false;
        const config = FEATURE_COPY[feature];
        const state = getState();

        // Set title & placeholder
        document.querySelector('[data-feature-title]').textContent = config.title;
        document.querySelector('[data-input]').placeholder = config.placeholder;
        document.querySelector('[data-input]').value = '';
        document.querySelector('[data-result]').textContent = 'النتيجة ستظهر هنا بعد الضغط على تشغيل التحليل.';

        // Status
        const statusEl = document.querySelector('[data-status]');
        if (state.paid) {
          statusEl.textContent = '✅ Premium مفعل: لديك محاولات لا نهائية.';
        } else {
          const used = state.usage[feature] || 0;
          statusEl.textContent = `الحالة المجانية: ${Math.max(FREE_LIMIT - used, 0)} محاولة متبقية.`;
        }

        // Lock/unlock
        const used = state.usage[feature] || 0;
        const blocked = !state.paid && used >= FREE_LIMIT;
        document.querySelector('[data-locked]').hidden = !blocked;
        document.querySelector('[data-workspace]').hidden = blocked;

        renderHistory(feature);
        showPage('page-feature');
      }

      // ===== FEATURE PAGE LOGIC =====
      document.querySelector('[data-run]').addEventListener('click', () => {
        const value = document.querySelector('[data-input]').value.trim();
        const resultEl = document.querySelector('[data-result]');
        if (!value) {
          resultEl.textContent = 'من فضلك اكتب مدخلات قبل تشغيل التحليل.';
          return;
        }
        const config = FEATURE_COPY[currentFeature];
        resultEl.textContent = config.result(value);
        ranAnalysis = true;
      });

      document.querySelector('[data-finish]').addEventListener('click', () => {
        if (!ranAnalysis) {
          alert('شغل التحليل أولًا قبل إنهاء الجلسة.');
          return;
        }

        const newState = getState();
        const now = new Date();
        const summary = (document.querySelector('[data-result]').textContent || '').slice(0, 80);

        newState.history.push({
          feature: currentFeature,
          time: now.toLocaleString('ar-EG'),
          summary
        });

        if (!newState.paid) {
          const current = newState.usage[currentFeature] || 0;
          if (current < FREE_LIMIT) {
            newState.usage[currentFeature] = current + 1;
          }
          alert('تم استخدام المحاولة المجانية لهذه الميزة. المرة القادمة يلزم الاشتراك.');
        } else {
          alert('تم حفظ الجلسة. يمكنك إعادة المحاولة بدون حدود لأنك Premium.');
        }

        saveState(newState);
        goBackToIndex();
      });

      function renderHistory(feature) {
        const historyList = document.querySelector('[data-history]');
        if (!historyList) return;
        const records = getState().history.filter(e => e.feature === feature).slice(-5).reverse();
        historyList.innerHTML = '';
        if (!records.length) {
          historyList.innerHTML = '<li>لا توجد جلسات سابقة لهذه الميزة.</li>';
          return;
        }
        records.forEach(entry => {
          const li = document.createElement('li');
          li.textContent = `${entry.time} — ${entry.summary}`;
          historyList.appendChild(li);
        });
      }

      // ===== INDEX PAGE LOGIC =====
      const navToggle = document.querySelector('.nav__toggle');
      const navLinks = document.querySelector('.nav__links');
      if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('is-open'));
      }

      const updateAccountPanel = () => {
        const accountBadge = document.querySelector('[data-account-badge]');
        const accountSummary = document.querySelector('[data-account-summary]');
        if (!accountBadge || !accountSummary) return;
        const state = getState();
        if (state.paid) {
          accountBadge.textContent = 'Premium Plan';
          accountBadge.classList.add('account-badge--premium');
          accountSummary.textContent = 'كل المميزات مفتوحة الآن بمحاولات لا نهائية.';
          return;
        }
        const remainingTotal = FEATURES.reduce((acc, f) => acc + remainingTries(f), 0);
        accountBadge.textContent = 'Free Plan';
        accountBadge.classList.remove('account-badge--premium');
        accountSummary.textContent = `متبقي لك ${remainingTotal} محاولات مجانية إجماليًا (${FEATURES.length} ميزات × محاولة واحدة).`;
      };

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

      document.querySelectorAll('[data-feature]').forEach(card => {
        updateCardState(card);
        const feature = card.dataset.feature;
        const button = card.querySelector('[data-open]');
        if (!button) return;
        button.addEventListener('click', () => {
          if (getState().paid || remainingTries(feature) > 0) {
            openFeaturePage(feature);
          } else {
            scrollToSection('payment');
          }
        });
      });

      document.querySelectorAll('[data-plan]').forEach(button => {
        button.addEventListener('click', () => {
          const destination = button.dataset.plan === 'premium' ? 'payment' : 'features';
          scrollToSection(destination);
        });
      });

      // Payment form
      const paymentForm = document.querySelector('[data-payment-form]');
      const paymentStatus = document.querySelector('.payment__status');

      const validCardNumber = (v) => v.replace(/\s+/g, '').length >= 16;
      const validExpiry = (v) => /^\d{2}\/\d{2}$/.test(v.trim());
      const validCvv = (v) => /^\d{3,4}$/.test(v.trim());

      if (paymentForm && paymentStatus) {
        paymentForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const fd = new FormData(paymentForm);
          const holder = String(fd.get('holder') || '').trim();
          const card = String(fd.get('card') || '').trim();
          const expiry = String(fd.get('expiry') || '').trim();
          const cvv = String(fd.get('cvv') || '').trim();

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
          document.querySelectorAll('[data-feature]').forEach(updateCardState);
          updateAccountPanel();
          paymentForm.reset();
        });
      }

      const resetUsageButton = document.querySelector('[data-reset-usage]');
      if (resetUsageButton) {
        resetUsageButton.addEventListener('click', () => {
          localStorage.removeItem(STORAGE_KEY);
          document.querySelectorAll('[data-feature]').forEach(updateCardState);
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
    </script>
  </body>
</html>
