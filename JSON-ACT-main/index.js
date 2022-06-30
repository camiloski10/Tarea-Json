console.log('Conectado')

const div = document.querySelector('#contenedor');
console.log(div);
const btn = document.querySelector('#btn');
console.log(btn);
const form = document.querySelector('#form');
console.log(form);




form.addEventListener('submit', function (e) {
    e.preventDefault();

    ObtenerDatos();
    mostrarBoton();
})

async function ObtenerDatos() {

    const response = await fetch("http://127.0.0.1:5500/Familia.json");
    let json = await response.json();

    console.log(json);

    

    json.Familia.forEach(element => {

        div.innerHTML +=  '<div class="card">  <h2>' + element.Nombres+ ' </h2> <br> <span>' +element.Apellidos+ '<br> Edad: ' + element.Edad+'<br> Profesión: '+element.Profesion+'</span> <br> <img src="'+element.url+'" </div>';

    });


}

function mostrarBoton() {
    btn.style.display = 'none';
}




