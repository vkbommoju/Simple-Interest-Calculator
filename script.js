function compute()
{
    var today = new Date();

    p = document.getElementById("principal").value; //principal amount
    ir = document.getElementById("rate").value; //interest rate
    t = document.getElementById("years").value; //time duration
    future=today.getUTCFullYear()+parseInt(t); // this year + time duration of investment
    
    interest=t*p*ir/100 // interest amount 

    document.getElementById("val1").innerHTML = p;
    document.getElementById("val2").innerHTML = ir+'%';
    document.getElementById("val3").innerHTML = interest;
    document.getElementById("val4").innerHTML = future;

    //input validation
    if(p<=0){
        document.getElementById("result").hidden=true; //changing attribute of id=result
        alert("Enter a positive number")
        document.getElementById("principal").focus();
    }
    else{
        document.getElementById("result").hidden=false; //changing attribute of id=result
    }

}

function show_slider_value(){
    var slider=document.getElementById("rate"); 
    var output=document.getElementById("rate_display");
    output.innerHTML=slider.value+'%'; //to diplay Interest rate when page loads
    
    slider.oninput=function(){ //to diplay Interest rate when slider is moved
        output.innerHTML=this.value+'%';
    }
}
