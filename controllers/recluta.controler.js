import { reclutaServices } from "../service/recluta-service.js";
console.log(reclutaServices)
const crearNuevaLinea =(nombre, apellido,batallon, id) =>{
    const linea =document.createElement('tr');
    const contenido = `
    <td class="td" data-td>
        ${nombre}
        </td>
            <td>${apellido}</td>
            <td>${batallon}</td>
            <td>
            <ul class="table__button-control">
                <li>
                <a
                    href="../screens/editar_recluta.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                >
                </li>
                <li>
                <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}">
                    Eliminar
                </button>
                </li>
            </ul>
            </td>
    `;
linea.innerHTML= contenido;
const btn = linea.querySelector("button");
btn.addEventListener("click",()=>{
    const id = btn.id;

    reclutaServices.eliminarRecluta(id).then(respuesta=>{
        console.log(respuesta)
    }).catch (error => console.log("ERROR"));

});

return linea;
};
const table =document.querySelector("[data-table]")
//create - post
// read - get 
//update - put/patch
//delete - delete
reclutaServices
.listaReclutas()
    .then((data)=>{
        data.forEach((perfil)=> {
            const nuevaLinea=crearNuevaLinea(perfil.nombre,perfil.apellido,perfil.batallon,perfil.id);
            table.appendChild(nuevaLinea); 
        });
    })
.catch((error)=>alert("error")); 