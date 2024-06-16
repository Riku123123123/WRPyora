document.addEventListener('DOMContentLoaded', function() {
    let navigationHistory = [];

    function navigateTo(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            window.scrollTo(0, 0); // Siirrä näkymä sivun alkuun
        }
    
        if (navigationHistory.length === 0 || navigationHistory[navigationHistory.length - 1] !== sectionId) {
            navigationHistory.push(sectionId); // Lisää osio historiaan
        }
    }
    

    function navigateBack() {
        if (navigationHistory.length > 1) {
            navigationHistory.pop();
            const previousSection = navigationHistory[navigationHistory.length - 1];
            navigateTo(previousSection);
        }
    }

    window.navigateTo = navigateTo;
    window.navigateBack = navigateBack;

    navigateTo('home');
});

function navigateToPage(url) {
    window.location.href = url;
}
