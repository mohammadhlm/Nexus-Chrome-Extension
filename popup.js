document.addEventListener("DOMContentLoaded", () => {
  // دریافت عناصر رابط کاربری در فایل popup.html (در صورت وجود)
  const statusEl = document.getElementById("status");
  const pingButton = document.getElementById("pingButton");

  // تابع کمکی برای به‌روزرسانی وضعیت در رابط کاربری یا کنسول
  function updateStatus(message) {
    if (statusEl) {
      statusEl.textContent = message;
    } else {
      console.log(message);
    }
  }

  // تابع ارسال درخواست به پس‌زمینه جهت اجرای پینگ به سایت
  function sendPing() {
    updateStatus("در حال پینگ کردن...");
    chrome.runtime.sendMessage({ action: "pingNow" }, (response) => {
      if (chrome.runtime.lastError) {
        updateStatus("خطا: " + chrome.runtime.lastError.message);
      } else if (response && response.status) {
        updateStatus(response.status);
      } else {
        updateStatus("هیچ پاسخی دریافت نشد.");
      }
    });
  }

  // در صورت وجود دکمه، رویداد کلیک رو به تابع ارسال پینگ متصل می‌کنیم
  if (pingButton) {
    pingButton.addEventListener("click", sendPing);
  }

  // نمایش پیام اولیه در رابط کاربری
  updateStatus("اکستنشن بارگذاری شد. جهت پینگ کردن روی 'Ping Now' کلیک کنید.");
});
