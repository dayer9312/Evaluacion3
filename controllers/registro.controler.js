import { reclutaServices } from "../service/recluta-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const apellido = document.querySelector("[data-apellido]").value;
    const batallon = document.querySelector("[data-batallon]").value;
    reclutaServices
        .crearRecluta(nombre,apellido,batallon)
        .then(()=>{
            window.location.href = "/screens/registro_completado.html";

        })
        .catch((error)=> console.log(error));
    

});