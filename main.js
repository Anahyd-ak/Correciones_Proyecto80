//Agregar la matriz de names_of_peope de la siguiente forma: var names_of_people = [];

//Las dos lineas de abajo (línes 6 y 7) van dentro de una función que te hizo falta crea pero que si llamaste en tu archivo index la cual es submit

function submit(){
    var GuestName = document.getElementById("name1").value;
    names_of_people.sort();
}


function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.lenght; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}

function sorting()
{
    var s= document.getElementById("sort_button").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.lenght; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("sorted").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}

function show()
{
    var s= document.getElementById("show").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.lenght; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("p1").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}