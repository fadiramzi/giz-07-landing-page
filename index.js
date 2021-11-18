function closenav() {
    document.getElementById("res-nav").style.display="none";
    const costumwidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (costumwidth < 1121) {
        document.getElementById("btn-burger-mene").style.display="inline-block";
    }
}

function opennav() {
    document.getElementById("res-nav").style.display="flex";
    document.getElementById("btn-burger-mene").style.display="none";
}