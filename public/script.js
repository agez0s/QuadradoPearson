var ing1total;
var ing2total;

function CalcularPearson() {
    let ing1 = document.getElementById("ing1-conc").value;
    let ing2 = document.getElementById("ing2-conc").value;
    let conc = document.getElementById("conc-desejada").value;

    ing1 = parseFloat(ing1)
    ing2 = parseFloat(ing2)
    conc = parseFloat(conc)
    if (ing1 > conc && ing2 > conc) { retornaErro("Os dois ingredientes não podem ter maior concentração do que a desejada"); return }
    if (ing1 < conc && ing2 < conc) { retornaErro("Os dois ingredientes não podem ter menor concentração do que a desejada"); return }
    
    let ing1partes = Math.abs(conc - ing2);
    let ing2partes = Math.abs(conc - ing1);
    document.getElementById("partes1").innerHTML = ing1partes;
    document.getElementById("partes2").innerHTML = ing2partes;

    
    ing1total = (ing1partes / (ing1partes + ing2partes)) * 100;
    ing2total = (ing2partes / (ing1partes + ing2partes)) * 100;
    document.getElementById("ing1-total").innerHTML = (ing1total.toFixed(2)).toString().replace(".", ",") + "%";
    document.getElementById("ing2-total").innerHTML = (ing2total.toFixed(2)).toString().replace(".", ",") + "%";

    calculaMix();
   
}
function retornaErro(tipoErro) {
    return document.getElementById("lastmsg").innerHTML = "<span style=\"color: red\">" + tipoErro + "</span>";
}

function calculaMix() {
    let qtdmix;
    qtdmix = document.getElementById("qtdmix").value;

    qtdmix1 = (qtdmix * ing1total / 100).toFixed(2);
    qtdmix2 = (qtdmix * ing2total / 100).toFixed(2);

    document.getElementById("lastmsg").innerHTML = "Quantidade 1º ingrediente: " + qtdmix1.toString().replace(".", ",") + "<br>Quantidade 2º ingrediente: " + qtdmix2.toString().replace(".", ",");
}

window.addEventListener('load', () => {
    const preload = document.querySelector('#preloader');
    preload.classList.add('hidden');
    preload.classList.remove('flex');
})