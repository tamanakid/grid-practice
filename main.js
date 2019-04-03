function toggleBgClass() {
  if (this.hasClass("bg-green")) {
    this.removeClass("bg-green");
    this.addClass("bg-blue");
  } else {
    this.removeClass("bg-blue");
    this.addClass("bg-green");
  }
}

function onDocumentReady() {
  var contentLayout = $(".content-layout");

  contentLayout.click(toggleBgClass.bind(contentLayout));
}

$("document").ready(onDocumentReady);