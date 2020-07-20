var numeroDeCarros = document.getElementById('numero_de_carros');
var fecha = document.getElementById('fecha_de_inicio');
var marcasInputElements = document.getElementsByClassName('marca');
var color_1 = document.getElementById('color_1');
var color_2 = document.getElementById('color_2');
var color_3 = document.getElementById('color_3');
var carros = []
var lista_de_carros = document.getElementById('lista_de_carros')

class Car {
    constructor(marca, year, color){
        this.marca = marca;
        this.year = year;
        this.color = color;
    }
}

function getInput() {

    var marcasCheckedValues = []; 
    for(var i = 0; marcasInputElements[i]; i++){
        if(marcasInputElements[i].checked){
            marcasCheckedValues.push(marcasInputElements[i].value);
        }
    }
    var today = new Date()
    var thisYear = today.getFullYear()
    var thatYear = Number(fecha.value.substr(0, 4));
    var yearAcc = [];
      
    for ( i = thatYear; i <= thisYear ; i++) {
        yearAcc.push(thatYear);
        thatYear++;
    }
    
    for (let i = 0; i < numeroDeCarros.value; i++) {
        var marca = marcasCheckedValues[Math.floor(Math.random() * marcasCheckedValues.length)]
        var color = [color_1, color_2, color_3][Math.floor(Math.random()*3)].value
        var year = yearAcc[ Math.floor(Math.random() * yearAcc.length)]    
        var carro = new Car(marca, year, color)
        carros.push(carro)
    }
    var template = '';
    for (let i = 0; i < carros.length; i++ ){
        template += `<div class="carro" style="background-color:${carros[i].color}">
                        <div class="carro_number">Carro ${i}</div>
                        <div class="carro_img">
                            <img class="carro_image" src="cars/${carros[i].marca}.png">
                        </div>
                        <div class="carro_marca">${carros[i].marca}</div>
                        <div class="carro_year">${carros[i].year}</div>
                        <div class="carro_color">${carros[i].color}</div>
                    </div>`
    }
    lista_de_carros.innerHTML = template;

}