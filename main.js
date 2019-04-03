function onListenToggleBgClass() {

  function toggleBgClass() {
    this.toggleClass("bg-green");
    this.toggleClass("bg-blue");
  }

  var contentLayout = $(".content-layout");

  contentLayout.click(toggleBgClass.bind(contentLayout));
}



function onListenButtonMenu() {

  function toggleMenu() {
    this.toggleClass("menu-dropdown-off");
  }

  var buttonMenu = $(".menu-button");
  var dropdownMenu = $(".menu-dropdown");

  buttonMenu.click(toggleMenu.bind(dropdownMenu));
}



function onDocumentReady() {
  onListenToggleBgClass();
  onListenButtonMenu();
}



$("document").ready(onDocumentReady);