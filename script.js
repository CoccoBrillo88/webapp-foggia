function changeMedia(type) {
    const media = document.getElementById("media");
    const text = document.getElementById("text");

    if (type === "img") {
        media.src = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Foggia_Piazza_Cavour.jpg";
        text.innerHTML = `
            Foggia è una città della Puglia famosa per la sua agricoltura.
            È conosciuta come il “granaio d’Italia” grazie alla vasta produzione di cereali.
        `;
    }

    if (type === "map") {
        media.src = "https://upload.wikimedia.org/wikipedia/commons/5/5a/Foggia_in_Italy.svg";
        text.innerHTML = `
            Foggia si trova nel nord della Puglia, al centro del Tavoliere.
            La sua posizione la rende un importante nodo logistico e agricolo.
        `;
    }

    if (type === "video") {
        media.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Video_icon.svg/1024px-Video_icon.svg.png";
        text.innerHTML = `
            Qui potrebbe essere inserito un video promozionale della città:
            panorami, centro storico, tradizioni e gastronomia locale.
        `;
    }

    if (type === "3d") {
        media.src = "https://upload.wikimedia.org/wikipedia/commons/6/6b/3D_icon.png";
        text.innerHTML = `
            In questa sezione si potrebbe visualizzare una mappa 3D
            del centro storico o dei principali monumenti di Foggia.
        `;
    }
}
