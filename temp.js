let cel = document.getElementById("celsius");
let far = document.getElementById("fahrenheit");
function ctof()
{
    let output = (parseFloat(cel.value) * 9/5) + 32;
    far.value = parseFloat(output.toFixed(2));
    console.log(output);
    
}
function ftoc()
{
    let output = (parseFloat(far.value)- 32)*5/9;
    cel.value = parseFloat(output.toFixed(2));
    console.log(output);
    
}

