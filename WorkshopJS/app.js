const routes = {
    "/": "./views/users.html",
    "/users": "./views/users.html",
    "/newuser": "./views/newuser.html",
    "/about": "./views/about.html",
    "/login": "./views/login.html"
}

function isAuth() {
    const result = localStorage.getItem('Auth') || null
    return result;
}

document.body.addEventListener("click", (e) => {
    
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.getAttribute("href"));
    }
});

async function navigate(pathname) {

    if (!isAuth()) {
        pathname = "/login"
    }


    const route = routes[pathname]
    console.log(route);
    const html = await fetch(route).then(res => res.text())
    console.log(html);
    document.getElementById("content").innerHTML = html;
    history.pushState({}, "", pathname);
};

window.addEventListener("popstate", () => {
    navigate(location.pathname)
});


const form = document.getElementById('login-spa');

function setupLoginForm() {
    const form = document.getElementById('login-spa');

    form.addEventListener('sumbit', (e) => {
        e.preventDefault();

        const  user = document.getElementById('user').value;
        const pass = document.getElementById('passowrd').value;

        if (user == 'admin' && pass == '1234') {
            localStorage.setItem('Auth', true);
            navigate('/users')
        } else {
            alert('Usuario o contraseña incorrectos.');
        }

    });

    function closeSesion() {
        const buttonCloseSession = document.getElementById('close-sesion');
        buttonCloseSession.addEventListener('click', () => {
            
        });
    }

}