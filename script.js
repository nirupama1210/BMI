wt=parseFloat(prompt("Enter Weight (in kg)"));
ht=parseFloat(prompt("Enter Height (in m)"));
bmi=wt/(ht**2);
if(bmi<18.5)
{
    document.write("Underweight and BMI is "+bmi.toFixed(2));
}
else if(bmi<=24.9)
{
    document.write("Normal and BMI is "+bmi.toFixed(2));
}
else if(bmi<=29.9)
{
    document.write("Overweight and BMI is "+bmi.toFixed(2));
}
else if(bmi <=34.9)
{
    document.write("Obese Class 1 and BMI is "+bmi.toFixed(2));
}
else if(bmi<=39.9)
{
    document.write("Obese Class II and BMI is "+bmi.toFixed(2));
}
else{
    document.write("Obese Class III and BMI is "+bmi.toFixed(2));
}