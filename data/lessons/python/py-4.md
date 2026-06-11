# Condicionales y bucles

## Lo que vas a aprender

- Cómo hacer que tu programa **decida** qué hacer con `if`, `elif` y `else`.
- Cómo **repetir** acciones con `for` y `while`.
- Cómo combinar varias condiciones con `and`, `or` y `not`.
- Cuándo usar `break` y `continue` para controlar el flujo.

---

## Tomar decisiones: if / elif / else

Hasta acá tus programas hacían siempre lo mismo. Ahora vas a darles cabeza: que **decidan** qué hacer según los datos.

### if básico

```python
edad = int(input("Tu edad: "))

if edad >= 18:
    print("Sos mayor de edad.")
```

Si la condición (`edad >= 18`) es **verdadera**, ejecuta el bloque indentado. Si es falsa, **no hace nada**.

### if / else

Cuando querés que pase **una cosa u otra**:

```python
edad = int(input("Tu edad: "))

if edad >= 18:
    print("Sos mayor de edad.")
else:
    print("Todavía sos menor.")
```

### if / elif / else (varias opciones)

`elif` significa "else if" — "si no, entonces si...".

```python
nota = int(input("Tu nota (1-10): "))

if nota >= 9:
    print("Excelente!")
elif nota >= 7:
    print("Bien")
elif nota >= 4:
    print("Aprobado justito")
else:
    print("Desaprobado")
```

Python **evalúa de arriba hacia abajo** y ejecuta el **primer bloque que dé verdadero**. Una vez que uno se cumple, ignora los demás.

> 💡 **La indentación es obligatoria**. El bloque que está adentro del `if` debe estar **indentado** (4 espacios). Si no, Python te marca error.

---

## Combinar condiciones: and, or, not

### and (y)

Las **dos** condiciones deben ser verdaderas:

```python
edad = 22
tiene_carnet = True

if edad >= 18 and tiene_carnet:
    print("Puede manejar")
```

### or (o)

**Al menos una** debe ser verdadera:

```python
dia = "sabado"

if dia == "sabado" or dia == "domingo":
    print("Es fin de semana")
```

### not (no)

Niega la condición:

```python
lluviendo = False

if not lluviendo:
    print("Salí a caminar")
```

### Combinaciones

```python
edad = 25
tiene_entrada = True
es_acompaniado = False

if edad >= 18 and (tiene_entrada or es_acompaniado):
    print("Puede entrar")
```

---

## Repetir cosas: for

Los **bucles** te permiten ejecutar un bloque de código **muchas veces** sin copiarlo.

### Repetir N veces

```python
for i in range(5):
    print(f"Hola número {i}")
```

`range(5)` genera los números 0, 1, 2, 3, 4. La variable `i` toma cada uno por turno.

Salida:
```
Hola número 0
Hola número 1
Hola número 2
Hola número 3
Hola número 4
```

### Empezar desde otro número

```python
for i in range(1, 11):    # del 1 al 10 (el 11 no entra)
    print(i)
```

### Saltos

```python
for i in range(0, 20, 2):   # de 2 en 2
    print(i)   # 0, 2, 4, 6, ..., 18
```

### Recorrer una lista de cosas

```python
nombres = ["Ana", "Juan", "Lucía", "Pedro"]

for nombre in nombres:
    print(f"Hola, {nombre}!")
```

Salida:
```
Hola, Ana!
Hola, Juan!
Hola, Lucía!
Hola, Pedro!
```

### Recorrer un texto letra por letra

```python
palabra = "Python"

for letra in palabra:
    print(letra)
```

---

## Repetir hasta que pase algo: while

`while` repite mientras una condición sea verdadera.

```python
contador = 0

while contador < 5:
    print(f"Contador: {contador}")
    contador += 1
```

Salida:
```
Contador: 0
Contador: 1
Contador: 2
Contador: 3
Contador: 4
```

Cuando `contador` llega a 5, la condición es falsa y sale del bucle.

> ⚠️ **Cuidado con el bucle infinito**. Si te olvidás de actualizar la variable de control, el programa nunca termina:
>
> ```python
> while True:
>     print("infinito!")   # nunca para
> ```
>
> Si te pasa esto, apretá `Ctrl + C` en la terminal para cortarlo.

### Cuándo usar for vs while

- **for**: cuando sabés cuántas veces vas a repetir o tenés una lista a recorrer.
- **while**: cuando no sabés cuántas veces — repetís hasta que pase algo.

```python
# Pedir contraseña hasta que sea correcta
contrasenia = ""
while contrasenia != "secreto123":
    contrasenia = input("Contraseña: ")
print("¡Bienvenido!")
```

---

## Controlar el flujo: break y continue

### break: salir del bucle

```python
for i in range(100):
    if i == 5:
        break    # corta el bucle
    print(i)
```

Imprime 0, 1, 2, 3, 4 y termina.

### continue: saltar a la siguiente iteración

```python
for i in range(10):
    if i % 2 == 0:
        continue    # salta los pares
    print(i)
```

Imprime solo los impares: 1, 3, 5, 7, 9.

---

## Anidar: if dentro de for, for dentro de if

Podés combinar todo lo que aprendiste:

```python
nombres = ["Ana", "Juan", "Lucía", "Pedro"]

for nombre in nombres:
    if nombre.startswith("J"):
        print(f"{nombre} empieza con J")
    else:
        print(f"{nombre} no empieza con J")
```

Mientras la indentación sea correcta, podés anidar todo lo que quieras.

---

## Ejercicio práctico

Vas a hacer **cuatro programas** que combinen condicionales y bucles.

### Programa 1: clasificador de números

```python
print("Clasificador de números")
print("Tipeá 0 para salir.")

while True:
    numero = int(input("Dame un número: "))

    if numero == 0:
        print("Hasta luego!")
        break

    if numero > 0:
        print(f"{numero} es positivo")
    else:
        print(f"{numero} es negativo")

    if numero % 2 == 0:
        print(f"{numero} es par")
    else:
        print(f"{numero} es impar")
```

### Programa 2: tabla de multiplicar

```python
n = int(input("Tabla de multiplicar de qué número: "))

for i in range(1, 11):
    resultado = n * i
    print(f"{n} x {i} = {resultado}")
```

### Programa 3: adivinar el número (versión simple)

```python
import random

numero_secreto = random.randint(1, 100)
intentos = 0

print("Adiviná el número entre 1 y 100.")

while True:
    intentos += 1
    intento = int(input("Tu intento: "))

    if intento == numero_secreto:
        print(f"¡Le acertaste en {intentos} intentos!")
        break
    elif intento < numero_secreto:
        print("Más alto")
    else:
        print("Más bajo")
```

### Programa 4: suma de los primeros N números

```python
n = int(input("Hasta qué número quiero sumar: "))

suma = 0
for i in range(1, n + 1):
    suma += i

print(f"La suma del 1 al {n} es: {suma}")
```

Probá los 4. Cambialos. Rompelos a propósito y arreglalos. **Así se aprende.**

---

## Resumen

- **`if / elif / else`** te dejan tomar decisiones según el valor de las variables.
- La **indentación** de los bloques es obligatoria.
- Las condiciones se combinan con **`and`, `or`, `not`**.
- **`for`** repite una cantidad determinada o recorre una lista.
- **`while`** repite mientras una condición sea verdadera.
- **`break`** corta el bucle; **`continue`** salta a la siguiente vuelta.
- Podés **anidar** if dentro de for, for dentro de if, etc.
- Cuidado con los **bucles infinitos** (cortás con `Ctrl + C`).

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Condicional** (if/else) — control de flujo según una condición.
- **Operador lógico** (and, or, not) — combinar condiciones.
- **Bucle** o **loop** — repetir un bloque.
- **for** — bucle con cantidad conocida.
- **while** — bucle con condición.
- **range()** — genera secuencias de números.
- **break / continue** — controles del bucle.
- **Indentación** — los espacios al inicio que definen los bloques.
- **Bucle infinito** — cuando un while no termina nunca.
- **Anidamiento** — un bloque adentro de otro.

> ✨ **Próximo paso:** En el módulo siguiente vas a aprender a usar **funciones** para reutilizar código y **estructuras de datos** (listas, diccionarios) para guardar varias cosas juntas.
