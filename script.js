const display = document.getElementById("display");
document.querySelectorAll("button"). forEach((button) => {
  button.addEventListener("click",()=>{
    let val = button.innerText;
    switch(val){
      case "C":
        display.value = "";
      break;

      case "=":
        try{
          display.value = eval(display.value);
        }
        catch{
          display.value = "error";
        }
      break;
      
      case "+/-":
        display.value = display.value.startswith("-")
        ? display.value.slice(1)
        : "-" + display.value;
      break;

      case "()":
        if(
          display.value.includes("(") && !display.value.includes(")")
        ){
          display.value += ")";
        }else{
          display.value += "(";
        }
      break;

      default :
      display.value += val; 
    }

  })
}
)

