async function loadReviews() {
    clearReviewsSection()

    let loadingSection = document.getElementById('loading');
    let reviews = document.getElementById('reviews');
    let randomNumber = getRandomInt(100);
    let response;
    let comments;

    loadingSection.innerHTML += `
            <div class="loading"></div>
        `;

    try {
        response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}/comments`);
        comments = await response.json();
    } catch (error) {
        showError(reviews);
    }

    loadingSection.innerHTML = ''

    if (response.status >= 400 || comments.length === 0) {
        showError(reviews);

        throw new Error('Что-то пошло не так!');
    }

    comments.forEach(comment => {
        reviews.innerHTML += `
            <div class="reviewItem">
                <strong>${comment.name}</strong>
                <br><br>
                ${comment.body}
            </div>
        `;
    })
}

function getRandomInt(max) {
    let randomNumber = Math.floor(Math.random() * max);

    if (randomNumber === 0) {
        randomNumber = 1
    }

    return randomNumber;
}

function setReviewsButtonOnClickHandler() {
    let getReviewsButton = document.getElementById('getReviewsButton');

    getReviewsButton.addEventListener('click', event => loadReviews());
}

function clearReviewsSection() {
    let reviews = document.getElementById('reviews');

    reviews.innerHTML = ''
}

function showError(reviews) {
    reviews.innerHTML += `
            <div class="reviewItem">
                ⚠ Что-то пошло не так
            </div>
        `;
}
