// app.js

const appRouterOutlet = document.getElementById('app-router-outlet');
const navUsuarios = document.getElementById('nav-usuarios');

// En un escenario real, los usuarios se cargarían de una API o localStorage
// Por simplicidad, los inicializamos como en el ejemplo anterior
let users = []; 

// Función para renderizar la vista de usuarios en index.html
function renderUsersView() {
    let usersListHtml = '';
    if (users.length === 0) {
        usersListHtml = '<p>No hay usuarios registrados. Agrega uno usando el botón superior derecho.</p>';
    } else {
        usersListHtml = `
            <h3>Lista de Usuarios</h3>
            <ul>
                ${users.map(user => `<li>${user.name} (${user.email})</li>`).join('')}
            </ul>
        `;
    }

    appRouterOutlet.innerHTML = `
        <section class="users-view">
            <h2>Gestión de Usuarios</h2>
            ${usersListHtml}
        </section>
    `;
}

// Escuchar el click en el enlace de Usuarios
navUsuarios.addEventListener('click', (event) => {
    event.preventDefault(); // Evita la recarga si el href es "#"
    renderUsersView();
});

// Al cargar index.html, muestra la vista de usuarios por defecto
document.addEventListener('DOMContentLoaded', () => {
    // Si vienes de add-user.html, podrías usar localStorage para mantener los usuarios
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
    renderUsersView();
});