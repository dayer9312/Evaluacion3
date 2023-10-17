import { reclutaServices } from "../service/recluta-service.js";

const formulario =document.querySelector("[data-form]");

/*const obtenerInfo=()=>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id");

    if (id==null){
        window.location.href="/screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const email =document.querySelector("[data-email]");

    clientServices.detalleCliente(id).then((perfil)=>{
        nombre.value=perfil.nombre,
        email.value=perfil.email
    });
};

obtenerInfo();*/

//------------------------------con asinc await

const obtenerInfo = async()=>{
    const url = new URL (window.location);
    const id = (url.searchParams.get("id"));
    if (id==null){
        window.location.href="/screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const apellido =document.querySelector("[data-email]");
    const batallon =document.querySelector("[data-batallon]")

    try{
        const perfil = await reclutaServices.detalleRecluta(id);
        if (perfil.nombre && perfil.apellido && perfil.batallon){
            nombre.value=perfil.nombre;
            apellido.value=perfil.apellido;
            batallon.value=perfil.batallon
        }else{
            throw new Error();
        }
    }catch (error){
        console.log("Catch error",error)
        window.location.href="/screens/error.html"
    };
};

obtenerInfo();

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const url= new URL(window.location);
    const id =url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const apellido = document.querySelector("[data-apellido]").value;
    const batallon = document.querySelector("[data-batallon]")
    clientServices.actualizarCLiente(nombre,email,id).then(()=>{
        window.location.href="/screens/edicion_concluida.html";
    });

});
