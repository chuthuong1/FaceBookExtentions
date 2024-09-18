document.getElementById('start').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
       // Click Invite buttons
        function clickInviteButtons() {
          let spans = document.querySelectorAll('span');
          let inviteCount = 0;

          spans.forEach(span => {
            if (span.innerText.trim() === 'Invite') {
              span.click();
              inviteCount++;
            }
          });

          // Show message
          if (inviteCount > 0) {
            alert(`Was click ${inviteCount} button "Invite"`);
          } else {
            alert('not found "Invite".');
          }
        }

        function attemptClick() {
          clickInviteButtons();

          // Scroll and click Invite buttons again
          let scrollInterval = setInterval(() => {
            window.scrollBy(0, 1000);
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
              clearInterval(scrollInterval);
              clickInviteButtons(); // Thực hiện nhấp lại sau khi cuộn xong
            }
          }, 500);
        }

        attemptClick();
      }
    });
  });
});
