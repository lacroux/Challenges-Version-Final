function copiarTexto() {
    var textoEncriptado = document.querySelector(".caja-encriptado");
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado con éxito");
}

