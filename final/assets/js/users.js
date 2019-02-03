
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

//Add new User
function addUser(username, fullname, experience, location, specialty, email, telephone, business){
    var u = new User(username, fullname, experience, location, specialty, email, telephone, business);
    users.push(u);
        saveUser();
}

//Get user
function getUser(index) {
    return users[index];
}

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
        locationId += location;
        specialtyId += specialty;
        experienceId += experience;
        telephoneId += telephone;
        businessId += business;
        fullnameId += fullname;

    }
    $('#business').html(business);
    $('#fullname').html(fullname);
    $('#location').html(location);
    $('#experience').html(experience);
    $('#specialty').html(specialty);
    $('#telephone').html(telephone);
    $('#email').html(email);

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
    var specialty = $('#p-speciality').val;
    var username = $('#p-username').val;
    var telephone = $('#p-telephone').val;
    var business = $('#p-business').val;
    var location = $('#p-location').val;

    addUser(username,fullname,experience,location,specialty,email,telephone,business);
});

getUsers();
