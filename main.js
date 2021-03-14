$(document).ready(function(){
  mouse();
})


function mouse() {
  var button = $('a.nav-link.my-dropdown-toggle');
  var drop = $('.dropdown-menu');
  var pulsante = $('li.nav-item.dropdown')
  button.mouseenter(function() {
    $(this).siblings(".dropdown-menu").addClass('show').stop(true, true);
  });
  pulsante.mouseleave(function() {
    if (drop.hasClass('show')) {
      drop.removeClass('show');
    }
  });
}
