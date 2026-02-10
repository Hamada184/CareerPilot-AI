const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const planButtons = document.querySelectorAll("[data-plan]");
const payButton = document.querySelector("[data-pay]");
const paymentStatus = document.querySelector(".payment__status");
const featureCards = document.querySelectorAll("[data-feature]");

const USAGE_LIMIT = 1;
const storageKey = "careerpilot-usage";

const getUsage = () => {
  const stored = localStorage.getItem(storageKey);
  return stored ? JSON.parse(stored) : {};
};

const saveUsage = (usage) => {
  localStorage.setItem(storageKey, JSON.stringify(usage));
};

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });
}

const updateUsageLabel = (card, remaining) => {
  const label = card.querySelector(".usage");
  if (label) {
    label.textContent =
      remaining > 0
        ? `متبقي لك ${remaining} محاولة مجانية.`
        : "انتهت المحاولة المجانية، أكمل الدفع للمتابعة.";
  }
};

const handleFeatureClick = (card) => {
  const feature = card.dataset.feature;
  const usage = getUsage();
  const current = usage[feature] ?? 0;

  if (current < USAGE_LIMIT) {
    usage[feature] = current + 1;
    saveUsage(usage);
    updateUsageLabel(card, USAGE_LIMIT - usage[feature]);
    card.classList.add("is-active");
    setTimeout(() => card.classList.remove("is-active"), 800);
  } else {
    document.getElementById("payment")?.scrollIntoView({ behavior: "smooth" });
  }
};

featureCards.forEach((card) => {
  const usage = getUsage();
  const remaining = USAGE_LIMIT - (usage[card.dataset.feature] ?? 0);
  updateUsageLabel(card, Math.max(remaining, 0));
  const button = card.querySelector("button");
  if (button) {
    button.addEventListener("click", () => handleFeatureClick(card));
  }
});

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    if (plan === "free") {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("payment")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

if (payButton && paymentStatus) {
  payButton.addEventListener("click", () => {
    paymentStatus.textContent = "تم تفعيل الاشتراك بنجاح ✅";
  });
}
