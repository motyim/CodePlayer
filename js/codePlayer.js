$(function(){
  var pervious_width=6; // default col-md-6

  /* HTML CSS JS RESULT button*/
  $(".toggle" ).click(function(){

    $(this).toggleClass("btn-elegant"); 		// add or remove btn-elegant class to button used
    $(this).toggleClass("btn-default");    // add or remove btn-default class to button for unused
    var className = "." + $(this).text().trim() + "_Container"; //get class name of selected container
    console.log(className);
    $(className).toggle();  //dispaly or none display

    changeDisplay();
  });

  /* RUN button*/
  $("#run").click(function(){
    var html , css ;

    css = "<style>" + $("#cssCode").val() + "</style>";

    html = $("#htmlCode").val();

    //set html content to iframe
    $("iframe").contents().find("html").html(css + html);

    //TODO : this is very danger function modify it for security
    //run js code
    document.getElementById('resultFrame').contentWindow.eval($("#jsCode").val());

  });

  function changeDisplay(){
    var perCol , curCol , current_width ;

    current_width = 12 / $(".center").find(".btn-elegant").length;
    console.log(current_width);
    perCol = "col-md-" + pervious_width;
    curCol = "col-md-" + current_width ;

    pervious_width = current_width;

    $(".text") 				//all text class
    .addClass(curCol)		//set new width
    .removeClass(perCol);	//remove old width
  }

});
