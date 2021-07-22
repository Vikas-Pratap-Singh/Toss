var a=Math.random();
var b=Math.floor(a*6)+1;
var x="images/dice";
x=x+b+".png";
document.querySelector('.img1').setAttribute("src",x);
var c=Math.random();
var d=Math.floor(c*6)+1;
var y="images/dice";
y=y+d+".png";
document.querySelector('.img2').setAttribute("src",y);
if(x>y)
{
  document.querySelector('h1').textContent="🚩player 1 won";
}
else if(x<y)
{
  document.querySelector('h1').textContent="player 2 won🚩";
}
else
{
  document.querySelector('h1').textContent="Match Tie !! TRY AGAIN ";
}
