document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainMenuLinks = document.querySelectorAll('.main-menu a');
    const submenus = document.querySelectorAll('.submenu');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    mainMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const submenuId = link.dataset.submenu + '-submenu';

            submenus.forEach(submenu => {
                if (submenu.id === submenuId) {
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                } else {
                    submenu.style.display = 'none';
                }
            });
        });
    });
});
