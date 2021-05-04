tinymce.init({
    selector: '#detalle-crimenes-txt',
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

var parent = document.getElementById("tipo-select-ciudad");
var array = ["Viña del Mar", "Quilpue", "Santiago", "Valparaiso"];
var selectList = document.createElement("select");
selectList.id = "mySelect";
parent.appendChild(selectList);
for (var i = 0; i < array.length; i++) {
var option = document.createElement("option");
option.value = array[i];
option.text = array[i];
selectList.appendChild(option);
}

const reos = [];
const cargarTabla = ()=>{
  let tbody = document.querySelector("#tbody-tabla");
  tbody.innerHTML = "";
  for(let i=0; i < reos.length; ++i){
    let p = reos[i];
    let tr = document.createElement("tr");
    let tdNro = document.createElement("td");
    let tdNombreReo = document.createElement("td");
    let tdDetalleReo = document.createElement("td");
    let tdCiudadReo = document.createElement("td");
    let tdGravedadReo = document.createElement("td");

    tdNro.innerText = i + 1;
    tdNombreReo.innerText = p.Nombre;

    let Gravedad = document.createElement("i");
    if(p.Gravedad <= 3){
      //<i class="far fa-tired"></i>
      Gravedad.classList.add("far", "fa-tired", "text-success", "fa-3x");
    }else if(p.Gravedad >= 4 && p.Gravedad <= 6 ){
      Gravedad.classList.add("fab", "fa-angular", "text-primary", "fa-3x");
    }else if(p.Gravedad >= 7 && p.Gravedad <= 15){
      //<i class="far fa-flushed"></i>
      Gravedad.classList.add("far", "fa-flushed", "text-warning", "fa-3x");
    }else if(p.Gravedad >= 16){
      //<i class="fas fa-biohazard"></i>
      Gravedad.classList.add("fas", "fa-biohazard", "text-danger", "fa-3x");
    }

    let ciudad = document.createElement("i");
    if(p.ciudad == 1){
        tdCiudadReo.innerText = "Viña del Mar";
    }else if(p.ciudad == "2"){
        tdCiudadReo.innerText = "option";
    }else if(p.ciudad == "3"){
      tdCiudadReo.innerText = "option";
    };

    tdGravedadReo.appendChild(Gravedad);
    tdDetalleReo.innerHTML = p.Detalle 

    tr.appendChild(tdNro);
    tr.appendChild(tdNombreReo);
    tr.appendChild(tdDetalleReo);
    tr.appendChild(tdCiudadReo);
    tr.appendChild(tdGravedadReo);
    tbody.appendChild(tr);

  }
};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let detalle = document.querySelector("#detalle-crimenes-txt").value;
    let ciudad = document.querySelector("#tipo-select-ciudad").value;
    let gravedad = document.querySelector("#crimenes-txt").value;
    
    let reo = {};
    reo.Nombre = nombre + " " + apellido;
    reo.Detalle = detalle;
    reo.Ciudad = ciudad;
    reo.Gravedad = gravedad;

    reos.push(reo);
    cargarTabla();
    Swal.fire("Registro de Criminal realizado");

});