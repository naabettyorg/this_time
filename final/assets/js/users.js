// var todos = [];
// var users = [];
//
// function Todo(name){
//     this.name = name;
//     this.completed = false;
// }
// function User(username, fullname, experience, location, specialty, email, telephone, business) {
//     this.fullname = fullname;
//     this.experience = experience;
//     this.location = location;
//     this.specialty = specialty;
//     this.email = email;
//     this.telephone = telephone;
//     this.business = business;
// }
//
// //Add new Todo
// function addNewTodoWithName(name) {
//     var t = new Todo(name);
//     todos.push(t);
//     saveUser();
// }
//
// function addUser(username, fullname, experience, location, specialty, email, telephone, business){
//     var u = new User(username, fullname, experience, location, specialty, email, telephone, business);
//     users.push(u);
// }
//
//
// // Get todo
// function getTodoAtIndex(index) {
//     return todos[index];
// }
//
// function getUser(index) {
//     return users[index];
// }
//
// function removeUser(index) {
//     users.splice(index,1);
//     saveUser();
// }
//
// // Remove todo
// function removeTodoAtIndex(index) {
//     todos.splice(index, 1)
// }
//
// // List todos
// function listTodos() {
//     var html = '';
//     for (let i in todos) {
//         var todo = todo[i];
//         var name = todo.name;
//         var completed = todo.completed;
//         html += '<li>' + name + '<span>' + completed + '</span></li>';
//
//     }
//     $('#list-todos').html(html);
// }
//
// function listUsers() {
//     var emailID = '';
//     var locationId = '';
//     var specialtyId = '';
//     var experienceId = '';
//     var telephoneId = '';
//     var businessId = '';
//     var fullnameId = '';
//
//     for(let i in users){
//         var user = users[i];
//         var email = user.email;
//         var location = user.location;
//         var specialty = user.specialty;
//         var telephone = user.telephone;
//         var business = user.business;
//         var experience = user.experience;
//         var fullname = user.fullname;
//         emailID += email;
//         locationId += location;
//         specialtyId += specialty;
//         experienceId += experience;
//         telephoneId += telephone;
//         businessId += business;
//         fullnameId += fullname;
//
//     }
//     $('#business').html(business);
//     $('#fullname').html(fullname);
//     $('#location').html(location);
//     $('#experience').html(experience);
//     $('#specialty').html(specialty);
//     $('#telephone').html(telephone);
//     $('#email').html(email);
//
// }
//
// // Save to localstorage
// function saveUser() {
//     let str = JSON.stringify(users);
//     localStorage.setItem('users', str);
// }
//
// // get from local storage
//
// function getUsers() {
//     var str = localStorage.getItem('users');
//     users = JSON.parse(str);
//     if (!users) {
//         users = [];
//     }
// }
//
// $('#myform').submit(event => {
//     event.preventDefault();
//
//     var fullname = $('#p-fullname').val;
//     var email = $('#p-email').val;
//     var experience = $('#p-experience').val;
//     var specialty = $('#p-speciality').val;
//     var username = $('#p-username').val;
//     var telephone = $('#p-telephone').val;
//     var business = $('#p-business').val;
//     var location = $('#p-location').val;
//
//     addUser(username,fullname,experience,location,specialty,email,telephone,business);
// });
//
// getUsers();



var users = [];

//Create User
function User(username, fullname, experience, location, specialty, email, telephone, business) {
    this.fullname = fullname;
    this.experience = experience;
    this.location = location;
    this.specialty = specialty;
    this.email = email;
    this.telephone = telephone;
    this.business = business;
}

// Verified
//Add new User
function addUser(username, fullname, experience, location, specialty, email, telephone, business){
    var u = new User(username, fullname, experience, location, specialty, email, telephone, business);
    users.push(u);
    var store = localStorage.setItem('users', JSON.stringify(u));
    saveUser();
}

// Verified
//Get user
function getUser(index) {
    return users[index];
}

// Verified
// Delete User
function removeUser(index) {
    users.splice(index,1);
    saveUser();
}



// List all users
function listUsers() {
    var emailID = '';
    var locationId = '';
    var specialtyId = '';
    var experienceId = '';
    var telephoneId = '';
    var businessId = '';
    var fullnameId = '';

    for(let i in users){
        var user = users[i];
        var email = user.email;
        var location = user.location;
        var specialty = user.specialty;
        var telephone = user.telephone;
        var business = user.business;
        var experience = user.experience;
        var fullname = user.fullname;
        emailID += email;
        locationId += '<span>' + location + '</span>';
        specialtyId += '<span>' +  specialty + '</span>';
        experienceId += experience;
        telephoneId += telephone;
        businessId += business;
        fullnameId += fullname;

        $('#p-business').html(business);
        $('#p-fullname').html(fullname);
        $('#p-location').html(location);
        $('#p-experience').html(experience);
        $('#p-specialty').html(specialty);
        $('#p-telephone').html(telephone);
        $('#p-email').html(email);
    }

    console.log( JSON.stringify(users));


}

// Save to localstorage
function saveUser() {
    let str = JSON.stringify(users);
    localStorage.setItem('users', str);

}

// get from local storage

function getUsers() {
    var str = localStorage.getItem('users');
    users = JSON.parse(str);
    if (!users) {
        users = [];
    }
}

$('#myform').submit(event => {
    event.preventDefault();

    var fullname = $('#p-fullname').val;
    var email = $('#p-email').val;
    var experience = $('#p-experience').val;
    var specialty = $('#p-specialty').val;
    var username = $('#p-username').val;
    var telephone = $('#p-telephone').val;
    var business = $('#p-business').val;
    var location = $('#p-location').val;

    addUser(username,fullname,experience,location,specialty,email,telephone,business);
});

getUsers();
