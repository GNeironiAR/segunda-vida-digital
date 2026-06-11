# Funciones y estructuras de datos

## Lo que vas a aprender

- Qué es una **función** y por qué te va a salvar la vida.
- Cómo definir y llamar **funciones propias**.
- Cómo guardar muchos valores con **listas, tuplas y diccionarios**.
- Las operaciones más comunes sobre cada estructura.

---

## Por qué necesitás funciones

Imaginá que en tu programa necesitás saludar al usuario varias veces. Sin funciones, harías:

```python
print("=" * 30)
print(f"Hola, Ana!")
print("=" * 30)

# ... más código ...

print("=" * 30)
print(f"Hola, Juan!")
print("=" * 30)
```

Cada vez que querés saludar, repetís lo mismo. **Mal**. Con funciones:

```python
def saludar(nombre):
    print("=" * 30)
    print(f"Hola, {nombre}!")
    print("=" * 30)

saludar("Ana")
saludar("Juan")
saludar("Pedro")
```

**Una sola definición, infinitos usos**. Si más adelante querés cambiar cómo se saluda, lo cambiás **en un solo lugar**.

> 💡 La regla de oro de la programación: **DRY** — *Don't Repeat Yourself* (no te repitas).

---

## Cómo definir una función

```python
def nombre_de_funcion(parametros):
    # cuerpo de la función
    return valor    # opcional
```

- `def` es la palabra clave.
- Después va el **nombre** que vos elegís (snake_case).
- Entre paréntesis, los **parámetros** que recibe (puede no recibir nada).
- Dos puntos `:` al final.
- El cuerpo está **indentado**.
- `return` devuelve un valor (opcional).

### Ejemplo simple

```python
def saludar():
    print("Hola!")

saludar()    # imprime "Hola!"
```

### Con parámetros

```python
def saludar(nombre):
    print(f"Hola, {nombre}!")

saludar("Ana")
saludar("Juan")
```

### Con varios parámetros

```python
def sumar(a, b):
    resultado = a + b
    return resultado

total = sumar(5, 3)
print(total)    # 8
```

`return` "devuelve" un valor. Lo podés guardar en una variable o usarlo directo:

```python
print(sumar(10, 20))    # 30
```

### Valores por defecto

```python
def saludar(nombre, saludo="Hola"):
    print(f"{saludo}, {nombre}!")

saludar("Ana")              # Hola, Ana!
saludar("Juan", "Qué tal")  # Qué tal, Juan!
```

---

## Variables locales vs. globales

Una variable creada **dentro** de una función solo existe ahí adentro:

```python
def calcular():
    resultado = 10 + 5
    return resultado

calcular()
print(resultado)    # ERROR: resultado no existe afuera
```

Para usar el resultado afuera:

```python
def calcular():
    return 10 + 5

resultado = calcular()
print(resultado)    # 15
```

---

## Listas: una caja con muchas cosas

Una **lista** te permite guardar **varios valores** en una sola variable.

```python
frutas = ["manzana", "banana", "pera", "uva"]
edades = [25, 32, 18, 47]
mezcla = [1, "Hola", True, 3.14]    # se pueden mezclar tipos
```

### Acceder a elementos

Cada elemento tiene un **índice** que empieza en **0**:

```python
frutas = ["manzana", "banana", "pera", "uva"]

print(frutas[0])     # manzana
print(frutas[1])     # banana
print(frutas[-1])    # uva (el último)
print(frutas[-2])    # pera (el penúltimo)
```

### Operaciones más comunes

```python
frutas = ["manzana", "banana", "pera"]

# Agregar al final
frutas.append("uva")
# ["manzana", "banana", "pera", "uva"]

# Sacar uno por valor
frutas.remove("banana")
# ["manzana", "pera", "uva"]

# Insertar en una posición
frutas.insert(0, "ananá")
# ["ananá", "manzana", "pera", "uva"]

# Cuántos elementos tiene
print(len(frutas))   # 4

# Saber si algo está
print("pera" in frutas)   # True

# Ordenar
frutas.sort()
print(frutas)   # ['ananá', 'manzana', 'pera', 'uva']
```

### Recorrer una lista

```python
for fruta in frutas:
    print(f"Me gusta la {fruta}")
```

### Modificar un elemento

```python
frutas[0] = "kiwi"
```

### Listas de listas

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matriz[1][2])    # 6 (fila 1, columna 2)
```

---

## Tuplas: como listas pero inmutables

Una **tupla** es como una lista, pero **no se puede modificar** después de creada.

```python
coordenadas = (10, 20)
colores_argentina = ("celeste", "blanco")

print(coordenadas[0])    # 10
```

Si intentás modificar, error:

```python
coordenadas[0] = 50   # TypeError
```

Sirven cuando los datos **no deberían cambiar** (DNI, coordenadas, días de la semana).

---

## Diccionarios: pares de clave-valor

Un **diccionario** guarda pares de **clave: valor**. Es como un libro: cada palabra (clave) tiene un significado (valor).

```python
persona = {
    "nombre": "Ana",
    "edad": 25,
    "ciudad": "Córdoba"
}
```

### Acceder

```python
print(persona["nombre"])   # Ana
print(persona["edad"])     # 25
```

### Modificar y agregar

```python
persona["edad"] = 26              # modifica
persona["telefono"] = "11-1234"    # agrega
```

### Recorrer

```python
for clave, valor in persona.items():
    print(f"{clave}: {valor}")
```

Salida:
```
nombre: Ana
edad: 26
ciudad: Córdoba
telefono: 11-1234
```

### Otras operaciones

```python
# Saber si una clave existe
print("nombre" in persona)   # True

# Borrar una entrada
del persona["telefono"]

# Listar claves
print(persona.keys())    # dict_keys(['nombre', 'edad', 'ciudad'])

# Listar valores
print(persona.values())  # dict_values(['Ana', 26, 'Córdoba'])
```

### Diccionarios anidados

```python
empresa = {
    "nombre": "Acme",
    "empleados": {
        "1": {"nombre": "Ana", "salario": 80000},
        "2": {"nombre": "Juan", "salario": 90000}
    }
}

print(empresa["empleados"]["1"]["nombre"])   # Ana
```

---

## Combinando todo

Acá un ejemplo realista que junta funciones, listas y diccionarios:

```python
def imprimir_lista_compras(items):
    print("=== LISTA DE COMPRAS ===")
    total = 0
    for item in items:
        nombre = item["nombre"]
        precio = item["precio"]
        cantidad = item["cantidad"]
        subtotal = precio * cantidad
        total += subtotal
        print(f"- {nombre} x{cantidad}: ${subtotal}")
    print(f"TOTAL: ${total}")

compras = [
    {"nombre": "Pan", "precio": 1500, "cantidad": 2},
    {"nombre": "Leche", "precio": 2200, "cantidad": 1},
    {"nombre": "Queso", "precio": 4500, "cantidad": 3}
]

imprimir_lista_compras(compras)
```

Salida:
```
=== LISTA DE COMPRAS ===
- Pan x2: $3000
- Leche x1: $2200
- Queso x3: $13500
TOTAL: $18700
```

---

## Ejercicio práctico

Vas a hacer **tres programas** combinando todo.

### Programa 1: Promedio con función

```python
def calcular_promedio(numeros):
    suma = 0
    for n in numeros:
        suma += n
    promedio = suma / len(numeros)
    return promedio

notas = [7, 8, 9, 6, 10, 7]
prom = calcular_promedio(notas)
print(f"Promedio: {prom:.2f}")
```

### Programa 2: Agenda básica

```python
agenda = {}

while True:
    print("\n1. Agregar contacto")
    print("2. Ver agenda")
    print("3. Buscar contacto")
    print("4. Salir")

    opcion = input("Elegí: ")

    if opcion == "1":
        nombre = input("Nombre: ")
        telefono = input("Teléfono: ")
        agenda[nombre] = telefono
        print(f"{nombre} agregado!")

    elif opcion == "2":
        for nombre, telefono in agenda.items():
            print(f"{nombre}: {telefono}")

    elif opcion == "3":
        nombre = input("Nombre a buscar: ")
        if nombre in agenda:
            print(f"{nombre}: {agenda[nombre]}")
        else:
            print("No está en la agenda")

    elif opcion == "4":
        print("Chau!")
        break
```

### Programa 3: Lista de tareas

```python
tareas = []

def agregar_tarea(descripcion):
    tareas.append({"desc": descripcion, "hecha": False})

def marcar_hecha(indice):
    tareas[indice]["hecha"] = True

def mostrar_tareas():
    for i, tarea in enumerate(tareas):
        estado = "✓" if tarea["hecha"] else " "
        print(f"[{estado}] {i}: {tarea['desc']}")

agregar_tarea("Comprar pan")
agregar_tarea("Estudiar Python")
agregar_tarea("Pasear al perro")

mostrar_tareas()
marcar_hecha(0)
print("---")
mostrar_tareas()
```

---

## Resumen

- Las **funciones** evitan repetir código. Se definen con `def`.
- Pueden recibir **parámetros** y devolver valores con `return`.
- Las **listas** guardan varios valores ordenados. Se accede con índices (empiezan en 0).
- Las **tuplas** son listas inmutables.
- Los **diccionarios** guardan pares clave-valor. Se accede con `dic["clave"]`.
- Podés **combinar todo**: listas de diccionarios, diccionarios con listas adentro, funciones que reciben listas.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Función** — bloque de código reutilizable.
- **def** — la palabra clave para definir funciones en Python.
- **Parámetro** — lo que recibe una función.
- **return** — lo que devuelve la función.
- **Variable local / global** — alcance de las variables.
- **Lista** (`list`) — colección ordenada y modificable.
- **Tupla** (`tuple`) — colección ordenada e inmutable.
- **Diccionario** (`dict`) — colección de pares clave-valor.
- **Índice** — la posición de un elemento (empieza en 0).
- **len()** — devuelve la cantidad de elementos.
- **DRY** — "Don't Repeat Yourself", principio clave de programación.

> ✨ **Próximo paso:** En el último módulo del path vas a armar **tu primer mini proyecto** combinando todo lo aprendido. Vas a salir con un programa real funcionando, hecho por vos.
