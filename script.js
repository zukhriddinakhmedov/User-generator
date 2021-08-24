const btn = document.getElementById("mainBtn")

const displayUsers = function (users) {
    const row = document.querySelector("table")
    row.innerHTML = ""
    users.forEach((user, index) => {
        row.innerHTML += `
                <table class="table">
                <thead class="thead-dark">
                    <tr>
      <th scope="col">Numeration</th>
      <th scope="col">Gender</th>
      <th scope="col">Full name</th>
      <th scope="col">Location</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>  
        <tr>
          <th scope="row">${index}</th>
          <td>${user.gender}</td>
          <td>${user.name.first + " " + user.name.last}</td>
          <td>${user.location.city}</td>
          <td>${user.email}</td>
          <td>${user.dob.age}</td>
        </tr>
        </table>
                 `
    })
}
function filteredAge(usersArr) {
    const filterAge = usersArr.filter(user => user.dob.age > 18)
    displayUsers(filterAge)
    console.log(filterAge)
}



const getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(users => {
            console.log(users)

            displayUsers(users.results)

            btn.addEventListener("click", (e) => {
                e.preventDefault()
                filteredAge(users.results)
            })
        })
}
window.onload = () => {
    getUsers()
}