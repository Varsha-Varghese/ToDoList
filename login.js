
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
    window.open('http://127.0.0.1:5500/todoapp/todo.html');
}
     