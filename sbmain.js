function Nav(){
    let navbar = document.getElementById("DropDown");
    console.log(navbar.style.height)
    if (navbar.style.height == "200px"){
        navbar.style.height = "0";
    }else{
        navbar.style.height = "200px";
    }

}