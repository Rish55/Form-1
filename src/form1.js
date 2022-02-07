// On Clicking Submit Button
function onSubmit()
{
    var name = document.getElementById("Name").value;
    var age = document.getElementById("Age").value;
    var weight = document.getElementById("Weight").value;
    var out = logic(name, age, weight);
    document.getElementById("message").innerHTML = out;
}
    // Logic part
function logic(name, age, weight)
{
    result = "";

    //Age Group 5-7
    if (age >= 5 && age <= 7)
    {
        if (weight > 15 && weight < 20)
            result = perfectWt(name, age, weight);
        
        else if (weight >= 20)
            result = overWt(name, age, weight);
        
        else
            result = underWt(name, age, weight);
    }

    //Age Group 8-10
    else if (age >= 8 && age <= 10)
    {
        if (weight > 21 && weight < 25)
            result = perfectWt(name, age, weight);
        
        else if (weight >= 25)
            result = overWt(name, age, weight);
        
        else
            result = underWt(name, age, weight);
    }

    //Age Group 11-15
    else if (age >= 11 && age <= 15)
    {
        if (weight > 26 && weight < 30)
            result = perfectWt(name, age, weight);
        
        else if (weight >= 30)
            result = overWt(name, age, weight);
        
        else
            result = underWt(name, age, weight);
    }

    //Age Group 16-20
    else if (age >= 16 && age <= 20)
    {
        if (weight > 31 && weight < 40)
            result = perfectWt(name, age, weight);
        
        else if (weight >= 40)
            result = overWt(name, age, weight);
        
        else
            result = underWt(name, age, weight);
    }

    else
    {
        result = "Kindly Provide Details within the specified Limit";
    }

    return result;
}

// Result

function perfectWt(name, age,  weight)
{
    return ("Hello " + name + " !!! Your weight is perfect.");
}
function overWt(name, age,  weight)
{
    return ("Hello " + name + " !!! Your weight is greater than recommended value of " + weight + "KG at an age of " + age + ".");
}
function underWt(name, age,  weight)
{
    return ("Hello " + name + " !!! Your weight is less than recommended value of " + weight + "KG at an age of " + age + ".");
}