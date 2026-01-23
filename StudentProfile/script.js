function openDetails(){
    var reg=document.getElementById("regno").value;

    if(reg==="174CY23019"){
        window.location.href="details.html";

    }else if(reg==="174CY23033"){
        window.location.href="details2.html";

    }else if(reg==="174CY23048"){
        window.location.href="details4.html";

    }else if(reg==="174CY24040"){
        window.location.href="details5.html";
    }else if(re==="174CY23034"){
        window.location.href="details3.html"
    }else{
        document.getElementById("Error").innerHTML="Invalid Register Number.Please Try Again.";
    }

}
