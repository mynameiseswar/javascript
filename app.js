
var unites = 0;

window.addEventListener('DOMContentLoaded',function(){
  console.log("App JS File is loaded.");

 // 0 - 50 per unit cost is 1.00
 // 51- 100 per unit cost is 1.75
 // 101 - 150 Per Unit cost is 2.30
 // 151 - Above Per unit cost is 3

})

function calculateTotalAmount(){

  console.log('Calculating the Total Amount');

  // Logic
  var totalBill = 0;

  if(this.unites<=50){
    totalBill = this.unites * 1;
  }else if(this.unites > 50 && this.unites <= 100){
    totalBill = (50 * 1) + ((this.unites - 50) * 1.75);
    // totalBill = unites * 1.75;
  }else if(this.unites > 100 && this.unites <= 150){
    totalBill = (50 * 1) + (50 * 1.75) + ((this.unites - 100) * 2.30);
  }else {
    totalBill = (50 * 1) + (50 * 1.75) + (50 * 2.30) + ((this.unites - 150) * 3);
  }
  document.getElementById('total__bill').innerHTML = totalBill;
}

function onNumberChange(){

    this.unites = document.getElementById('noOfUnites').value;
}