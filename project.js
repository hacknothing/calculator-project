var logincount=2;
function loginform()
{
    if(logincount%2==0)
    {
        document.getElementById("popup").style.display="flex";
    }
    else
    {
        document.getElementById("popup").style.display="none";
    }
    logincount++;
}

var menucount=1;
function menubar()
{
    if(menucount%2==0)
    {
        document.getElementById("sidemenu").style.display="none"
    }
    else{
        document.getElementById("sidemenu").style.display="block"
    }
    menucount++;
}
