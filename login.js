let form=(document.querySelector("form"));
let Username=(document.getElementById("uName"));
let Email=(document.getElementById("uEmail"));
let Mobilenumber=(document.getElementById("uMobile number"));
let Password=(document.getElementById("uPass"));

form.addEventListener("submit" , event=>{
      event.preventDefault();


  //! username
  let un = Username.value;
  let nameptn = /[a-zA-Z+\s]/g;
  if(nameptn.test(un)){
    console.log(un);
  }
  else{
    alert("please enter valid name");
  }


  //! Email
  let uEmail = Email.value;
  let Emailptn = /[a-zA-Z\w\d]+@[a-zA-Z]+\.[a-z]+/g;
  if(Emailptn.test(uEmail)){
    console.log(uEmail);
  }
  else{
    alert("please enter valid Email");
  }


  //! Mobilenumber
  let uMobilenumber = Mobilenumber.value;
  let Mobilenumberptn = /\d/g;
  if(Mobilenumberptn.test(uMobilenumber)){
    console.log(uMobilenumber);
  }
  else{
    alert("please enter valid Mobile number");
  }
    

  //! Password
  let uPass = Password.value;
  let Passwordptn = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$^&*]).{6,12}/g;
  if(Passwordptn.test(uPass)){
    console.log(uPass);
  }
  else{
    alert("Please enter valid Password");
  }

})
