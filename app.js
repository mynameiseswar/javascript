
var unites = 0;

window.addEventListener('DOMContentLoaded',function(){
  console.log("App JS File is loaded.");

 // 0 - 50 per unit cost is 1.00
 // 51- 100 per unit cost is 1.75
 // 101 - 150 Per Unit cost is 2.30
 // 151 - Above Per unit cost is 3

})

function calculateTotalAmount(unites){

  console.log('Calculating the Total Amount');

  // Logic
  var totalBill = 0;

  if(unites<=50){
    totalBill = unites * 1;
  }else if(unites > 50 && unites <= 100){
    totalBill = (50 * 1) + ((unites - 50) * 1.75);
    // totalBill = unites * 1.75;
  }else if(unites > 100 && unites <= 150){
    totalBill = (50 * 1) + (50 * 1.75) + ((unites - 100) * 2.30);
  }else {
    totalBill = (50 * 1) + (50 * 1.75) + (50 * 2.30) + ((unites - 150) * 3);
  }
  document.getElementById('total__bill').innerHTML = totalBill;
}

function onNumberChange(){

}