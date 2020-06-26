function getnum(num){
    
    var  result = document.getElementById("result");
    result.value += num;
    
}
 function clr(num){
     var result = document.getElementById("result")
     result.value = ""
 }
 function getResult(){
     var result = document.getElementById("result")
     result.value = eval(result.value)
 }

 function del_btn(num){
     var result = document.getElementById("result");
     result.value += num;
     result.value = result.value.substring(0,result.value.length-1);
    

    //   console.log(result.value)
 }