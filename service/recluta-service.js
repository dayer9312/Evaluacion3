

// const listaClientes=()=>{
//     const promise = new Promise ((resolve,reject)=>{
//         const http =new XMLHttpRequest();
//         http.open("GET","http://localhost:3000/perfil");
//         http.send();
//         http.onload=()=>{
//             const response = JSON.parse(http.response) ;
//             if (http.status>= 400){
//                 reject(response)
//             }else{
//                 resolve(response)
//             }
//         };
//     });
//     return promise;
// }




const listaReclutas =()=> fetch("http://localhost:3000/perfil").then(respuesta=>respuesta.json());

const crearRecluta=(nombre,apellido,batallon)=>{
    return fetch("http://localhost:3000/perfil",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({nombre,apellido,batallon, id: uuid.v4()}),

    });
};

const eliminarRecluta=(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
};

const detalleRecluta=(id)=>{

    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>
    respuesta.json());
};

const actualizarRecluta=(nombre,apellido,batallon,id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{

        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre,apellido,batallon}),
    })
    .then((respuesta)=>(respuesta))
    .catch((error)=>console.log(error))

}




export const reclutaServices={
    listaReclutas,
    crearRecluta,
    detalleRecluta,
    actualizarRecluta,
    eliminarRecluta
};





