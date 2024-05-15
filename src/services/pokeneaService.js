const os = require("os")
const pokeneas = [
    {
        id: 1,
        nombre: "El fuicioso",
        altura: "1.68",
        habilidad: "Hacer ganar al verde!!",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/El%20fuicioso.png",
        frase_filosofica: "Solo verde a morir y sae que"
    },
    {
        id: 2,
        nombre: "El cachetes",
        altura: "1.65",
        habilidad: "Comediante",
        imagen: "https://storage.cloud.google.com/imagespokeneasjp/Cachetes.png?authuser=3",
        frase_filosofica: "Que se dice cupula"
    },
    {
        id: 3,
        nombre: "Epa Colombia",
        altura: "1.60",
        habilidad: "Keratina de la mejor",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/Epa%20Colombia.png",
        frase_filosofica: "epa epa epa colombia!"
    },
    {
        id: 4,
        nombre: "Ferxxo",
        altura: "1.72",
        habilidad: "Cantar y Chantear",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/FerxxoMor.png",
        frase_filosofica: "Lady mi amor"
    },
    {
        id: 5,
        nombre: "Anonimo xd",
        altura: "1.70 aprox",
        habilidad: "Ser raqueteado y boleteado",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/MeGustaElTrago.png",
        frase_filosofica: "Me gusta el trago"
    },
    {
        id: 6,
        nombre: "Ciclista",
        altura: "1.8 aprox",
        habilidad: "Cruzar el semaforo en rojo",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/MeGustaLaAdrenalina.png",
        frase_filosofica: "Me gusta la adrenalina"
    },
    {
        id: 7,
        nombre: "No se pai",
        altura: "1.6",
        habilidad: "No sabe la capital de bangladesh",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/No%20se%20pai.png",
        frase_filosofica: "Como yo no salgo de itagui"
    },
    {
        id: 8,
        nombre: "TapabocasMaster",
        altura: "1.8",
        habilidad: "Claramente ponerse el tapabocas no",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/TapabocasMaster.png",
        frase_filosofica: "Eso tiene 2 modos de uso"
    },
    {
        id: 9,
        nombre: "AKA Toreto",
        altura: "1.75",
        habilidad: "Voltear volquetas ajenas",
        imagen: "https://storage.googleapis.com/imagespokeneasjp/Toreto.png",
        frase_filosofica: "Yo con ganas de manejar y dejan las llaves pegadas"
    },
    
    
];

exports.getRandomPokeneaInfo = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const randomPokenea = pokeneas[randomIndex];
    return {
        id: randomPokenea.id,
        nombre: randomPokenea.nombre,
        altura: randomPokenea.altura,
        habilidad: randomPokenea.habilidad,
        imagen: randomPokenea.imagen,
        frase_filosofica: randomPokenea.frase_filosofica,
        container_id: os.hostname()
    };
};

/*
exports.getRandomPokeneaImageAndQuote = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const randomPokenea = pokeneas[randomIndex];
    return {
        imagen: randomPokenea.imagen,
        frase_filosofica: randomPokenea.frase_filosofica,
        container_id: process.env.HOSTNAME // Esto obtiene el ID del contenedor donde se está ejecutando la aplicación

    };
};
*/
