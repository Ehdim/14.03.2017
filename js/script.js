var img = new Array(4);
img[0]= new Image();
img[0].src="img/6.jpg";
img[1]= new Image();
img[1].src="img/7.jpg";
img[2]= new Image();
img[2].src="img/8.jpg";
img[3]= new Image();
img[3].src="img/9.jpg";
img[4]= new Image();
img[4].src="img/10.jpg";

var say=0;
function nextpressed(){
    say++;
    if(say>4){
        say=0;
    }
    document.getElementById("slider").src=img[say].src;
}
function previospressed(){
    say--;
    if(say<0){
        say=4;
    }
    document.getElementById("slider").src=img[say].src;
}