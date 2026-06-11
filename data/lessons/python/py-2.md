# Instalación y primer programa

## Lo que vas a aprender

- Cómo **instalar Python** en Linux Mint (también vale para otros sistemas).
- Cómo **elegir un editor** de código adecuado.
- Cómo **ejecutar tu primer programa** de verdad.
- Cómo manejarte con la **terminal** lo justo y necesario.

---

## Verificar si Python ya está instalado

En Linux Mint, **Python viene preinstalado**. Antes de instalar nada, vamos a verificar.

1. Abrí la **Terminal** (menú de inicio → Terminal, o `Ctrl + Alt + T`).
2. Escribí:

```bash
python3 --version
```

3. Apretá **Enter**. Si te muestra algo como `Python 3.10.12` o similar, ya tenés Python.

Si no aparece o te dice "no encontrado", instalalo con:

```bash
sudo apt update
sudo apt install python3 python3-pip
```

Te va a pedir tu contraseña.

> 💡 En Windows: bajalo de `python.org/downloads`. Durante la instalación, **tildá la opción "Add Python to PATH"** — si no, después no anda desde la terminal.

> 💡 En macOS: viene con una versión vieja. Lo más fácil es instalarlo desde `python.org/downloads` o con **Homebrew** (`brew install python3`).

---

## Elegir un editor de código

Podés escribir Python con cualquier editor de texto, pero **un editor pensado para programar** te ahorra muchísimo tiempo. Te avisa errores, autocompletar, colores, etc.

### Los más usados

| Editor | Para qué |
|---|---|
| **VS Code** | El más popular en el mundo. Gratis, súper potente. Recomendado. |
| **Thonny** | Pensado para principiantes. Más simple. Bueno para arrancar. |
| **PyCharm Community** | Específico para Python. Más completo, más pesado. |
| **Sublime Text** | Liviano y rápido. Versión gratuita ilimitada. |

Vamos a usar **VS Code** porque es el que vas a ver en todos lados cuando empieces a trabajar.

### Instalar VS Code en Linux Mint

1. Abrí el **Gestor de software** (Software Manager) desde el menú de inicio.
2. Buscá **"Visual Studio Code"** o **"VS Code"**.
3. Hacé clic en **Instalar**.

O desde la terminal:

```bash
sudo apt install code
```

Una vez instalado, abrilo desde el menú.

### Instalar la extensión de Python

VS Code recién instalado no sabe nada de Python específicamente. Hay que sumarle la extensión oficial:

1. Abrí VS Code.
2. A la izquierda hay una barra de íconos. Hacé clic en el de **Extensiones** (cuatro cuadraditos).
3. En la barra de búsqueda escribí **"Python"**.
4. La primera que aparece, la de Microsoft, la instalás con **Install**.

¡Listo! Ya tenés un entorno de desarrollo profesional.

---

## Tu primer programa con VS Code

### Paso 1: crear una carpeta para tus proyectos

1. Abrí Archivos y andá a tu carpeta personal (Home).
2. Creá una carpeta llamada **`mis-codigos`**.
3. Adentro, creá una subcarpeta **`leccion-2`**.

### Paso 2: abrir la carpeta en VS Code

1. Abrí VS Code.
2. **Archivo → Abrir carpeta** → elegí `leccion-2`.
3. A la izquierda vas a ver el explorador de archivos vacío.

### Paso 3: crear el primer archivo

1. Hacé clic derecho en el explorador → **Nuevo archivo**.
2. Llamalo **`hola.py`** (la extensión `.py` es Python).
3. Se abre vacío. Escribí:

```python
print("¡Hola, mundo!")
print("Esta es mi primera línea en Python desde mi propia PC.")
```

4. Guardá con `Ctrl + S`.

### Paso 4: ejecutar

Tres formas:

**Forma 1 (la más fácil)**: hacé clic en el triángulo de "Play" arriba a la derecha en VS Code. Abajo aparece una terminal con la salida.

**Forma 2 (terminal externa)**:
1. Abrí la terminal (`Ctrl + Alt + T`).
2. Andá a la carpeta del archivo: `cd ~/mis-codigos/leccion-2`.
3. Ejecutalo: `python3 hola.py`.

**Forma 3 (terminal integrada en VS Code)**:
1. **Terminal → Nueva terminal**.
2. Tipeá `python3 hola.py`.

Las tres dan lo mismo. Cuando programes en serio, vas a usar la 1 o la 3 todo el tiempo.

---

## Manejo básico de terminal

Aunque uses VS Code, vas a tener que tipear cosas en la terminal de vez en cuando. Los comandos imprescindibles:

| Comando | Qué hace |
|---|---|
| `pwd` | Te dice en qué carpeta estás. |
| `ls` | Lista los archivos de la carpeta actual. |
| `cd carpeta` | Entra a `carpeta`. |
| `cd ..` | Sube un nivel (vuelve a la carpeta anterior). |
| `cd ~` | Va a tu carpeta personal. |
| `mkdir carpeta` | Crea una carpeta nueva. |
| `clear` | Limpia la pantalla. |
| `python3 archivo.py` | Ejecuta un programa Python. |

> 💡 Si te perdés en la terminal: tipea `cd ~` y volvés a tu home. Desde ahí navegás de nuevo.

---

## Errores comunes que te van a aparecer

### `SyntaxError`

Significa que escribiste algo mal. Faltó un paréntesis, una comilla, un dos puntos.

```python
print("Hola)
# Error: falta la comilla de cierre
```

### `IndentationError`

Python es **estricto con la indentación**. Si tenés una línea desalineada, falla.

```python
if True:
print("Hola")  # Error: tenía que estar indentado
```

### `NameError`

Usaste un nombre que no existe (variable mal escrita).

```python
print(nmbre)
# Error: 'nmbre' no está definido (querías decir 'nombre')
```

### Cómo arreglar errores

Cuando Python falla, te muestra **la línea donde está el problema**. Andá a esa línea y revisá:
- Comillas o paréntesis sin cerrar.
- Indentación: ¿está alineado todo?
- Variables: ¿escribiste bien el nombre?

Si te quedás trabado, **copiá el error completo** y pegalo en Google o en un chat de IA — la solución suele aparecer en segundos.

---

## Bonus: Python interactivo (REPL)

Si querés probar un comando rápido sin crear un archivo, abrí la terminal y tipea:

```bash
python3
```

Te aparece un prompt `>>>`. Tipeá ahí:

```python
>>> 2 + 3
5
>>> print("Hola")
Hola
>>> exit()
```

Salís con `exit()` o `Ctrl + D`. Esto se llama **REPL** (Read-Eval-Print Loop) — sirve para probar fragmentos chicos al toque.

---

## Ejercicio práctico

Vas a crear **dos archivos** de prueba.

### Archivo 1: `presentacion.py`

```python
print("=" * 30)
print("MIS DATOS")
print("=" * 30)
print("Nombre: TU NOMBRE")
print("Edad: TU EDAD")
print("Ciudad: TU CIUDAD")
print("Hobby: TU HOBBY")
print("=" * 30)
```

Reemplazá los `TU ...` con tus datos. Guardalo y ejecutalo.

### Archivo 2: `interactivo.py`

```python
print("¡Hola! ¿Cómo te llamás?")
nombre = input("Tu nombre: ")
print(f"Encantado, {nombre}.")
edad = input("¿Cuántos años tenés? ")
print(f"Tenés {edad} años. ¡Qué edad genial!")
```

Guardalo y ejecutalo. Probá ingresando distintos nombres.

### Bonus

Si todo va bien, **modificá** los archivos. Probá:
- Cambiar el `=` por `*` en `presentacion.py`.
- Hacer que `interactivo.py` te pregunte tu ciudad también.

---

## Resumen

- **Python ya viene en Linux Mint**. Lo verificás con `python3 --version`.
- **VS Code** es el editor más usado. Instalalo del Gestor de software + extensión Python.
- Los archivos de Python tienen extensión **`.py`**.
- Los ejecutás desde VS Code (botón Play) o desde terminal con `python3 archivo.py`.
- **Errores comunes**: SyntaxError (falta algo), IndentationError (mala alineación), NameError (variable mal escrita).
- Para pruebas rápidas, podés usar el **REPL** tipeando `python3` en la terminal.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Python 3** — la versión actual del lenguaje.
- **VS Code** — el editor de Microsoft, gratis.
- **Extensión** — agregado para que VS Code reconozca un lenguaje.
- **Terminal** o **consola** — donde tipeás comandos.
- **REPL** — modo interactivo de Python (`python3` desde terminal).
- **PATH** — la lista de carpetas donde el sistema busca programas.
- **Sintaxis** — las reglas del lenguaje.
- **Indentación** — los espacios obligatorios al principio de línea en Python.
- **Stack Overflow** — el foro más usado para resolver errores.
- **Documentación oficial de Python** — `docs.python.org`.

> ✨ **Próximo paso:** En el módulo siguiente vas a aprender a usar **variables, tipos de datos y operaciones** — los ladrillos con los que vas a construir todos tus programas.
