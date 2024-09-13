document.getElementById('btnHome').addEventListener('click', function () {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnAbout').addEventListener('click', function () {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnProjects').addEventListener('click', function () {
    document.getElementById('projects1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnContact').addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    document.getElementById('profilePhoto').src = 'assets/foto-perfil-dark.png'
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    document.getElementById('profilePhoto').src = 'assets/foto-perfil-light.png'
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})