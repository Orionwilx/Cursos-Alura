import { Cliente } from "./Cliente.js";


export class CuentaCliente
{
    #cliente;
    agencia;
    numeroCuenta;
    #saldo;
    static cantidadCuentas = 0;
    
    set cliente(valor){
        if(valor instanceof Cliente)
            this.#cliente = valor;
    }
    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, agencia, numeroCuenta){
        this.cliente = cliente;
        this.agencia = agencia;
        this.numeroCuenta = numeroCuenta;
        this.#saldo = 0;
        CuentaCliente.cantidadCuentas++;
        
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

    trnsdferirParaCuenta(valor, cuentaDestino){
        this.retirarCuenta(valor);
        cuentaDestino.deposiCuenta(valor);
    }

}
