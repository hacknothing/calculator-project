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
