// popup/popup.js

document.addEventListener('DOMContentLoaded', function() {
  const fillButton = document.getElementById('fillForm');
  const fillAllCheckbox = document.getElementById('fillAll'); // Get the checkbox

  if (fillButton) {
    fillButton.addEventListener('click', () => {
      // Get the active tab in the current window
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].id) {
          const tabId = tabs[0].id;

          // You can retrieve the checkbox state here and pass it to content.js if needed
          const shouldFillAll = fillAllCheckbox ? fillAllCheckbox.checked : true; // Default to true if checkbox not found

          // First, ensure content.js is injected into the current tab.
          // This is important for pages loaded before the extension was installed/reloaded.
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js'] // Inject the entire content.js file
          }, () => {
            // After content.js is injected, send a message to it
            // The content.js script has a listener for this 'fillForm' action.
            chrome.tabs.sendMessage(tabId, { action: 'fillForm', options: { fillAll: shouldFillAll } }, (response) => {
              if (chrome.runtime.lastError) {
                console.error("Error sending message to content script:", chrome.runtime.lastError.message);
              } else {
                console.log("Response from content script:", response);
              }
              window.close(); // Close the popup after action
            });
          });
        } else {
          console.error("No active tab found to send message to.");
        }
      });
    });
  } else {
    console.error("Button with ID 'fillForm' not found in popup.html.");
  }

  // You might want to save/load the checkbox state using chrome.storage if you want it to persist
  if (fillAllCheckbox) {
      // Example: Load saved state
      chrome.storage.sync.get('fillAllChecked', (data) => {
          fillAllCheckbox.checked = data.fillAllChecked !== undefined ? data.fillAllChecked : true;
      });
      // Example: Save state when changed
      fillAllCheckbox.addEventListener('change', () => {
          chrome.storage.sync.set({ fillAllChecked: fillAllCheckbox.checked });
      });
  }
});