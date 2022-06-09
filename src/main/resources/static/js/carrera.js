$(document).ready(function(){
    setCmbCarreras()
});
//Mustra en un ComboBox las carreras
async function setCmbCarreras(){
    //Obtenemos las carreras
    const requestCarrera = await fetch('api/carrera',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    const carreras = await requestCarrera.json();

    let i = 1;

    let carreCabeza = '<option selected disabled value="99">-Carrera-</option>';

    let carreCuerpo = '';

    for(carrera of carreras){
        carreCuerpo += '<option value="'+ i +'">'+ carrera.carre_nombre +'</option>';
        i++;
    }
    let imprimir = carreCabeza + carreCuerpo;

    document.querySelector('#CmbCarrera').innerHTML = imprimir;
}