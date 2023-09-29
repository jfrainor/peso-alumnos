 // Función para agregar un alumno con su peso
 function agregarAlumno() {
    const pesoAlumno = parseFloat(document.getElementById("pesoAlumno").value);
    if (!isNaN(pesoAlumno)) {
        // Obtener los pesos de alumnos previamente guardados en sessionStorage
        const pesosGuardados = JSON.parse(sessionStorage.getItem("pesosAlumnos")) || [];
        pesosGuardados.push(pesoAlumno);

        // Guardar los pesos actualizados en sessionStorage
        sessionStorage.setItem("pesosAlumnos", JSON.stringify(pesosGuardados));

        // Limpiar el campo de entrada
        document.getElementById("pesoAlumno").value = "";

        // Calcular estadísticas y mostrar resultados
        calcularEstadisticas();
    }
}

// Función para calcular estadísticas y mostrar resultados
function calcularEstadisticas() {
    // Obtener los pesos de alumnos previamente guardados en sessionStorage
    const pesosGuardados = JSON.parse(sessionStorage.getItem("pesosAlumnos")) || [];

    let menosDe40kg = 0;
    let entre40y50kg = 0;
    let entre50y60kg = 0;
    let masDe60kg = 0;

    // Calcular estadísticas basadas en los pesos guardados
    for (const peso of pesosGuardados) {
        if (peso < 40) {
            menosDe40kg++;
        } else if (peso >= 40 && peso < 50) {
            entre40y50kg++;
        } else if (peso >= 50 && peso < 60) {
            entre50y60kg++;
        } else {
            masDe60kg++;
        }
    }

    // Calcular el porcentaje y la cantidad de alumnos
    const totalAlumnos = menosDe40kg + entre40y50kg + entre50y60kg + masDe60kg;
    const porcentajeMenosDe40kg = (menosDe40kg / totalAlumnos) * 100;
    const porcentajeEntre40y50kg = (entre40y50kg / totalAlumnos) * 100;
    const porcentajeEntre50y60kg = (entre50y60kg / totalAlumnos) * 100;
    const porcentajeMasDe60kg = (masDe60kg / totalAlumnos) * 100;

    // Actualizar los resultados en la página
    document.getElementById("menosDe40kg").textContent = porcentajeMenosDe40kg.toFixed(2) + "%";
    document.getElementById("cantidadMenosDe40kg").textContent = menosDe40kg;
    document.getElementById("entre40y50kg").textContent = porcentajeEntre40y50kg.toFixed(2) + "%";
    document.getElementById("cantidadEntre40y50kg").textContent = entre40y50kg;
    document.getElementById("entre50y60kg").textContent = porcentajeEntre50y60kg.toFixed(2) + "%";
    document.getElementById("cantidadEntre50y60kg").textContent = entre50y60kg;
    document.getElementById("masDe60kg").textContent = porcentajeMasDe60kg.toFixed(2) + "%";
    document.getElementById("cantidadMasDe60kg").textContent = masDe60kg;
}

// Llamamos a la función para mostrar los resultados almacenados en sessionStorage al cargar la página
calcularEstadisticas();