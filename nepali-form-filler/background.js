// background.js

// Called when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  // Create a context menu item
  chrome.contextMenus.create({
    id: "fillNepaliFormContext", // Unique ID for this menu item
    title: "Fill with Nepali Data",
    contexts: ["editable"] // Show this menu item when right-clicking an editable element (input, textarea)
  });
});

// Listener for when the context menu item is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
  // Check if the clicked menu item is ours
  if (info.menuItemId === "fillNepaliFormContext") {
    // Check if the tab ID is available
    if (tab && tab.id) {
      // Execute the content.js script in the current tab
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      }, () => {
        // After content.js is (re)injected, send a message to it
        // asking it to execute the form filling function.
        chrome.tabs.sendMessage(tab.id, { action: 'fillForm' }, (response) => {
          if (chrome.runtime.lastError) {
            console.error("Error sending message to content script:", chrome.runtime.lastError.message);
          } else {
            console.log("Message sent to content script:", response);
          }
        });
      });
    }
  }
});