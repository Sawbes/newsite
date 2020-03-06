//при нажатии на ссылку
$(".navbar-collapse a").click(function() {
    //если она не имеет класс dropdown-toggle
    if (!$(this).hasClass("dropdown-toggle")) {
      //то закрыть меню
      $(".navbar-collapse").collapse('hide');
    }
  });