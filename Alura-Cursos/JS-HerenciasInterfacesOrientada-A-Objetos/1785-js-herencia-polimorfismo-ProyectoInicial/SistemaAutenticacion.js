export class SistemaAutenticado{
    static login(usuario, clave){
        if ('autenticable' in usuario && 
            autenticable instanceof Function) 
            return usuario.autenticable(clave);
        else
            return false
    }
}
/**
 * Si autenticable es una metodo fix el error si no esta defibni la funcion con 'autenticable' in usuario
 * y para verificar si existe un atributo seria con este autenticable instanceof Function
 * 
 * esto lo hacemos con el fin de que noi nos aprezac un error con la funcion polimorfica ya que puede que en alguna
 * instacias el metodo autenticable no exista y en otras instancias autenticable puede ser un atributo y no un metodo 
 * con estas dos verficaciones podemos fixear ese problema protegiendo nuestro codigo
 */