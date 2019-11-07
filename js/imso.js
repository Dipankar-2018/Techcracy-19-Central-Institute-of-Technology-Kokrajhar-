var modal = document.getElementById("myModal");	
var modaltwo = document.getElementById("myModal_two");
var modalthree = document.getElementById("myModal_three");
var modalfour = document.getElementById("myModal_four");
var modalfive = document.getElementById("myModal_five");
var modalsix = document.getElementById("myModal_six");
var modalseven = document.getElementById("myModal_seven");

var btn = document.getElementById("myBtn");
var btnone = document.getElementById("myBtnone");
var mBt = document.getElementById("mBt");
var mBt2 = document.getElementById("mBt2");
var mBt3 = document.getElementById("mBt3");
var mBt4 = document.getElementById("mBt4");
var mBt5 = document.getElementById("mBt5");



var span = document.getElementsByClassName("close")[0]; 
var span1 = document.getElementsByClassName("close1")[0]; 
var span2 = document.getElementsByClassName("close2")[0]; 
var span3 = document.getElementsByClassName("close3")[0]; 
var span4 = document.getElementsByClassName("close4")[0]; 
var span5 = document.getElementsByClassName("close5")[0]; 
var span6 = document.getElementsByClassName("close6")[0]; 




 btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == this.modal) {
    this.modal.style.display = "none";
  }
}


//second button
btnone.onclick = function() {
  modaltwo.style.display = "block";
}

span1.onclick = function() {
  modaltwo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == this.modaltwo) {
    this.modaltwo.style.display = "none";
  }
}

//third button
mBt.onclick = function() {
  modalthree.style.display = "block";
}

span2.onclick = function() {
  modalthree.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == this.modalthree) {
    this.modalthree.style.display = "none";
  }
}


//4th button
mBt2.onclick = function() {
  modalfour.style.display = "block";
}

span3.onclick = function() {
  modalfour.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == this.modalfour) {
    this.modalfour.style.display = "none";
  }
}

// 5th button
mBt3.onclick = function() {
  modalfive.style.display = "block";
}

span4.onclick = function() {
  modalfive.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == this.modalfive) {
    this.modalfive.style.display = "none";
  }
}

// 6th button
mBt4.onclick = function() {
  modalsix.style.display = "block";
}

span5.onclick = function() {
  modalsix.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == this.modalsix) {
    this.modalsix.style.display = "none";
  }
}

// 7th button
mBt5.onclick = function() {
  modalseven.style.display = "block";
}

span6.onclick = function() {
  modalseven.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == this.modalseven) {
    this.modalseven.style.display = "none";
  }
}