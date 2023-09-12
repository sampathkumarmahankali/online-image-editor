
let navToggle = document.getElementsByClassName('btn');
function sam(){
    let navMenu = document.querySelector('.onds');
    navMenu.classList.toggle("visible");
}
const fileinput=document.querySelector(".file-input");
const choose=document.querySelector(".choosefile");
const preview_img=document.querySelector(".imge");
const dis=document.querySelector(".container");
const filteropt=document.querySelectorAll(".filters button");
const filter_name=document.querySelector(".filterinfo .filtername");
const filtslider=document.querySelector(".slider input");
const filtvalue=document.querySelector(".filterinfo .value");
let brightness=100;
let saturation=100;
let grayscale=0;
let inversion=0;

const loadimage = ()=>{
    let file=fileinput.files[0];
    if(!file) return;
    preview_img.src=URL.createObjectURL(file);
    dis.classList.remove("disable");
}

fileinput.addEventListener("change",loadimage);
choose.addEventListener("click",() => fileinput.click());
filteropt.forEach(Option=>{
    Option.addEventListener("click",()=>{
        document.querySelector(".filters .active").classList.remove("active");
        Option.classList.add("active");
        filter_name.innerHTML=Option.innerText;
        if(Option.id==="Brightness"){
            filtslider.max=200;
           filtslider.value=brightness;
           filtvalue.innerText=filtslider.value;
        }else if(Option.id==="Saturation"){
            filtslider.max=200;
            filtslider.value=saturation;
           filtvalue.innerText=filtslider.value;
        }else if(Option.id==="Grayscale"){
            filtslider.max=100;
            filtslider.value=grayscale;
           filtvalue.innerText=filtslider.value;
        }else if(Option.id==="inversion"){
            filtslider.max=100;
            filtslider.value=inversion;
           filtvalue.innerText=filtslider.value;
        }
    })
})

const updatefilter = ()=>{
   filtvalue.innerText=filtslider.value;
   const selecfilter=document.querySelector(".filters .active");

   if(selecfilter.id==="Brightness"){
    brightness=filtslider.value;
   }else if(selecfilter.id==="Saturation"){
    saturation=filtslider.value;
   }else if(selecfilter.id==="Grayscale"){
    grayscale=filtslider.value;
   }else if(selecfilter.id==="inversion"){
    inversion=filtslider.value;
   }
   applyfilters();
}

filtslider.addEventListener("input",updatefilter);