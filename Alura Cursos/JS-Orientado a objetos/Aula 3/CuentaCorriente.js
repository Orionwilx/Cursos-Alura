

export class CuentaCliente
{
    cliente;
    agencia;
    numeroCuenta;
    #saldo;
    

    constructor(){
        this.cliente = null;
        this.agencia = '';
        this.numeroCuenta = 0;
        this.#saldo = 0;
        
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
