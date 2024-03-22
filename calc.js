var num="";
var fs=40;
var morecount=0;
function toInputField(op)
{
    num=num+op;
    if(num.length >= 15)
    {
        document.getElementById("input").style.fontSize= fs-1 +"px";
    }
   document.getElementById("input").value=num;
}

function answer()
{
    num=eval(num);
    if(num=="Infinity")
    {
        num=""
    }
    document.getElementById("input").value=num;
}


function cls()
{
    num="";
    document.getElementById("input").value="";
}

function cut()
{
    var a=num.substring(0,(num.length-1));
    num=a;
    document.getElementById("input").value=num;
}


function more()
{
    morecount++;
    if(morecount % 2 == 0)
    {
        document.getElementById("science").style.display="none";
    
        document.getElementById("frame").style.width = "370px";
    }
    else{
        document.getElementById("science").style.display="block";
    
    document.getElementById("frame").style.width = "450px";
    }
    
    
}

function myfun(op)
{
    var ans=Number(document.getElementById("input").value);
    var sign;
    switch(op)
    {
        case 1: sign=Math.sin(ans);
                document.getElementById("input").value=sign;
                break;
        case 2: sign=Math.cos(ans);
                document.getElementById("input").value=sign;
                break;
        case 3: sign=Math.sqrt(ans);
                document.getElementById("input").value=sign;
                break;
        case 4: sign=Math.round(ans);
                document.getElementById("input").value=sign;
                break;
        case 5: sign=Math.log(ans);
                document.getElementById("input").value=sign;
                break;
    }
}
