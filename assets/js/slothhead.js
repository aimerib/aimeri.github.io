$(window).mousemove(getMousePosition);
var mouseX;
var mouseY;
var imageTop;
var imageBottom;
var imageLeft;
var imageRight;

$(window).load(init);

function init(){
    mouseX = 0;
    mouseY = 0;
    imageTop = $("#sloth").offset().top;
    imageBottom = imageTop + $("#sloth").height();
    imageLeft = $("#sloth").offset().left;
    imageRight = imageLeft + $("#sloth").width();
}

/* javascript */

function getMousePosition(event){

    mouseX = event.pageX;

    mouseY = event.pageY;





    if(mouseX >imageLeft && mouseX <imageRight && mouseY <imageTop){

      $("#sloth").addClass("sc-top").removeClass("sc-normal sc-rightbottom sc-right sc-bottom sc-righttop sc-lefttop sc-leftbottom sc-left");

    } else if(mouseX <imageLeft && mouseY <imageTop){

      $("#sloth").addClass("sc-lefttop").removeClass("sc-normal sc-rightbottom sc-right sc-bottom sc-righttop sc-top sc-leftbottom sc-left");


    } else if(mouseX <imageLeft && mouseY >imageTop && mouseY <imageBottom){

      $("#sloth").addClass("sc-left").removeClass("sc-normal sc-rightbottom sc-right sc-bottom sc-righttop sc-lefttop sc-leftbottom sc-top");

    } else if(mouseX <imageLeft && mouseY >imageBottom){

      $("#sloth").addClass("sc-leftbottom").removeClass("sc-normal sc-rightbottom sc-right sc-bottom sc-righttop sc-lefttop sc-top sc-left");

    } else if(mouseX >imageLeft && mouseX <imageRight && mouseY >imageBottom){

      $("#sloth").addClass("sc-bottom").removeClass("sc-normal sc-rightbottom sc-right sc-top sc-righttop sc-lefttop sc-leftbottom sc-left");

    } else if(mouseX >imageRight && mouseY >imageBottom){

      $("#sloth").addClass("sc-rightbottom").removeClass("sc-normal sc-top sc-right sc-bottom sc-righttop sc-lefttop sc-leftbottom sc-left");

    } else if(mouseX >imageRight && mouseY >imageTop && mouseY <imageBottom){

      $("#sloth").addClass("sc-right").removeClass("sc-normal sc-rightbottom sc-top sc-bottom sc-righttop sc-lefttop sc-leftbottom sc-left");

    } else if(mouseX >imageRight && mouseY <imageTop){

      $("#sloth").addClass("sc-righttop").removeClass("sc-normal sc-rightbottom sc-top sc-bottom sc-right sc-lefttop sc-leftbottom sc-left");

    } else{

      $("#sloth").addClass("sc-normal").removeClass("sc-top sc-rightbottom sc-right sc-bottom sc-righttop sc-lefttop sc-leftbottom sc-left");
    }

}
