import {CuentaCliente} from "./CuentaCorriente.js"
import {Cliente} from './Cliente.js'

const cliente1 = new Cliente('Pepito', 1, '1111');

const cliente2 = new Cliente('Maria', 2, '2222');



const CuentaC1 = new CuentaCliente(cliente1, 'Bancolombia', 1);
CuentaC1.deposiCuenta(1000);

const CuentaC2 = new CuentaCliente(cliente2, 'BancoPopular', 2);
CuentaC2.deposiCuenta(500);




// let saldo = CuentaC1.verSaldo();
// console.log('El Saldo actual de Pepito es: '+ saldo);

// saldo = CuentaC2.verSaldo();
// console.log('El Saldo actual de Maria es: '+ saldo);

// CuentaC1.trnsdferirParaCuenta(300, CuentaC2);

console.log(CuentaC1.cliente);
console.log(CuentaCliente.cantidadCuentas);
