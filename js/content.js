// Auto Invite pages
let spans  = document.querySelectorAll('span');

// Check span content
spans.forEach(span => {
    if (span.innerText == 'Invite') {
        span.click();
        console.log('Invite clicked');
    }
});