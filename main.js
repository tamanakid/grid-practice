function onListenToggleBgClass() {

  function toggleBgClass() {
    this.toggleClass("bg-gray");
    this.toggleClass("bg-blue");
  }

  var contentLayout = $(".main-layout");

  contentLayout.click(toggleBgClass.bind(contentLayout));
}



function onListenButtonMenu() {

  function toggleMenu() {
    this.toggleClass("menu-contents-off");
  }

  var buttonMenu = $(".menu-title-button");
  var dropdownMenu = $(".menu-contents");

  buttonMenu.click(toggleMenu.bind(dropdownMenu));
}



function onDocumentReady() {
  onListenToggleBgClass();
  onListenButtonMenu();
}



$("document").ready(onDocumentReady);