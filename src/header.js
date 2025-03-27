const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function (e) {
    e.preventDefault();

    if (header.dataset.open) {
        delete header.dataset.open;
        return;
    }

    header.dataset.open = 'true';
});
