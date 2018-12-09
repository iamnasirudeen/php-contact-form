//just trying to let the form uploader look simple
$('#contactForm').submit((event) => {
  event.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var message = $('#message').val();
  let messageFiled = document.querySelector('.messagehere');
  
  $.ajax({
  url: "contact-form.php",
  method: "POST",
  data: {name, email, phone, message},//the data u see in this object are the variable i created above
  }).done((data){
    console.log(data);
    //this resets the form after it has been submitted
    $('#contactForm')[0].reset();
    //message field has been declared in the homepage
    messageField.innerHTML= "Your Message has been sen will get back to you soon";
  }).fail((err) => {
    console.log(err);
    messageFiled.innerHTML= "An Error Occured";
  })
});


//i hope this works....note: save as .js and include the path in your main page
