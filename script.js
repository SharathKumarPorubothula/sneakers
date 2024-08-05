function menuu(){
    var a=document.getElementById('naulid');
    a.classList.add("active");
}
function closee(){
    var b=document.getElementById('naulid');
    b.classList.remove("active");
}
var i=2;
var m=["1.png","2.png","3.png"]
var k=1;

function front(){
    var c=document.querySelector(".img1");
    c.src=m[k];
    k++;
    if(k>2){
        k=0;
    }
    if(i>3){
        i=1;
    }
    if(i==1){
        var h=document.querySelector('.h11')
h.innerHTML="Air Mag"
        var j=document.querySelector('.h12')
        j.innerHTML="3000 X1 Future"
    }
    if(i==2){
        var h=document.querySelector('.h11')
h.innerHTML="Hyperudunk X"
        var j=document.querySelector('.h12')
        j.innerHTML="TB Urban Red"
    }
    if(i==3){
        var h=document.querySelector('.h11')
h.innerHTML="Yeezy Boost"
        var j=document.querySelector('.h12')
        j.innerHTML="350 V2 Clay"
    }
    i++;
}


function back(){
    k--;
    i--;
    if(k==-1){
        k=2;
    }
    var c=document.querySelector(".img1");
    c.src=m[k];
    if(i==0){
        i=3;
    }
    if(i==1){
        var h=document.querySelector('.h11')
h.innerHTML="Air Mag"
        var j=document.querySelector('.h12')
        j.innerHTML="3000 X1 Future"
    }
    if(i==2){
        var h=document.querySelector('.h11')
h.innerHTML="Hyperudunk X"
        var j=document.querySelector('.h12')
        j.innerHTML="TB Urban Red"
    }
    if(i==3){
        var h=document.querySelector('.h11')
h.innerHTML="Yeezy Boost"
        var j=document.querySelector('.h12')
        j.innerHTML="350 V2 Clay"
    }
}