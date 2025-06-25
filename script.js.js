// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '×';
        }
    });
});

// Language selector functionality
document.querySelectorAll('.lang-btn').forEach(select => {
    select.addEventListener('change', (e) => {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.value = e.target.value;
        });
    });
});