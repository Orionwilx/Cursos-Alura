# Función para imprimir el triángulo de Pascal 
def imprimirTriangulo(altura): 
  
    # Iterar a través de los números de 1 a la altura 
    for i in range(1, altura + 1): 
  
        # Obtener el número de espacios 
        espacios = altura - i 
  
        # Imprimir los espacios 
        for j in range(espacios): 
            print(" ", end = "") 
  
        # Calcular los números 
        numeros = 1
        for j in range(i): 
            print(numeros, end = " ") 
            numeros = int(numeros * (i - j) / (j + 1)) 
      
        # Ir a la siguiente línea 

imprimirTriangulo(4)