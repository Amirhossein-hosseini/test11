
$(document).ready(function(){
!function(){"use strict";function t(){e.each(function(){var t=$(this).offset().top,a=$(window).scrollTop(),e=$(this).data("easy-reveal");e||(e="fade-in-up"),(t<a+o||a+i===n)&&$(this).addClass(e)})}var a=30,e=$("[data-easy-reveal]"),i=$(window).height(),o=30*i/100,n=$(document).height();$(document).ready(t),$(window).scroll(t)}
	();
	
	});
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();