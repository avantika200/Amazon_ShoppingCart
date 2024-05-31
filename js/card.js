function addqty()
{
   // window.alert("hello"); 
   var ch=document.getElementById('ch').value;
   //window.alert(ch);
   ch=parseInt(ch);
   if (ch)
   {
    var amount=document.getElementById('amount').innerHTML;
    //window.alert(amount);
    var tamount=ch*amount;
   // window.alert(tamount);
    document.getElementById('tamount').innerHTML=tamount;
    document.getElementById('qty').innerHTML=ch;
   }
   else
   {
    var ch=prompt("Enter a value:");
var amount=document.getElementById('amount').innerHTML;
//window.alert(amount);
var tamount=ch*amount;
//window.alert(tamount);
document.getElementById('tamount').innerHTML=tamount;
document.getElementById('qty').innerHTML=ch;
   }
}