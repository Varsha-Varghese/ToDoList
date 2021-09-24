
function loginvalidate(redirect){
    const uname = loginform.uname.value;
    const pwd = loginform.pwd.value;
    let res = 1;
        if(uname =="" || pwd =="") {
            alert("fields cannot be empty");
            res = 1 ;
           
        }
        else if(uname == "admin" && pwd == "12345"){
        res = 0;
      
        }
        else {
            alert("Invalid user name or password");
            res = 1;
           
        } 
         
    redirect(res);
}
function redirect(res){
    if(res==0)
    window.open('https://varsha-varghese.github.io/ToDoList/todo.html');
}
     
