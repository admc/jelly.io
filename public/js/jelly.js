jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
  this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
  return this;
}

if (typeof jelly == "undefined") { var jelly = {}; }

jelly.openBox = function(titleString, content) {
  $(".jellyBox").remove();
  $.blockUI();
  
  var box = $("<div>");
  box.addClass("jellyBox");
  box.css({ "position": "absolute"
      , "border": "1px solid white"
      , "width":"600px"
      , "height": "400px"
      , "background-color":"black"
      , "overflow":"hidden"
      , "padding":"40px"
      , "z-Index": "3000" });
  
  var header = $("<div>");
  header.css({ "width":"100%"
      , "height": "30px"
      , "background-color": "lightblue"
      , "position": "absolute"
      , "left": "0px"
      , "top": "0px"
      , "border-bottom": "1px solid white"})
        
  var close = $("<div>");
  close.css({"float": "right"
        , "color": "black"
        , "padding-right": "15px"
        , "font-size": "21px"
        , "cursor": "pointer"
        , "font-weight": "bold"});
        
  close.html("[X]")
  header.append(close);
  close.click(function(e){
    $(e.target).parent().parent().remove();
    $.unblockUI();
  })
  
  var titleDiv = $("<div>");
  titleDiv.css({"float":"left"
        , "font-size": "21px"
        , "padding-left": "10px"});
  titleDiv.html(titleString);
  header.append(titleDiv);
  
  var contentDiv = $("<div>");
  contentDiv.html(content);
  box.append(header);
  box.append(contentDiv);
  
  $(document.body).append(box);
  box.center();
  return box;
}

jelly.showSlides = function() {
  var embedCode = '<center><iframe src="http://www.slideshare.net/slideshow/embed_code/7806634?rel=0" width="510" height="426" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></center>';
  return jelly.openBox("JSConf 2011 Presentation Slides", embedCode)
}

jelly.showDemoVideo = function() {
  var embedCode = '<center><iframe src="http://player.vimeo.com/video/24197034" width="600" height="425" frameborder="0"></iframe></center>';
  return jelly.openBox("Jellyfish Environments Video", embedCode)
}

jelly.showBrowserDance = function() {
  var embedCode = '<center><iframe src="http://player.vimeo.com/video/24197072" width="600" height="425" frameborder="0"></iframe></center>';
  return jelly.openBox("Jellyfish Browser Dance Video", embedCode)
}