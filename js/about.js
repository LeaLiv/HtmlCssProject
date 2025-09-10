        const readMoreBtn = document.getElementById('read-more-btn');
        const moreText = document.getElementById('more-text');

        readMoreBtn.addEventListener('click', () => {
            if (moreText.style.display === 'none') {
                moreText.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                moreText.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });