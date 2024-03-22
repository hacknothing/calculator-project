var ans=""


function displayInput(op)
{
    if(op==='[')
    {
       op='(' 
    }
    if(op===']')
    {
        op=')'
    }
   
    ans+=op;
    document.getElementById("input").value=ans;
    
}

function clearInput()
{
    ans="";
    document.getElementById("input").value=ans;
}


function deleteInput(){
    let n= ans.length;
    ans =ans.substring(0,n-1);
    document.getElementById("input").value=ans;
}

function makeAnswer()
{
    ans=eval(ans);
    document.getElementById("input").value=ans;
}

function mathOperations(op)
{
    var  s=1;
    var val;
    switch(op)
    {
       
        case 1:for(let i=ans;i>=1;i--)
               {
                 s=s*(i);
               }
               document.getElementById("input").value=s;
               break;
        case 2:
            val = Math.sin(ans);
            document.getElementById("input").value=val;
            break;
        case 3:
            ans+=3.14159265359;
            document.getElementById("input").value=ans;
            break;
        case 4:
            ans=Math.cos(ans);
            document.getElementById("input").value=ans;
            break;
        case 5:
            ans=Math.log(ans);
            document.getElementById("input").value=ans;
            break;
        case 6:
            ans=Math.tan(ans);
            document.getElementById("input").value=ans;
            break;
        case 7:
            ans=Math.sqrt(ans);
            document.getElementById("input").value=ans;
            break;
        case 8:
            ans+=Math.E;
            document.getElementById("input").value=ans;
            break;
        default:
            break;

    }

}