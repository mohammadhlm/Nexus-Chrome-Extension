// URL اصلی برای پینگ کردن
const PING_URL = "https://app.nexus.xyz/";

// تابعی که یک درخواست GET به سایت ارسال می‌کند
function pingNode() {
    fetch(PING_URL, { method: 'GET', mode: 'no-cors' })
        .then(response => {
            console.log("Ping successful at", new Date().toLocaleTimeString());
        })
        .catch(err => {
            console.error("Ping failed:", err);
        });
}

// زمان‌بندی: هر 5 دقیقه (300000 میلی‌ثانیه)
const INTERVAL = 300000;

// اجرای اولین پینگ بلافاصله
pingNode();

// تنظیم تکرار پینگ در پس‌زمینه
setInterval(pingNode, INTERVAL);

// Listener برای دریافت پیام‌های احتمالی از بخش‌های دیگر (اختیاری)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "pingNow") {
        pingNode();
        sendResponse({ status: "Pinging now" });
    }
});
