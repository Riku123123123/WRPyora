// Lisätään klikkikuuntelija jokaiseen boksin otsikkoon
document.querySelectorAll('.box-trigger').forEach(item => {
    item.addEventListener('click', event => {
        const box = item.parentElement;
        const content = box.querySelector('.box-content');
        box.classList.toggle('active');
        content.classList.toggle('active');
    });
});
