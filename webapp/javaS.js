function verification(){
    var a=document.getElementById("user").value;
    var pass=document.getElementById("pwd").value;
    if("saravanan"===a){
        document.write("Hello saravnan");
    }
    else{
        alert("Wrong password");
    }
}

var copy;
function changeAdmin(){ 
    var div = document.getElementById('actionBar');
    var div2 = document.getElementById('user');
    document.getElementById("custom").style.transition= ".5s";
    document.getElementById("custom").style.color = "black";
    document.getElementById("custom").style.backgroundColor = "white";
    document.getElementById("admin").style.color = "white";
    document.getElementById("admin").style.backgroundColor = " rgb(6, 92, 252)";
    // document.getElementById("actionBar").style.width = '0';
    // document.getElementById("actionBar").style.height = '0';
    // div2.style.height='0'; div2.style.width='0';
    div2.style.display='none';
    div.style.display='none';
    document.getElementById('pwd').style.display="none";
    document.getElementById('adminpwd').style.display="block";
    // div2.remove();
}
function changeCustomer(){
    document.getElementById("admin").style.transition= ".5s";
    document.getElementById("custom").style.color = "white";
    document.getElementById("custom").style.backgroundColor = " rgb(6, 92, 252)";
    document.getElementById("admin").style.color = "black";
    document.getElementById("admin").style.backgroundColor = "white";

    document.getElementById("user").style.display = 'block';
    document.getElementById("actionBar").style.display = 'block';
    document.getElementById("adminpwd").style.flexSpace = 'none';   
}