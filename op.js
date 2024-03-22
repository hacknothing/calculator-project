
var content="";
var count=0;
var ansc=0;
var ans;

function readContent(op)
{

    

    if(count==0 && ansc==1)
    {
        ansc=0;
        content ="";
        content += ans;
    }
    else{
        count=0;
    }
    content =content + op;
    document.getElementById("input-read").value=content;
}

function clean()
{
    count++;
    content =  "";
    ans="";
    document.getElementById("input-read").value=content;
    document.getElementById("input-answer").value=ans;
}


function deleteOneByOne()
{

    content = content.substring(0,content.length-1);
    document.getElementById("input-read").value=content;
}

function answer()
{
    ++ansc;
     ans=eval(content);
    document.getElementById("input-answer").value=ans;
}

