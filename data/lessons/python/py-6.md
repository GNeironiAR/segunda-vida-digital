# Mini proyecto: calculadora o juego simple

## Lo que vas a aprender

- Cómo **combinar** todo lo aprendido en un proyecto real.
- Cómo **planificar** un programa antes de tipear código.
- Cómo organizar el código en **funciones reutilizables**.
- Cómo **iterar y mejorar** una primera versión.

---

## Por qué este módulo importa

Hasta ahora aprendiste **piezas sueltas**: variables, condicionales, bucles, funciones, listas, diccionarios. En este módulo vas a **integrarlas en un programa completo**, de principio a fin.

La diferencia entre saber Python y **poder hacer cosas con Python** está acá. Y cuando salgas de este módulo, vas a tener tu primer programa real funcionando — algo que podés mostrar, modificar y usar.

> 💡 Vas a tener **dos proyectos a elección**: una **calculadora con menú** o un **juego de adivinanza mejorado**. Hacé el que más te gane. O hacé los dos.

---

## Antes de tipear: planificá

Programadores principiantes saltan al código. Programadores buenos **planean antes**.

Para cualquier programa, hacete estas 4 preguntas:

1. **¿Qué tiene que hacer?** En palabras simples, sin código.
2. **¿Qué necesita preguntar al usuario?**
3. **¿Cómo se divide en partes?** ¿Qué funciones armo?
4. **¿Qué errores podrían pasar?** ¿Cómo los manejo?

Anotalo en una hoja **antes de tocar la PC**. Te ahorra mucho dolor.

---

## Proyecto A: calculadora con menú

### Qué hace

Un menú con operaciones (sumar, restar, multiplicar, dividir, salir). El usuario elige, ingresa dos números, ve el resultado. Repite hasta que decida salir.

### Plan

- **Funciones**: una por operación + una para mostrar el menú.
- **Pregunta**: qué operación, qué dos números.
- **Partes**: menú → elección → operación → mostrar resultado → repetir.
- **Errores**: dividir por cero, ingresar algo que no sea número.

### Versión 1: lo básico

```python
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "No se puede dividir por cero"
    return a / b

def mostrar_menu():
    print("\n=== CALCULADORA ===")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Salir")

# Programa principal
while True:
    mostrar_menu()
    opcion = input("Elegí una opción: ")

    if opcion == "5":
        print("Chau!")
        break

    if opcion not in ["1", "2", "3", "4"]:
        print("Opción inválida")
        continue

    a = float(input("Primer número: "))
    b = float(input("Segundo número: "))

    if opcion == "1":
        resultado = sumar(a, b)
    elif opcion == "2":
        resultado = restar(a, b)
    elif opcion == "3":
        resultado = multiplicar(a, b)
    elif opcion == "4":
        resultado = dividir(a, b)

    print(f"Resultado: {resultado}")
```

Probá esto. Funciona. **Es una calculadora**.

### Versión 2: mejoras opcionales

Ya que tenés la base, mejoralo:

- **Historial**: guardá cada operación en una lista para mostrarla al final.
- **Memoria**: que recuerde el último resultado para usarlo en la siguiente operación.
- **Más operaciones**: potencia (`**`), módulo (`%`), raíz cuadrada (`** 0.5`).
- **Validar entrada**: si el usuario tipea "hola" cuando esperás un número, no exploda.

Para validar:

```python
try:
    a = float(input("Primer número: "))
except ValueError:
    print("Ingresá un número válido")
    continue
```

> 💡 `try/except` es la forma de **atrapar errores** sin que el programa se rompa. Si lo que está adentro del `try` falla, ejecuta el `except`.

---

## Proyecto B: juego de adivinanza mejorado

### Qué hace

La computadora elige un número al azar entre 1 y 100. El jugador intenta adivinarlo. La PC le dice "más alto" o "más bajo". Cuenta intentos. Al final, **guarda el resultado** y muestra una tabla con los mejores intentos.

### Plan

- **Funciones**: jugar una partida, mostrar récord, agregar resultado.
- **Pregunta**: el intento, si quiere seguir jugando.
- **Partes**: introducción → jugar → guardar → preguntar si sigue.
- **Datos**: una lista de resultados con nombre + intentos.

### Código completo

```python
import random

def jugar_partida():
    numero_secreto = random.randint(1, 100)
    intentos = 0
    print("\n¡Adiviná el número entre 1 y 100!")

    while True:
        intentos += 1
        intento = int(input(f"Intento {intentos}: "))

        if intento == numero_secreto:
            print(f"¡Bien! Le acertaste en {intentos} intentos.")
            return intentos
        elif intento < numero_secreto:
            print("Más alto.")
        else:
            print("Más bajo.")

def mostrar_records(records):
    if not records:
        print("\nTodavía no hay récords.")
        return

    print("\n=== RÉCORDS ===")
    # Ordenamos por menos intentos
    records.sort(key=lambda r: r["intentos"])
    for i, r in enumerate(records, start=1):
        print(f"{i}. {r['nombre']}: {r['intentos']} intentos")

# Programa principal
records = []

print("=" * 40)
print(" JUEGO DE ADIVINANZA")
print("=" * 40)

while True:
    nombre = input("\n¿Cómo te llamás? ")
    intentos = jugar_partida()
    records.append({"nombre": nombre, "intentos": intentos})

    mostrar_records(records)

    seguir = input("\n¿Querés jugar de nuevo? (s/n): ")
    if seguir.lower() != "s":
        print("\nGracias por jugar! Récords finales:")
        mostrar_records(records)
        break
```

Probalo. Es **un juego completo**. Funciona, guarda récords, te permite seguir.

### Versión 2: mejoras opcionales

- **Niveles de dificultad**: fácil (1-50), medio (1-100), difícil (1-500).
- **Límite de intentos**: si te pasás de N, perdés.
- **Pistas**: cada N intentos te da una pista ("es par", "es múltiplo de 5").
- **Guardar récords en un archivo** para no perderlos al cerrar el programa.

---

## Cómo se hace una mejora paso a paso

Cuando quieras agregar una funcionalidad, **no toques el programa entero**. Mirá un ejemplo: agregar **niveles de dificultad** al juego.

### Paso 1: pensar

Ya tengo `jugar_partida()`. Quiero que reciba un **rango** distinto según la dificultad.

### Paso 2: modificar la función

```python
def jugar_partida(rango_max):
    numero_secreto = random.randint(1, rango_max)
    intentos = 0
    print(f"\n¡Adiviná el número entre 1 y {rango_max}!")
    # ... resto igual ...
```

### Paso 3: pedir dificultad al usuario

```python
print("Elegí dificultad: 1=Fácil (1-50), 2=Medio (1-100), 3=Difícil (1-500)")
dificultad = input("Tu opción: ")

if dificultad == "1":
    rango = 50
elif dificultad == "2":
    rango = 100
elif dificultad == "3":
    rango = 500
else:
    rango = 100   # por defecto

intentos = jugar_partida(rango)
```

### Paso 4: probar

Corré el programa, probá las tres dificultades. Si algo falla, **leés el error** y arreglás.

---

## Ejercicio práctico final

Elegí **uno de los dos proyectos** (o hacé los dos):

1. Tipealo desde cero (no copies y pegues — **tipear** es lo que fija el conocimiento).
2. Probalo. Asegurate de que funcione.
3. **Hacele al menos dos mejoras** de la lista de opcionales.
4. Si te animás, **agregale algo original tuyo** que no esté en la guía.
5. **Guardá el archivo** en una carpeta `mis-proyectos/` para tener tu primer programa.
6. Si tenés GitHub (lo viste en Diseño web), **subilo a un repositorio**. Es tu primer proyecto público.

---

## Qué hacer cuando termines este path

Tenés un montón de caminos a partir de acá. Algunos sugerencias:

- **Profundizar en Python**: aprender **manejo de archivos** (leer/escribir), **librerías** (requests, pandas, matplotlib), **clases y objetos** (OOP).
- **Hacer scripts útiles**: automatizar algo que hagas en tu vida (renombrar fotos, mandar mails, descargar contenido).
- **Web con Python**: aprender **Flask** o **FastAPI** para hacer sitios.
- **Análisis de datos**: aprender **pandas** y **matplotlib** para procesar Excels y armar gráficos.
- **IA**: empezar con **scikit-learn** para machine learning, o usar la API de OpenAI/Anthropic.
- **Juegos**: probar **pygame**.
- **Sumar otro lenguaje**: JavaScript (para web), SQL (datos).

Lo importante es **no parar**. Programar es como un idioma: si no lo usás, se oxida.

---

## Resumen

- **Planificá antes** de tipear: qué hace, qué pregunta, qué partes tiene, qué errores pueden pasar.
- Dividí el problema en **funciones** chiquitas, cada una con un propósito claro.
- Probá la **versión más simple** primero. Hacela funcionar.
- **Itererá**: agregá una mejora a la vez. Probá después de cada cambio.
- **`try / except`** te permite atrapar errores sin que el programa muera.
- Subí tu código a **GitHub** — empezás a armar tu portfolio desde ya.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **MVP** (minimum viable product) — primera versión funcional, lo mínimo.
- **Refactorizar** — mejorar el código sin cambiar lo que hace.
- **try / except** — manejo de errores.
- **Excepción** — un error en tiempo de ejecución.
- **random.randint** — generar números al azar.
- **lambda** — funciones de una sola línea.
- **import** — traer una librería al programa.
- **Librería** — código que otros escribieron y vos usás.
- **Pandas** — librería de análisis de datos.
- **Flask / FastAPI** — frameworks de web en Python.
- **Pygame** — librería para hacer juegos.

> ✨ **¡Felicitaciones! Terminaste Desarrollador Python inicial.** Ya escribiste tu primer programa serio, manejaste funciones, listas, diccionarios y armaste un proyecto completo. El próximo gran paso es **Informática en la nube**, donde vas a aprender a desplegar lo que programes para que el mundo entero lo pueda usar.
