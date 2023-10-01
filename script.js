$(document).ready(function () {
    // Datos en JSON
    const experienciaData = [
        {
            puesto: "Desarrollador Web",
            empresa: "Empresa A",
            periodo: "Enero 2020 - Presente",
        },
        {
            puesto: "Diseñador UX/UI",
            empresa: "Empresa B",
            periodo: "Junio 2018 - Diciembre 2019",
        },
    ];

    const educacionData = [
        {
            titulo: "Licenciatura en Informática",
            institucion: "Universidad XYZ",
            periodo: "2014 - 2018",
        },
    ];

    // Agregar lista de experiencia
    function agregarExperiencia() {
        const experienciaList = $("#experiencia-list");
        experienciaData.forEach(function (exp) {
            experienciaList.append(
                `<li>${exp.puesto} en ${exp.empresa}, ${exp.periodo}</li>`
            );
        });
    }

    // Agregar lista de educación
    function agregarEducacion() {
        const educacionList = $("#educacion-list");
        educacionData.forEach(function (edu) {
            educacionList.append(
                `<li>${edu.titulo} en ${edu.institucion}, ${edu.periodo}</li>`
            );
        });
    }

    // Evento ocultar/mostrar secciones de experiencia y educación
    $("#experiencia").click(function () {
        $("#experiencia-list").toggle();
    });

    $("#educacion").click(function () {
        $("#educacion-list").toggle();
    });

    // Mostrar los datos
    agregarExperiencia();
    agregarEducacion();
});
