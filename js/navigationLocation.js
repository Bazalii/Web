function handleLocationChange(location, background, color) {
    let menu = document.querySelectorAll('body header nav a');

    switch (location) {
        case '/Web/index.html':
            menu[0].style.background = background;
            menu[0].style.color = color;
            break;
        case '/Web/Achievements.html':
            menu[1].style.background = background;
            menu[1].style.color = color;
            break;
        case '/Web/Projects.html':
            menu[2].style.background = background;
            menu[2].style.color = color;
            break;
        case '/Web/WorkExperience.html':
            menu[3].style.background = background;
            menu[3].style.color = color;
            break;
    }
}
