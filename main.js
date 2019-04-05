function onListenToggleBgClass() {

  function toggleBgClass() {
    this.toggleClass("bg-gray");
    this.toggleClass("bg-blue");
  }

  var contentLayout = $(".main-layout");

  contentLayout.click(toggleBgClass.bind(contentLayout));
}



function onListenButtonMenuMd() {

  function toggleMenu() {
    this.toggleClass("menu-contents-on");
  }

  var buttonMenu = $(".menu-title-button-md");
  var dropdownMenu = $(".menu-contents");

  buttonMenu.click(toggleMenu.bind(dropdownMenu));
}



function onListenToggleMenuLg() {

  function toggleMenu() {
    this.toggleClass("menu-toggle-lg-on");
  }

  var toggleMenuLg = $(".menu-toggle-lg");
  var menu = $(".menu");

  toggleMenuLg.click(toggleMenu.bind(menu));
}



function onDocumentReady() {
  onListenToggleBgClass();
  onListenButtonMenuMd();
  onListenToggleMenuLg();
}



$("document").ready(onDocumentReady);