function agregarFilas(){
    
    var status = ""
    if(result = 10){
        status = "10"
        }
        else if (result > 10){
            result = "10 +"
        }
        else if (result < 10){
            result = "10 -"
        }
    


    var number1 = document.getElementById("num");
    var number2 = document.getElementById("num2");
    var result = number1 + number2;

    var table = document.getElementById("tab1");

    var t1 = document.createElement("tr");
    var celda1 = document.createElement("td");

    
    var celda2 = document.createElement("td");

    
    var celda3 = document.createElement("td");

    
    var celda4 = document.createElement("td");


    celda1.appendChild(number1)
    t1.appendChild(celda1);

    celda2.appendChild(number2)
    t1.appendChild(celda2);

    celda3.appendChild(result)
    t1.appendChild(celda3);

    celda4.appendChild(status)
    t1.appendChild(celda4);
}