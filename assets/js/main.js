// let fullname = [localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')];


    let users = [
        {
            first_name: localStorage.setItem('first_name', document.getElementById('first_name').value),
            last_name: localStorage.setItem('last_name', document.getElementById('last_name').value),
            email: localStorage.setItem('email', document.getElementById('email').value),
            location: localStorage.setItem('location', document.getElementById('location').value),
            experience: localStorage.setItem('experience', document.getElementById('experience').value),
            business: localStorage.setItem('business', document.getElementById('business').value),
            specialty: localStorage.setItem('specialty', document.getElementById('specialty').value),
            telephone: localStorage.setItem('telephone', document.getElementById('telephone').value),

        },
    ];

let localUsers = [
    {first_name: 'Last'},
    {last_name: 'First'},
    {email: ' wow'}
];

localStorage.setItem('users', JSON.stringify(users));
console.log(localStorage.getItem('users'));
console.log(localUsers);



function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

// function saveData() {
//
//         let info = {
//             first: localStorage.setItem('first_name', document.getElementById('firstName').value),
//             last: localStorage.setItem('last_name', document.getElementById('lastName').value),
//             email: localStorage.setItem('email', document.getElementById('email').value),
//             business: localStorage.setItem('business_name', document.getElementById('nameOfBusiness').value),
//             location: localStorage.setItem('location', document.getElementById('location').value),
//             telephone: localStorage.setItem('telephone', document.getElementById('telephone').value),
//             specialty: localStorage.setItem('specialty', document.getElementById('specialty').value),
//             experience: localStorage.setItem('experience', document.getElementById('experience').value),
//             image: localStorage.setItem('image', document.getElementById('image').value),
//
//         };
//
//
//
//         let savedInfo = localStorage.setItem('info', JSON.stringify(info));
//         savedInfo.append(info);
//         savedInfo.pushStack(info)
//     }

function transition(){
     setTimeout(function() {location.assign('profile.html');}, 5000);


    }
  //
  //     function retrieveData() {
  //     document.getElementById('fullname').innerHTML = fullname.toString();
  //
  //     document.getElementById('email').innerHTML = localStorage.getItem('email');
  //     document.getElementById('bname').innerHTML = localStorage.getItem('business_name');
  //     document.getElementById('location').innerHTML = localStorage.getItem('location');
  //
  //     document.getElementById('specialty').innerHTML = localStorage.getItem('specialty');
  //     document.getElementById('experience').innerHTML = localStorage.getItem('experience').concat(' Years');
  //     document.getElementById('telephone').innerHTML = localStorage.getItem('telephone');
  //
  // }

  var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {
      e.preventDefault();
      card.classList.add('active');
  });

  closeBtn.forEach(function (element, index) {
     console.log(element);
      element.addEventListener('click',function (e) {
          e.preventDefault();
          card.classList.remove('active');
      });
  });


  function saveUsers() {


      let jsonUsers = JSON.stringify(users);
      localStorage.setItem('users', jsonUsers);
      
  }

  function getUsers(){

      let strUsers = localStorage.getItem('users');
      let storedUsers = JSON.parse(strUsers);

      if(!storedUsers) {
          storedUsers = []
      }

      //console.log(storedUsers);

  }

 // getUsers();


   console.log(JSON.stringify(users))  ;