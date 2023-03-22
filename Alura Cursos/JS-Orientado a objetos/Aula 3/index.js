import {CuentaCliente} from "./CuentaCorriente.js"
import {Cliente} from './Cliente.js'

const cliente1 = new Cliente();

cliente1.nombre = "Pepipo";
cliente1.dniCliente = 2012384;
cliente1.rutCliente = "RUTCLIENTE";


const CuentaC1 = new CuentaCliente();
CuentaC1.cliente = cliente1;
CuentaC1.numeroCuenta = 1;
CuentaC1.deposiCuenta(1000);
CuentaC1.agencia = "Bancolombia";



const cliente2 = new Cliente();

cliente2.nombre = "Maria";
cliente2.dniCliente = 2012385;
cliente2.rutCliente = "RUTCLIENTE";


const CuentaC2 = new CuentaCliente();
CuentaC2.cliente = cliente2;
CuentaC2.numeroCuenta = 2;
CuentaC2.deposiCuenta(500);
CuentaC2.agencia = "Bancolombia";



let saldo = CuentaC1.verSaldo();
console.log('El Saldo actual de Pepito es: '+ saldo);

saldo = CuentaC2.verSaldo();
console.log('El Saldo actual de Maria es: '+ saldo);

CuentaC1.trnsdferirParaCuenta(300, CuentaC2);


