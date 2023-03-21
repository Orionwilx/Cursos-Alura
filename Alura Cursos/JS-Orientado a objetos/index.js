class Cliente
{
    nombre;
    dniCliente;
    rutCliente;
}
class CuentaCliente
{
    numeroCuenta;
    #saldo;
    agencia;

    constructor(){
        this.#saldo = 0;
        this.agencia = '';
        this.numeroCuenta = 0;
    }

    deposiCuenta (valor){
        if(valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo;
        
    }

    retirarCuenta(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;         
    }

}

const cliente1 = new Cliente();

cliente1.nombre = "Pepipo";
cliente1.dniCliente = 2012384;
cliente1.rutCliente = "RUTCLIENTE";

const CuentaC1 = new CuentaCliente();

CuentaC1.numeroCuenta = 1;
CuentaC1.deposiCuenta(1000);
CuentaC1.agencia = "Bancolombia";

let saldo = CuentaC1.verSaldo();
console.log('El Saldo actual es: '+ saldo);

saldo = CuentaC1.deposiCuenta(100);
console.log('El Saldo actual es: '+ saldo);

saldo = CuentaC1.retirarCuenta(50);
console.log('El Saldo actual es: '+ saldo);

