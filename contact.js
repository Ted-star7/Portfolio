  // function sendMail() {
  //   var params ={
  //      from_name : document.getElementById("Name").value,
  //      email_id : document.getElementById("email_id").value,
  //      message : document.getElementById("message").value,
  //   }
  //   emailjs.send("service_rxb9t08", "template_jvth4jw" params).then(function (res)){
  //     alert("Suceess" + res.status);
  //   }
  // }


 window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                
               
                emailjs.sendForm('service_rxb9t08', 'template_jvth4jw', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
          }