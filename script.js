function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="Addition of given value is "+c
}

function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("button2").innerHTML="Subraction of given value is "+c
}


function mul(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button3").innerHTML="Multiplication of given value is "+c
}


function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button4").innerHTML="Division of given value is "+c
}


function mod(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a%b;
    document.getElementById("button5").innerHTML="Module of given value is "+c
}

function sq1(){
    let a=parseInt(document.getElementById("n1").value);
    //let b=parseInt(document.getElementById("n2").value);
    let c=a*a;
    document.getElementById("button6").innerHTML="Square Value of Number-1 is "+c
}
function sq2(){
    //let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=b*b;
    document.getElementById("button7").innerHTML="Square Value of Number-2 is "+c
}
