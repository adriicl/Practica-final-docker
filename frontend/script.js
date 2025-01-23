fetch('http://localhost:8000/api/alumno') // Conexión interna entre servicios
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('alumnos');
        list.innerHTML = ''; // Limpiar el contenido previo
        data.forEach(alumno => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Nombre:</strong> ${alumno.nombre} <br>
                <strong>Teléfono:</strong> ${alumno.telefono || 'No especificado'} <br>
                <strong>Edad:</strong> ${alumno.edad} años <br>
                <strong>Sexo:</strong> ${alumno.sexo || 'No especificado'} <br>
                <strong>Password:</strong> ${alumno.password || 'No especificado'} <br>
                <hr>
            `;
            list.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));