let nodeIsRunning = false;

// Function to start the node
function startNode() {
    if (nodeIsRunning) return;
    console.log("Starting Nexus Node...");
    nodeIsRunning = true;
    // Code to start your actual Nexus node goes here
}

// Function to stop the node (optional)
function stopNode() {
    if (!nodeIsRunning) return;
    console.log("Stopping Nexus Node...");
    nodeIsRunning = false;
    // Code to stop the Nexus node goes here
}

// Start node on installation of the extension
chrome.runtime.onInstalled.addListener(() => {
    startNode();
});

// Toggle node state when the extension icon is clicked
chrome.action.onClicked.addListener(() => {
    if (nodeIsRunning) {
        stopNode();
    } else {
        startNode();
    }
});

// Listener for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getNexus") {
        // Replace the URL below with the actual URL you want to load in the popup iframe
        sendResponse({ iframeUrl: "https://your-nexus-url.com" });
    }
});
