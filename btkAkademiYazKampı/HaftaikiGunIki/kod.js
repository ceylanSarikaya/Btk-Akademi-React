// var ali=prompt("ismin ne gardaş")
// var veli=prompt("şifreni yaz")
// console.log("ismin ne kurban"+ ali+"seni yaradan ne güzel yaratmış"+veli)
// alert("Hello")


function tikla() {
    var isim = document.getElementById("isim").value
    var soyisim = document.getElementById("soyisim").value

    var p = document.getElementById("p").innerHTML = "Selam:" + isim +"hata"+ soyisim;
}

function tikla1() {
    var sayi1 =Number(document.getElementById("sayi1").value) 
    var sayi2 =Number( document.getElementById("sayi2").value)

   document.getElementById("sayi").innerHTML= sayi1+sayi2
}

function Topla(){
    var sayi1 =Number(document.getElementById("x").value) 
    var sayi2 =Number( document.getElementById("y").value)

   document.getElementById("topla").innerHTML= sayi1+sayi2
}
function Cikar(){
    var sayi1 =Number(document.getElementById("a").value) 
    var sayi2 =Number( document.getElementById("b").value)

   document.getElementById("cikar").innerHTML= sayi1-sayi2
}
function Carp(){
    var sayi1 =Number(document.getElementById("c").value) 
    var sayi2 =Number( document.getElementById("d").value)

   document.getElementById("carp").innerHTML= sayi1*sayi2
}
function Bol(){
    var sayi1 =Number(document.getElementById("e").value) 
    var sayi2 =Number( document.getElementById("f").value)

   document.getElementById("bol").innerHTML= sayi1/sayi2
}