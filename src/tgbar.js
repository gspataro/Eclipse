const tgbar = document.getElementsByClassName('tgbar');

for (let element of tgbar) {
    initTgbar(element);

    window.addEventListener('resize', function () {
        initTgbar(element);
    });
}

function initTgbar(element) {
    const content = element.querySelector('.content');
    const width = content.getBoundingClientRect().width;
    let totalWidth = width * element.getElementsByClassName('content').length;
    let i = 0;

    while(totalWidth < window.innerWidth + width) {
        element.appendChild(content.cloneNode(true));
        totalWidth += width;
        i++;

        if (i > 50) {
            return;
        }
    }
}
