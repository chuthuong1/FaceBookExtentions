document.getElementById('start').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          let spans = document.querySelectorAll('span');
          spans.forEach(span => {
            if (span.innerText === 'Invite') {
              span.click();
            }
          });
        }
      });
    });
  });
  