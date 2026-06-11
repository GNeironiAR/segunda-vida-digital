# Variables, tipos y operaciones

## Lo que vas a aprender

- Qué es una **variable** y cómo guardar información.
- Los **tipos de datos** básicos de Python.
- Cómo hacer **operaciones** y combinarlas.
- Cómo **convertir** entre tipos cuando lo necesites.

---

## ¿Qué es una variable?

Una **variable** es como una **caja con un nombre** donde guardás algo. Cuando le ponés un nombre y le metés un valor, podés volver a usarlo después.

```python
edad = 25
nombre = "Ana"
es_estudiante = True
```

En este ejemplo:
- `edad` es una variable que guarda el número `25`.
- `nombre` guarda el texto `"Ana"`.
- `es_estudiante` guarda el valor lógico `True` (verdadero).

Después, podés usarlas en cualquier parte del código:

```python
print(f"{nombre} tiene {edad} años.")
# Salida: Ana tiene 25 años.
```

---

## Reglas para nombres de variables

- Solo letras, números y guión bajo (`_`). **Sin espacios**.
- No pueden empezar con número.
- Son **sensibles a mayúsculas**: `edad` y `Edad` son distintas.
- No uses **palabras reservadas** como `print`, `if`, `for` (Python las usa para sí mismo).
- Convención: usá **snake_case** (palabras en minúscula separadas por `_`).

| ❌ Mal | ✅ Bien |
|---|---|
| `1edad` | `edad_uno` |
| `mi nombre` | `mi_nombre` |
| `print` | `texto_a_imprimir` |
| `EdadDelUsuario` | `edad_del_usuario` |

---

## Los tipos de datos básicos

Python tiene varios tipos. Estos son los esenciales:

### 1. `str` — texto (string)

Cualquier cosa entre comillas (simples `'` o dobles `"`).

```python
saludo = "Hola"
nombre = 'Ana'
mensaje = "Tiene 25 años"
```

### 2. `int` — números enteros

Sin coma decimal.

```python
edad = 25
cantidad = 100
temperatura = -3
```

### 3. `float` — números decimales

Con coma decimal (en Python se usa el **punto**, no la coma).

```python
altura = 1.75
precio = 199.99
pi = 3.14159
```

### 4. `bool` — verdadero o falso (booleano)

Solo dos valores posibles: `True` o `False`.

```python
es_mayor = True
tiene_descuento = False
```

### 5. `None` — vacío

Significa "nada", "ningún valor".

```python
respuesta = None
```

---

## Cómo saber qué tipo es una variable

Python te permite preguntarle a una variable qué tipo tiene:

```python
edad = 25
print(type(edad))     # <class 'int'>

precio = 99.99
print(type(precio))   # <class 'float'>

nombre = "Ana"
print(type(nombre))   # <class 'str'>
```

---

## Operaciones con números

Python sabe hacer todas las operaciones matemáticas básicas:

```python
suma = 5 + 3           # 8
resta = 10 - 4         # 6
multiplicacion = 6 * 7 # 42
division = 20 / 4      # 5.0 (siempre da float)
division_entera = 20 // 6   # 3 (descarta decimales)
resto = 20 % 6         # 2 (el resto de dividir)
potencia = 2 ** 10     # 1024 (2 elevado a la 10)
```

### Orden de operaciones

Funciona como en matemática: paréntesis primero, después multiplicación/división, después suma/resta.

```python
resultado = 2 + 3 * 4         # 14, no 20
resultado = (2 + 3) * 4       # 20
```

---

## Operaciones con texto

### Concatenar (juntar)

```python
nombre = "Ana"
apellido = "Pérez"
completo = nombre + " " + apellido
print(completo)   # Ana Pérez
```

### Multiplicar texto

```python
linea = "-" * 30
print(linea)   # ------------------------------
```

### F-strings (la forma moderna de armar textos)

```python
nombre = "Ana"
edad = 25
print(f"{nombre} tiene {edad} años.")
# Salida: Ana tiene 25 años.
```

La `f` antes de las comillas te permite meter variables entre llaves `{}`. Es **mucho más limpio** que concatenar con `+`.

Podés hacer operaciones dentro:

```python
precio = 100
print(f"Con IVA: ${precio * 1.21}")
# Con IVA: $121.0
```

---

## Convertir entre tipos

A veces necesitás cambiar el tipo de una variable. Por ejemplo, cuando usás `input()`, lo que ingresa el usuario **siempre viene como texto**.

```python
edad = input("¿Cuántos años tenés? ")
print(type(edad))   # <class 'str'>

# Para usarlo como número:
edad = int(edad)
print(type(edad))   # <class 'int'>
```

Las funciones de conversión:

| Función | Convierte a |
|---|---|
| `int(x)` | Entero |
| `float(x)` | Decimal |
| `str(x)` | Texto |
| `bool(x)` | Booleano |

Ejemplos:

```python
numero = int("42")          # 42
precio = float("99.99")     # 99.99
texto = str(25)             # "25"
```

### Cuando no se puede convertir

Si intentás convertir algo imposible, Python te tira un error:

```python
edad = int("veintiocho")   # ValueError!
```

---

## Operaciones de comparación

Las usás para comparar valores. Devuelven `True` o `False`:

| Operador | Significado |
|---|---|
| `==` | Igual a |
| `!=` | Distinto a |
| `<` | Menor que |
| `>` | Mayor que |
| `<=` | Menor o igual |
| `>=` | Mayor o igual |

```python
edad = 18
print(edad >= 18)     # True
print(edad == 25)     # False
print(edad != 30)     # True
```

> ⚠️ `=` asigna (es para guardar valores). `==` compara. **Nunca los confundas**: `x = 5` guarda 5 en x; `x == 5` pregunta "¿x vale 5?".

---

## Modificar variables

Las variables se pueden **cambiar** todas las veces que quieras.

```python
contador = 0
contador = contador + 1   # ahora vale 1
contador = contador + 1   # ahora vale 2

# Lo mismo, abreviado:
contador += 1   # suma 1
contador -= 1   # resta 1
contador *= 2   # multiplica por 2
```

---

## Input + tipos: el truco más común

Casi siempre que pidas datos al usuario, vas a tener que convertirlos.

```python
nombre = input("Tu nombre: ")        # str (no necesita conversión)
edad = int(input("Tu edad: "))       # convertimos a int
peso = float(input("Tu peso: "))     # convertimos a float

print(f"{nombre}, tenés {edad} años y pesás {peso} kg.")
```

> 💡 Si el usuario escribe algo no convertible (por ejemplo, "hola" cuando esperás un número), tu programa va a explotar. En módulos posteriores vas a aprender a manejar eso.

---

## Ejercicio práctico

Vas a hacer **tres mini programas** para fijar los conceptos.

### Programa 1: Calculadora de IMC

```python
print("=== Calculadora de IMC ===")

peso = float(input("Tu peso en kg: "))
altura = float(input("Tu altura en metros (ej: 1.70): "))

imc = peso / (altura ** 2)

print(f"Tu IMC es {imc:.2f}")
```

El `:.2f` significa "mostrarlo con 2 decimales".

### Programa 2: Convertidor de temperatura

```python
print("=== Convertidor de temperatura ===")

celsius = float(input("Temperatura en °C: "))
fahrenheit = (celsius * 9 / 5) + 32

print(f"{celsius}°C son {fahrenheit}°F")
```

### Programa 3: Ahorrador

```python
print("=== ¿Cuánto puedo ahorrar? ===")

ingreso = float(input("Cuánto ganás por mes: $"))
gastos = float(input("Cuánto gastás por mes: $"))
meses = int(input("¿En cuántos meses querés calcular? "))

ahorro_mensual = ingreso - gastos
ahorro_total = ahorro_mensual * meses

print(f"Podés ahorrar ${ahorro_mensual} por mes.")
print(f"En {meses} meses: ${ahorro_total}.")
```

Probá los tres con distintos valores.

---

## Resumen

- Las **variables** guardan valores con un nombre. Se asignan con `=`.
- Los tipos básicos: **str** (texto), **int** (entero), **float** (decimal), **bool** (verdadero/falso), **None** (vacío).
- Los **f-strings** (`f"texto {variable}"`) son la forma moderna de armar mensajes.
- `int()`, `float()`, `str()` **convierten** entre tipos.
- `input()` siempre devuelve **str** — convertí cuando uses números.
- Los **operadores de comparación** (`==`, `!=`, `<`, `>`) devuelven `True` o `False`.
- `=` asigna, `==` compara. **Nunca los confundas**.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Variable** — caja con nombre para guardar datos.
- **Tipo de dato** — categoría del valor (texto, número, etc.).
- **String** (`str`) — texto.
- **Integer** (`int`) — entero.
- **Float** — decimal.
- **Boolean** (`bool`) — True/False.
- **F-string** — texto con variables embebidas (`f"texto {x}"`).
- **Conversión de tipos** o **casting** — pasar de un tipo a otro.
- **Operador de asignación** (`=`) y **de comparación** (`==`).
- **Concatenación** — unir textos.

> ✨ **Próximo paso:** En el módulo siguiente vas a aprender a **tomar decisiones** con `if/else` y a **repetir cosas** con `for` y `while`. Ahí tu código empieza a hacer cosas inteligentes de verdad.
