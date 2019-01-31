
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

            function saveData() {

        let info = {
            first: localStorage.setItem('first_name', document.getElementById('firstName').value),
            last: localStorage.setItem('last_name', document.getElementById('lastName').value),
            email: localStorage.setItem('email', document.getElementById('email').value),
            business: localStorage.setItem('business_name', document.getElementById('nameOfBusiness').value),
            location: localStorage.setItem('location', document.getElementById('location').value),
            telephone: localStorage.setItem('telephone', document.getElementById('telephone').value),
            specialty: localStorage.setItem('specialty', document.getElementById('specialty').value),
            experience: localStorage.setItem('experience', document.getElementById('experience').value),
            image: localStorage.setItem('image', document.getElementById('image').value),

        };



        let savedInfo = localStorage.setItem('info', JSON.stringify(info));
        savedInfo.append(info);
        savedInfo.pushStack(info)
    }

    function transition(){
     setTimeout(function() {location.assign('profile.html');}, 5000);


    }

      function retrieveData() {

      let fullname = [localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')];
      document.getElementById('fullname').innerHTML = fullname.toString();

      document.getElementById('email').innerHTML = localStorage.getItem('email');
      document.getElementById('bname').innerHTML = localStorage.getItem('business_name');
      document.getElementById('location').innerHTML = localStorage.getItem('location');

      document.getElementById('specialty').innerHTML = localStorage.getItem('specialty');
      document.getElementById('experience').innerHTML = localStorage.getItem('experience').concat(' Years');
      document.getElementById('telephone').innerHTML = localStorage.getItem('telephone');

  }

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
