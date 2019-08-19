// REQUIRED
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// LÓGICA
let comando = argv._[0];
switch (comando) {
    case 'listar':
        //console.log(`Listar: argv.base = ${argv.base} | argv.limite = ${argv.limite}`);
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log('AVISO: '.gray + 'Datos listados en pantalla.'.green))
            .catch(e => console.log(e.red));
        break;

    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('AVISO: '.gray + `El archivo ${archivo.nombre} ha sido creado con éxito.`.green))
            .catch(e => console.log(e.red));
        break;

    default:
        console.log('Comando no reconocido.'.red);
        break;
}

// variables
//let base = 1;

// console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];