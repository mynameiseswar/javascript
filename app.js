

window.addEventListener('DOMContentLoaded',function(){
  console.log('App JS File is Loaded.');
  // Method Calling.

  // for(var i=0;i< 5;i++){
  //   createButton(`Button ${i}`);
  // }

  // createButton()

});

// Method Implementation
function createButton(buttonTitle = "Click Me"){
  console.log("Create Button Method Invoked.");
  let createTag = document.createElement('section');
  createTag.setAttribute('class','button');
  createTag.setAttribute('id','my__button');
  createTag.innerHTML = `<p> ${buttonTitle}</p>`
  document.getElementById('container').appendChild(createTag);
  createTag.addEventListener('click',onButtonClick());
  console.log(createTag);
}


function onButtonClick(){
  alert("Button Click");
}

function onShowFive(){
  console.log("Show 5 Buttons");
  //document.getElementById('button-5').style.display = 'block';
  document.getElementById('container').innerHTML ='';
  for(var i=0;i< 5;i++){
     createButton(`Button ${i}`);
 }
}

function onShowFour(){
 // document.getElementById('button-5').style.display = 'none';
 document.getElementById('container').innerHTML ='';
 for(var i=0;i< 4;i++){
    createButton(`Button ${i}`);
 }
}

function onCreateNewButton(){
  createButton();
}