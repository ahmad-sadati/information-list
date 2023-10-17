const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const signIn = document.getElementById("signIn");
const output = document.getElementById("output");
const code = document.getElementById("code");
const fName = document.getElementById("f-Name");
const nameList = [];
let nameListText = "";
signIn.addEventListener("click", () => {
  if (!!name.value && !!lastname.value && !!code.value && !!fName.value) {
    const reg = {
      Name: name.value,
      LastName: lastname.value,
      Code: code.value,
      FName: fName.value,
    };
    nameList.push(reg);
    nameListText +=
      "<li> name: " +
      reg.Name +
      " lastname: " +
      reg.LastName +
      " code: " +
      reg.Code +
      " parent name: " +
      reg.FName +
      "</li>";
    output.innerHTML = nameListText;
  } else {
    console.log(111);
    alert('fill all the inputs');
    if (
      name.value == "" ||
      lastname.value == "" ||
      code.value == "" ||
      fName.value == ""
    ) {

    if(name.value ==""){
      name.style = 'border:red 5px solid';
    }
    if (lastname.value == "") {
      lastname.style = "border:red 5px solid";
    }
    if (code.value == "") {
      code.style = "border:red 5px solid";
    }
    if (fName.value == "") {
      fName.style = "border:red 5px solid";
    }  
    }
    name.oninput = function(){
      if(name.value==''){
        name.style = "border:red 5px solid"
      }else {
        name.style = "border:gray 1px solid ; border-radius:3px"
      }
    }    
    lastname.oninput = function(){
      if(lastname.value==''){
        lastname.style = "border:red 5px solid"
      }else {
        lastname.style = "border:gray 1px solid ; border-radius:3px"
      }
    }   
    code.oninput = function(){
      if(code.value==''){
        code.style = "border:red 5px solid"
      }else {
        code.style = "border:gray 1px solid ; border-radius:3px"
      }
    }   
    fName.oninput = function(){
      if(fName.value==''){
        fName.style = "border:red 5px solid"
      }else {
        fName.style = "border:gray 1px solid ; border-radius:3px"
      }
    }
    
  }
});
