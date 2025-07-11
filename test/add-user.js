// add-user.js

document.addEventListener('DOMContentLoaded', () => {
    const addUserForm = document.getElementById('add-user-form');
    const cancelAddUserBtn = document.getElementById('cancel-add-user');

    if (addUserForm) {
        addUserForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const userName = document.getElementById('userName').value.trim();
            const userEmail = document.getElementById('userEmail').value.trim();

            if (userName && userEmail) {
                // Obtener usuarios existentes o un array vacío
                let users = JSON.parse(localStorage.getItem('users')) || [];
                users.push({ name: userName, email: userEmail });
                // Guardar los usuarios actualizados en localStorage
                localStorage.setItem('users', JSON.stringify(users));

                alert('Usuario agregado con éxito!');
                window.location.href = 'index.html'; // Redirigir de vuelta a la página principal
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    if (cancelAddUserBtn) {
        cancelAddUserBtn.addEventListener('click', function() {
            window.location.href = 'index.html'; // Redirigir de vuelta sin guardar
        });
    }
});