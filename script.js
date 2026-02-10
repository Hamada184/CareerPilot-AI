const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const copyButton = document.querySelector("[data-copy]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const prompt = document.querySelector(".prompt pre");
    if (!prompt) {
      return;
    }

    try {
      await navigator.clipboard.writeText(prompt.innerText.trim());
      copyButton.textContent = "تم النسخ ✅";
      setTimeout(() => {
        copyButton.textContent = "نسخ البرومبت";
      }, 2000);
    } catch (error) {
      copyButton.textContent = "تعذر النسخ";
      setTimeout(() => {
        copyButton.textContent = "نسخ البرومبت";
      }, 2000);
    }
  });
}
