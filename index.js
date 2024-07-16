let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");

cvBtn.addEventListener("click", function(){
  alert("Download Succesfully")
})

submit.addEventListener("click", function(){
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if(email.value == "" && pass.value == ""){
    alert("Fill Detail")
  }else{
    alert("Logged IN")
  }
})

