# Qué es programar y por qué Python

## Lo que vas a aprender

- Qué significa **programar** en términos simples.
- Por qué **Python** es el lenguaje ideal para empezar.
- Qué cosas reales podés hacer con Python.
- Cómo se ve un primer programa y dónde probarlo sin instalar nada.

---

## ¿Qué es programar?

**Programar** es darle órdenes a una computadora para que haga algo. Esas órdenes se escriben en un **lenguaje de programación** — un idioma con reglas claras que la computadora entiende sin ambigüedad.

Pensalo así: si querés que alguien te haga un sándwich y le decís *"hacé un sándwich"*, te puede preguntar mil cosas (¿de qué?, ¿con manteca?, ¿pan blanco o negro?). Una computadora **no pregunta**: necesita instrucciones **paso a paso, sin huecos**. Programar es aprender a escribir esas instrucciones.

> 💡 Programar no es matemática avanzada. Es **lógica y precisión**. Si sabés explicar paso a paso cómo se hace un mate o cómo se va a tu trabajo en colectivo, ya tenés la cabeza para programar.

---

## ¿Por qué Python?

Hay cientos de lenguajes de programación. ¿Por qué empezamos por **Python**? Cinco razones:

### 1. Sintaxis amigable

Python se lee casi como inglés. Mirá esto:

```python
edad = 18
if edad >= 18:
    print("Sos mayor de edad")
else:
    print("Sos menor")
```

Incluso sin saber Python ya podés intuir qué hace. Otros lenguajes son mucho más crípticos.

### 2. Demanda laboral enorme

Python es **uno de los lenguajes más buscados** en el mercado. Lo usan:

- 🌍 **Web**: Instagram, Pinterest, Spotify.
- 🤖 **Inteligencia artificial**: la mayoría de IA generativa moderna usa Python.
- 📊 **Análisis de datos**: empresas grandes hacen sus reportes con Python.
- 🎮 **Juegos**: con la librería Pygame.
- 🔬 **Ciencia**: investigación, bioinformática, astronomía.
- 🤖 **Automatización**: hacer scripts que ahorran horas.

### 3. Gratis y de código abierto

Es gratis y libre. Lo descargás de internet y listo. Sin licencias, sin pago.

### 4. Comunidad gigante

Cualquier problema que tengas, hay **millones de tutoriales, foros y respuestas** en Internet. Stack Overflow, YouTube, ChatGPT, todos saben Python.

### 5. Multipropósito

Aprendiéndolo, no estás aprendiendo "para una cosa". Te abre puertas a **web, IA, datos, automatización, scripts, juegos**.

---

## ¿Qué podés hacer concretamente con Python?

Algunos ejemplos reales que cualquier persona puede armar:

- 📂 **Renombrar 500 fotos en segundos** con un script.
- 📥 **Bajar todos los PDFs de una página web** automáticamente.
- 📧 **Mandar 100 emails personalizados** desde una planilla.
- 🗓 **Crear recordatorios** que se ejecuten todos los días.
- 📊 **Generar reportes** con gráficos a partir de un Excel.
- 🤖 **Hacer un bot de Telegram** o WhatsApp.
- 🌐 **Armar una página web** con datos dinámicos.
- 🎲 **Programar un juego simple** (el ahorcado, adivinanzas, snake).
- 🤖 **Conectarse a ChatGPT/Claude** desde tu propio programa.

Y un montón más. Cuando termines este path vas a poder hacer las primeras 4 sin demasiado esfuerzo.

---

## Cómo se ve un programa en Python

Mirá este ejemplo completo. **No tenés que entenderlo ahora** — solo familiarizate con cómo se ve:

```python
# Programa: ¿Cuántos años de vida te quedan?

print("Hola! Te voy a calcular cuántos años de vida te quedan según las estadísticas.")

edad = int(input("¿Cuántos años tenés? "))
expectativa = 80

restan = expectativa - edad

if restan > 0:
    print(f"Te quedan aproximadamente {restan} años. Aprovechalos!")
else:
    print("¡Ya estás en tiempo de bonus!")
```

Cuando lo ejecutás:

```
Hola! Te voy a calcular cuántos años de vida te quedan según las estadísticas.
¿Cuántos años tenés? 35
Te quedan aproximadamente 45 años. Aprovechalos!
```

Notá que el código:
- Hace **una cosa por línea**.
- Usa **indentación** (espacios al principio de la línea) para agrupar bloques.
- Tiene comentarios con `#` que se ignoran al ejecutar.

---

## Cómo probar Python sin instalar nada

Hay varios editores online donde podés escribir y ejecutar Python directo desde el navegador:

| Sitio | Pro |
|---|---|
| **Programiz** (`programiz.com/python-programming/online-compiler`) | Ultra simple, pensado para principiantes. |
| **Replit** (`replit.com`) | Más completo, te crea cuenta para guardar tus proyectos. |
| **Google Colab** (`colab.research.google.com`) | Pensado para análisis de datos. Necesita Gmail. |

Vamos a usar **Programiz** porque no requiere cuenta y es el más rápido para arrancar.

### Tu primer programa

1. Abrí Firefox y entrá a `programiz.com/python-programming/online-compiler`.
2. Vas a ver un editor con un código de ejemplo (`print("Hello, World!")`).
3. Borrá lo que hay y pegá:

```python
nombre = input("¿Cómo te llamás? ")
print(f"Hola, {nombre}! Bienvenido al mundo de Python.")
```

4. Hacé clic en **"Run"** arriba a la derecha.
5. En el panel de abajo te va a aparecer la pregunta. Escribí tu nombre y apretá **Enter**.
6. Vas a ver el saludo personalizado.

¡Acabás de ejecutar tu primer programa!

---

## Qué viene en los próximos módulos

Este path tiene 6 lecciones que se van encadenando:

1. ✅ **Qué es programar y por qué Python** (este).
2. **Instalación y primer programa**: tener Python en tu PC.
3. **Variables, tipos y operaciones**: cómo guardar datos.
4. **Condicionales y bucles**: cómo tomar decisiones y repetir cosas.
5. **Funciones y estructuras de datos**: cómo organizar tu código.
6. **Mini proyecto final**: armar algo real con todo lo aprendido.

Al terminar, vas a poder escribir programas chicos que resuelven problemas reales.

---

## Ejercicio práctico

Vas a hacer un ejercicio mental y uno práctico para arrancar.

### Ejercicio mental

Pensá en **una tarea repetitiva** que hacés todos los días o todas las semanas. Por ejemplo:
- Calcular cuánta plata gastaste en la semana.
- Saludar por cumpleaños a varias personas.
- Renombrar fotos antes de subirlas a algún lado.
- Convertir pesos a dólares para una cuenta.

Anotá esa tarea. Al final del path vas a saber automatizarla con Python.

### Ejercicio práctico

1. Abrí Programiz online.
2. Escribí este programa y ejecutalo:

```python
# Calculadora de propinas

print("Bienvenido a la calculadora de propinas")

monto = float(input("¿Cuánto fue la cuenta? $"))
porcentaje = float(input("¿Qué porcentaje de propina querés dejar? "))

propina = monto * (porcentaje / 100)
total = monto + propina

print(f"Propina: ${propina:.2f}")
print(f"Total a pagar: ${total:.2f}")
```

3. Probá con distintos valores: una cuenta de $1500 con 10% de propina, etc.
4. **Cambialo**: agregale que pregunte cuántas personas son y muestre cuánto paga cada una.

No te frustres si no entendés cada línea — en los próximos módulos lo desarmamos.

---

## Resumen

- **Programar** es darle órdenes precisas a la computadora.
- **Python** es ideal para empezar: sintaxis amigable, gran demanda laboral, multipropósito.
- Con Python podés hacer **web, IA, datos, automatización, juegos** y más.
- Un programa Python usa **indentación** y se lee casi como inglés.
- Podés probar Python **sin instalar nada** en sitios como Programiz, Replit o Google Colab.
- En este path vas a hacer **6 lecciones progresivas** hasta llegar a un mini proyecto.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Programación** — escribir instrucciones para una computadora.
- **Lenguaje de programación** — el "idioma" que entiende la PC.
- **Python** — el lenguaje que vamos a aprender.
- **Código** — el conjunto de instrucciones escritas.
- **Sintaxis** — las reglas de cómo se escribe el código.
- **Indentación** — los espacios al inicio de línea (en Python son obligatorios).
- **Script** — un programa chico que hace una tarea específica.
- **Ejecutar** o **correr** — hacer que el programa funcione.
- **IDE** — entorno de desarrollo (Programiz, VS Code, Replit).
- **Repositorio** — donde se guarda el código (GitHub).

> ✨ **Próximo paso:** En el módulo siguiente vas a **instalar Python** en tu computadora y dar tus primeros pasos con el editor de código que vas a usar en serio.
