
function myfunction()
{
    var element = document.getElementById("list");

    if(element.className === "list-style")
    {
        element.className += " responsive"; 
    }
    else
    {
        element.className = "list-style";
    }
}