function CalcularPearson() {
    let ing1;
    let ing2;
    let conc;
    ing1  = document.getElementById("ing1-conc").value;
    ing2 = document.getElementById("ing2-conc").value;
    conc = document.getElementById("conc-desejada").value;

    let ing1partes;
    let ing2partes;
    ing1partes = Math.abs(conc - ing2);
    ing2partes = Math.abs(conc - ing1);
    document.getElementById("partes1").innerHTML = ing1partes;
    document.getElementById("partes2").innerHTML = ing2partes;

    let ing1total;
    let ing2total;
    ing1total = (ing1partes / (ing1partes + ing2partes)) * 100;
    ing2total = (ing2partes / (ing1partes + ing2partes)) * 100;
    document.getElementById("ing1-total").innerHTML = ing1total.toFixed(2) + "%";
    document.getElementById("ing2-total").innerHTML = ing2total.toFixed(2) + "%";


    
    
}