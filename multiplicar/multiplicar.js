// requieds
const fs = require('fs');

let listarTabla = async(base, limite) => {
    if (!Number(base)) throw new Error(`El valor de base (${base}) no es un número.`);
    if (!Number(limite)) throw new Error(`El valor de limite (${limite}) no es un número.`);
    if (limite < 1) throw new Error(`El valor de limite (${limite}) debe ser mayor que 0.`);
    console.log('###########################'.gray);
    console.log(`# TABLA DEL ${base}, DEL 1 AL ${limite}`.gray);
    console.log('###########################'.gray);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.cyan);
    };
    return
};

let crearArchivo = async(base, limite) => {
    if (!Number(base)) throw new Error(`El valor de base (${base}) no es un número.`);
    if (!Number(limite)) throw new Error(`El valor de limite (${limite}) no es un número.`);
    if (limite < 1) throw new Error(`El valor de limite (${limite}) debe ser mayor que 0.`);
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw new Error(`No se puede escribir en el archivo: ../tablas/tabla-${base}.txt `);

    });
    return {
        nombre: `tabla-${base}.txt`
    }
};

module.exports = {
    crearArchivo,
    listarTabla
}