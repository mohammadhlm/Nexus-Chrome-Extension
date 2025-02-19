document.addEventListener("DOMContentLoaded", async () => {
    try {
        chrome.runtime.sendMessage({ action: "getNexus" }, (response) => {
            if (chrome.runtime.lastError) {
                console.warn("Background script not available yet:", chrome.runtime.lastError.message);
                return;
            }
            if (response && response.iframeUrl) {
                document.getElementById("nexusViewer").src = response.iframeUrl;
            }
        });
    } catch (error) {
        console.error("Error in popup.js:", error);
    }
});
