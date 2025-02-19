let nodeIsRunning = false;

// Function to start the node
function startNode() {
    if (nodeIsRunning) return;

    // Example logic to start the node
    console.log("Starting Nexus Node...");
    nodeIsRunning = true;

    // Code to start your actual Nexus node goes here
    // For instance, make an API call or initialize a web worker for the node.
}

// Function to stop the node (optional)
function stopNode() {
    if (!nodeIsRunning) return;

    // Example logic to stop the node
    console.log("Stopping Nexus Node...");
    nodeIsRunning = false;

    // Code to stop the Nexus node goes here
}

chrome.runtime.onInstalled.addListener(() => {
    // Start node on install
    startNode();
});

chrome.action.onClicked.addListener(() => {
    // Toggle node state when the extension icon is clicked
    if (nodeIsRunning) {
        stopNode();
    } else {
        startNode();
    }
});
