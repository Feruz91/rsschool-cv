// Эта функция будет запущена, как только весь HTML-документ будет загружен и готов
document.addEventListener('DOMContentLoaded', () => {

    // Цель: найти все навигационные ссылки и сделать их плавную прокрутку.

    // 1. Выбрать все навигационные ссылки, указывающие на идентификатор на странице.
    const navLinks = document.querySelectorAll('.navigation a[href^="#"]');

    // 2. Пройтись по каждой найденной ссылке.
    navLinks.forEach(link => {

        // 3. Для каждой ссылки добавить слушатель события "клик".
        link.addEventListener('click', function(event) {

            // 4. Отменить стандартное поведение браузера (мгновенный прыжок).
            event.preventDefault();

            // 5. Получить ID целевой секции из атрибута href.
            const targetId = this.getAttribute('href');

            // 6. Найти саму секцию на странице по этому ID.
            const targetSection = document.querySelector(targetId);

            // 7. Если секция найдена, плавно прокрутить к ней.
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }); // Конец функции addEventListener
    }); // Конец метода forEach
}); // Конец функции DOMContentLoaded