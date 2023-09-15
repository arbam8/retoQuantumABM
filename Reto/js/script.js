let rocas={
    arr:[
        {
            nombre:"Kimberlita",
            tipo:"Ígnea",
            imagen:"imagenes/kimberlita.jpg",
            color:"Oscura"
        },
        {
            nombre:"Lherzolita",
            tipo:"Ígnea",
            imagen:"imagenes/lherzolita.jpg",
            color:"Ocre"
        },
        {
            nombre:"Obsidiana",
            tipo:"Ígnea",
            imagen:"imagenes/obsidiana.jpg",
            color:"Oscura"
        },
        {
            nombre:"Granito",
            tipo:"Ígnea",
            imagen:"imagenes/granito.jpg",
            color:"Clara"
        },
        {
            nombre:"Pegmatita",
            tipo:"Ígnea",
            imagen:"imagenes/pegmatita.jpg",
            color:"Ocre"
        },
        {
            nombre:"Gabro",
            tipo:"Ígnea",
            imagen:"imagenes/gabro.jpg",
            color:"Oscura"
        },
        {
            nombre:"Basalto",
            tipo:"Ígnea",
            imagen:"imagenes/basalto.jpg",
            color:"Oscura"
        },
        {
            nombre:"Pumita",
            tipo:"Ígnea",
            imagen:"imagenes/pumita.jpg",
            color:"Ocre"
        },
        {
            nombre:"Riolita",
            tipo:"Ígnea",
            imagen:"imagenes/riolita.jpg",
            color:"Clara"
        },
        {
            nombre:"Dacita",
            tipo:"Ígnea",
            imagen:"imagenes/dacita.jpg",
            color:"Clara"
        },
        {
            nombre:"Conglomerado",
            tipo:"Sedimentaria",
            imagen:"imagenes/conglomerado.jpg",
            color:"Otro"
        },
        {
            nombre:"Arenisca",
            tipo:"Sedimentaria",
            imagen:"imagenes/arenisca.jpg",
            color:"Ocre"
        },
        {
            nombre:"Shale",
            tipo:"Sedimentaria",
            imagen:"imagenes/shale.jpg",
            color:"Clara"
        },
        {
            nombre:"Creta",
            tipo:"Sedimentaria",
            imagen:"imagenes/creta.jpg",
            color:"Clara"
        },
        {
            nombre:"Caliza",
            tipo:"Sedimentaria",
            imagen:"imagenes/caliza.jpg",
            color:"Ocre"
        },
        {
            nombre:"Antracita",
            tipo:"Sedimentaria",
            imagen:"imagenes/antracita.jpg",
            color:"Oscura"
        },
        {
            nombre:"Hierro bandeado",
            tipo:"Sedimentaria",
            imagen:"imagenes/bandediron.jpg",
            color:"Oscura"
        },
        {
            nombre:"Pizarra",
            tipo:"Metamórfica",
            imagen:"imagenes/pizarra.jpg",
            color:"Oscura"
        },
        {
            nombre:"Jadeíta",
            tipo:"Metamórfica",
            imagen:"imagenes/jadeita.jpg",
            color:"Otro"
        },
        {
            nombre:"Anfibolita",
            tipo:"Metamórfica",
            imagen:"imagenes/anfibolita.jpg",
            color:"Oscura"
        },
        {
            nombre:"Esquisto",
            tipo:"Metamórfica",
            imagen:"imagenes/esquisto.jpg",
            color:"Ocre"
        },
        {
            nombre:"Mármol",
            tipo:"Metamórfica",
            imagen:"imagenes/marmol.jpg",
            color:"Clara"
        },
        {
            nombre:"Gneis",
            tipo:"Metamórfica",
            imagen:"imagenes/gneis.jpg",
            color:"Otro"
        },
        {
            nombre:"Esfalerita",
            tipo:"Metamórfica",
            imagen:"imagenes/esfalerita.jpg",
            color:"Otro"
        },
        {
            nombre:"Eclogita",
            tipo:"Metamórfica",
            imagen:"imagenes/eclogita.jpg",
            color:"Ocre"
        }
    ]
}

for (let i of rocas.arr) {
    let celda=document.createElement("div");
    celda.classList.add("celda",i.tipo,"oculto1","oculto2",i.color);
    let marco=document.createElement("div");
    marco.classList.add("marco");
    let ilust=document.createElement("img");
    ilust.classList.add("ilust");
    ilust.setAttribute("src",i.imagen);
    marco.appendChild(ilust);
    celda.appendChild(marco);
    let texto=document.createElement("div");
    texto.classList.add("texto");
    let nombreroca=document.createElement("h3");
    nombreroca.classList.add("nombreroca");
    nombreroca.innerText=i.nombre;
    texto.appendChild(nombreroca);
    let tiporoca=document.createElement("h5");
    tiporoca.classList.add("tiporoca");
    tiporoca.innerText="Tipo: "+i.tipo;
    texto.appendChild(tiporoca);
    celda.appendChild(texto);
    document.getElementById("d_rocas").appendChild(celda);

    function filtroRocas(value) {
        let buttons=document.querySelectorAll(".btn1");
        buttons.forEach((button)=>{
            if (value==button.innerText) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
        let mosaicos=document.querySelectorAll(".celda");
        mosaicos.forEach((mosaico)=>{
            if (value=="Todo") {
                mosaico.classList.remove("oculto1")
            } else {
                if (mosaico.classList.contains(value)) {
                    mosaico.classList.remove("oculto1");
                } else {
                    mosaico.classList.add("oculto1");
                }
            }
        });
    }

    function filtroColores(value) {
        let buttons2=document.querySelectorAll(".btn2");
        buttons2.forEach((button2)=>{
            if (value==button2.innerText) {
                button2.classList.add("active");
            } else {
                button2.classList.remove("active");
            }
        });
        let mosaicos2=document.querySelectorAll(".celda");
        mosaicos2.forEach((mosaico2)=>{
            if (value=="Todos") {
                mosaico2.classList.remove("oculto2")
            } else {
                if (mosaico2.classList.contains(value)) {
                    mosaico2.classList.remove("oculto2");
                } else {
                    mosaico2.classList.add("oculto2");
                }
            }
        });
    }

    window.onload=()=>{
        filtroRocas("Todo");
        filtroColores("Todos");
    }
}
