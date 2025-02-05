// content.js

// Function to change the theme based on the subscription level
function changeTheme(subscriptionLevel) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    
    if (subscriptionLevel === 'free') {
        link.href = chrome.runtime.getURL('styles/theme.css'); // Free theme
    } else if (subscriptionLevel === 'pro') {
        link.href = 'https://example.com/pro-theme.css'; // Pro theme
    } else if (subscriptionLevel === 'elite') {
        link.href = 'https://example.com/elite-theme.css'; // Elite theme
    }
    
    document.head.appendChild(link);
}

// Listen for a message from popup or background to check GamePass
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "applyTheme") {
        changeTheme(message.subscriptionLevel);
    }
});
