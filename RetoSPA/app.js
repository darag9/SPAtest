let userRole = true;

const routes = {
    "/": "./index.html",
    "/home": "./views/home.html",
    "/course": "./views/course.html",
    "/users": "./views/users.html",
    "/payment": "./views/payment.html",
    "/report": "./views/report.html",
    "/settings": "./views/settings.html",
    "/addStudent": "./views/addStudent.html"
};

//navigation section
document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

async function navigate(pathname) {
  const route = routes[pathname];
  const html = await fetch(route).then((res) => res.text());
  document.getElementById("content").innerHTML = html;
  history.pushState({}, "", pathname);
}

window.addEventListener("popstate", () =>
  navigate(location.pathname)
);


//CRUD section
function addStudentForm() {
  if (userRole) {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');
    const enrollInput = document.getElementById('enrollInput');
    const dateInput = document.getElementById('dateInput');

    //hacer funcionalidades

  }else {
    alert('Youre not allowed to add students.');
    navigate(location.pathname);
  }


}

function showStudents() {

}

function deleteStudents() {
  if(userRole) {

    //hacer funcionalidades


  }else {
    alert('Youre not allowed to delete the students info.');
  }
}

function editStudents() {
  if (userRole) {

    //hacer funcionalidades


  }else {
    alert('Youre not allowed to edit the students info.');
  }
}


