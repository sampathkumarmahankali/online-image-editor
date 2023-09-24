const sam=()=>{
    const btn=document.querySelector(".onds");
    btn.classList.toggle("visible");
}
const preview_img=document.querySelector(".imge");
const choose=document.querySelector(".choose");
const file_input=document.querySelector(".file-input");
const option=document.querySelectorAll(".option");
const save=document.querySelector(".save");

let grayscale=0;
let blured=0;
let contrast=100;
let sepia=0;
option.forEach(opt=>{
    opt.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
       
        opt.classList.add("active");
     if(opt.id=="b1"){
            grayscale=100;
            preview_img.style.filter=`grayscale(100%)`
             blured=0;
             contrast=100;
             sepia=0;
        }else if(opt.id=="b2"){
            blured=1;
            preview_img.style.filter=`blur(1px)`
            grayscale=0;
             contrast=100;
             sepia=0;
        }else if(opt.id=="b3"){
            contrast=150;
            preview_img.style.filter=`contrast(150%)`
            grayscale=0;
             blured=0;
             sepia=0;
        }else if(opt.id=="b4"){
            sepia=100;
            preview_img.style.filter=`sepia(100%)`;
            grayscale=0;
             blured=0;
             contrast=100;
        }else  if(opt.id=="b5"){
            preview_img.style.filter=`none`;
                grayscale=0;
                 blured=0;
                 contrast=100;
                 sepia=0;

        }
    })
})

const loadimage=()=>{
    let file=file_input.files[0];
    if(!file) return;
    preview_img.src=URL.createObjectURL(file);
    document.querySelector(".panelin").classList.remove("disable")
}

const saveimg=()=>{
    const canvas=document.createElement("canvas");
    const ctx=canvas.getContext("2d");
    canvas.width=preview_img.naturalWidth;
    canvas.height=preview_img.naturalHeight;
    ctx.filter=`grayscale(${grayscale}%) blur(${blured}px) contrast(${contrast}%) sepia(${sepia}%)`;
    ctx.drawImage(preview_img,0,0,canvas.width,canvas.height);
    let link=document.createElement("a");
    link.href=canvas.toDataURL();
    link.download="editedimg.jpg";
    link.click();
}
file_input.addEventListener("change",loadimage);
save.addEventListener("click",saveimg);
choose.addEventListener("click",()=>{file_input.click()});