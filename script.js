// Adding an event listener to the 'learnMore' button
document.getElementById('learnMore').addEventListener('click', function() {
    window.location.href = "#about"; // Scroll to 'about' section
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    alert('تم إرسال رسالتك بنجاح!');
    // You can replace this with actual form submission logic like AJAX or API calls
});
