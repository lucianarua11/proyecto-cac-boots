
console.log("Prueba");
const formulario = document.getElementById('formulario1');


formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    console.log(nombre)
    let apellido = document.getElementById('apellido').value;
    console.log(apellido)
    let mail = document.getElementById('email-form').value;
    console.log(mail)
    let cantidad = document.getElementById('cantidad').value;
    console.log(cantidad)
    let categoria = document.getElementById('categoria').value;
    console.log(categoria)
    
    let valor = 200;
    

    if (categoria === 'selected') {   
        alert('Selecciona una opción de categoría');
        return;
            } else if (categoria === 'estudiante') {
                valor = (valor - (valor * 80/100)); // Aplicar un descuento del 80% para estudiantes
                    } else if (categoria === 'trainee') {
                        valor = valor - (valor * 50/100); // Aplicar un descuento del 50% para trainee 
                        }else if (categoria === 'junior') {
                            valor = valor - (valor * 15/100); // Aplicar un descuento del 15% para junior 
                            }
                        console.log('Total a Pagar: $ ' + (valor * cantidad));

        
        var botonRespuesta = document.getElementById('aPagar');
        botonRespuesta.style.display = 'block';
        botonRespuesta.textContent = 'Total a Pagar: $ ' + (valor * cantidad);
        

})
