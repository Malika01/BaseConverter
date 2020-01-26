function f(from)
{ window.x=from; }

function t(to)
{ window.y=to; } 

function c()
{   if(window.x==window.y)
      alert("Choose two different base");
    var alpha=window.x;
    var beta=window.y;
    var one=document.getElementById('1').value;
    var two=parseFloat(one,alpha).toString(beta);
    document.getElementById('2').value=two;
}


function r()
{ document.getElementById('1').value=" ";
  document.getElementById('2').value=" ";
  document.getElementById('3').checked=false;
  }