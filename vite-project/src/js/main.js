const mobileNavigationBtn = document.getElementById('mobile-nav-btn');
const mobileNavigation = document.getElementById('mobile-nav');

mobileNavigationBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileNavigation.classList.toggle('mobile-nav_active');
    console.log('qweqwe')
}