/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';  
import {CuentaAhorro} from  './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js';
import { Empleado } from './Empleados/Empleado.js';
import { SistemaAutenticado } from './sistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticado.login(cliente, '1111'));

//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '123434', 10000);
const director = new Director('Pedro Rivas', '220123', 12000);
const gerente = new Gerente('Elena Moreno', '220124', 15000);

console.log(empleado.verBonificacion());
empleado.asignarClave('12345');
console.log(director.verBonificacion());
console.log(gerente.verBonificacion());

console.log(SistemaAutenticado.login(empleado, '12345'));

