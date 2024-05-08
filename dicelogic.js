var randomno1=Math.random();
randomno1=randomno1*6;
var ran1 =Math.floor(randomno1+1)

//seting a random dice value 
var randomdiceimage1="./dice/dice" +ran1 +".png";
document.querySelector("img.img1").setAttribute("src",randomdiceimage1);

var randomno2=Math.random();
randomno2=randomno2*6;
var ran2=Math.floor(randomno2+1)

//seting a random dice value 
var randomdiceimage2="./dice/dice" +ran2 +".png";
document.querySelector("img.img2").setAttribute("src",randomdiceimage2);



if(ran1<ran2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
   
}else if(ran1>ran2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
    
}else{
    document.querySelector("h1").innerHTML="Draw!..";
}

