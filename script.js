function calc1(){
wt=parseFloat(document.getElementById("wght").value);
ht=parseFloat(document.getElementById("hgt").value);
wgt=document.getElementById("s1").value;
hgt=document.getElementById("s2").value;
if(wgt==="lbs")
{
    wt=wt*0.453//Converting lbs to kg
}
if(hgt==="in")
{
    ht=ht*0.0254//Converting in to m
}
bmi=wt/(ht**2);
s="";
if(bmi<18.5)
{
    s=("Underweight and BMI is "+bmi.toFixed(2));
}
else if(bmi<=24.9)
{
    s=("Normal and BMI is "+bmi.toFixed(2));
}
else if(bmi<=29.9)
{
    s=("Overweight and BMI is "+bmi.toFixed(2));
}
else if(bmi <=34.9)
{
    s=("Obese Class 1 and BMI is "+bmi.toFixed(2));
}
else if(bmi<=39.9)
{
    s=("Obese Class II and BMI is "+bmi.toFixed(2));
}
else{
    s=("Obese Class III and BMI is "+bmi.toFixed(2));
}
document.getElementById("d2").innerHTML=s;
}

function reset(){
    document.getElementById("d2").innerHTML="&nbsp;";
    document.getElementById("wght").value="";
    document.getElementById("hgt").value="";
}