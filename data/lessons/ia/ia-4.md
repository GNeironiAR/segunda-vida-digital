# Asistentes de código (básico)

## Lo que vas a aprender

- Qué es un **asistente de código** y para qué sirve.
- Las herramientas más conocidas, **gratuitas y pagas**.
- Cómo usar un chatbot común (ChatGPT, Claude) para **escribir, entender y arreglar código**.
- Cuándo conviene usarlo y cuándo no.

---

## ¿Qué es un asistente de código?

Un **asistente de código** es una IA especializada en **programación**. Te ayuda a:

- 📝 **Escribir código** desde una descripción en palabras ("hacé un programa que sume dos números").
- 🔍 **Entender código** que no escribiste vos.
- 🐞 **Encontrar errores** y proponerte soluciones.
- 💡 **Explicar conceptos** de programación adaptados a tu nivel.
- ⚡ **Acelerar tareas repetitivas**: nombrar variables, escribir comentarios, completar bloques.

Pensalo así: si los chatbots de IA son como tener un asistente personal multitarea, los asistentes de código son como tener un programador junior pegado al hombro **24 horas**.

> 💡 No reemplazan aprender a programar, pero **multiplican tu velocidad** una vez que entendés lo básico. Y si recién arrancás, son un excelente profesor particular.

---

## Las herramientas más conocidas

### Para principiantes: usá chatbots generales

Si recién estás empezando, **no necesitás herramientas específicas** todavía. Con **ChatGPT** o **Claude** ya tenés todo:

- Le pegás el código y le pedís que te explique.
- Le pedís que escriba código según una descripción.
- Le mostrás un error y te ayuda a arreglarlo.

**Ventaja**: son **gratis** y los podés usar sin instalar nada.

### Para programadores más avanzados: asistentes integrados al editor

Estas se instalan en tu **editor de código** y autocompletan mientras escribís:

| Asistente | Costo | Lo bueno |
|---|---|---|
| **GitHub Copilot** | Pago / gratis para estudiantes | El más usado. Integra perfecto con Visual Studio Code. |
| **Cursor** | Pago con plan gratuito limitado | Editor entero pensado para IA. Súper potente. |
| **Codeium** | Gratis | Buena alternativa libre, anda en muchos editores. |
| **Tabnine** | Gratis básico | Buena para autocompletado simple. |

Para esta lección **no vamos a usar ninguno de estos**. Si te interesa programar más adelante (vas a verlo en el path de **Desarrollador Python inicial**), ahí los probás.

---

## Cómo usar ChatGPT (o Claude) para programar

Vamos a hacer un ejercicio con un chatbot común. Asumimos que ya tenés cuenta de **ChatGPT** del módulo anterior.

### 1. Pedile que te escriba un programa

Abrí ChatGPT y pediile:

> *Escribime un programa en Python que pida al usuario su nombre y le diga "Hola, [nombre]". Explicame cada línea.*

En unos segundos te va a dar algo así:

```python
# Pedimos al usuario que escriba su nombre
nombre = input("¿Cómo te llamás? ")

# Imprimimos un saludo personalizado
print("Hola, " + nombre)
```

Con la explicación de qué hace cada línea. **Eso es un programa**. Aunque no sepas Python, ya lo "leés" porque la IA te lo explicó.

### 2. Pedile que te lo modifique

> *Modificá el programa para que también le pregunte la edad y le diga si es mayor o menor de 18 años.*

Te lo modifica. Y vos vas viendo cómo cambia el código.

### 3. Pedile que te enseñe

> *Explicame qué es una "variable" en Python, con ejemplos sencillos. Soy principiante absoluto.*

Te da una mini-lección. Le podés seguir preguntando hasta que entiendas.

---

## Cómo probar el código sin instalar nada

Antes de instalar Python u otro lenguaje, podés probar código directamente desde el navegador:

- 🌐 **Replit** (`replit.com`) — IDE online, gratis. Escribís el código y le das "Run".
- 🌐 **Programiz Online Compiler** (`programiz.com/python-programming/online-compiler`) — más simple, para principiantes.
- 🌐 **Google Colab** (`colab.research.google.com`) — pensado para Python con cuenta de Gmail.

Copiás el código que te dio ChatGPT, lo pegás en cualquiera de estas páginas, y **probás si funciona**.

---

## Reglas importantes para usar bien estos asistentes

### Lo que sí

- ✅ **Pedirle que te explique** cada parte. No copiar y pegar a ciegas.
- ✅ **Pedirle que te enseñe** conceptos que no entendés.
- ✅ **Usarlo para acelerar** tareas que ya entendés cómo hacer.
- ✅ **Pedirle que mejore** tu código ("¿podés hacerlo más simple?").
- ✅ **Compararlo con otra IA**: a veces Claude explica mejor que ChatGPT o viceversa.

### Lo que no

- ❌ **No copiar código sin entender qué hace**. Eventualmente vas a chocar con un error y no vas a poder arreglarlo.
- ❌ **No confiar en que siempre tenga razón**. A veces inventa funciones que no existen.
- ❌ **No usarlo para hacer tu tarea sin aprender**. Si estás estudiando, **usá la IA para entender**, no para evitar pensar.
- ❌ **No subirle código con datos sensibles** (contraseñas, claves de API, datos de clientes).

> ⚠️ **Verdad incómoda**: la IA puede generarte código que **anda hoy y se rompa mañana**. Si vas a usar algo en serio, **probá, leé, entendé**. La IA no es responsable — vos sí.

---

## Cuándo conviene usar un asistente de código

- ✅ Cuando **recién empezás**: te ayuda a entender la lógica y la sintaxis.
- ✅ Cuando estás **atorado/a con un error**.
- ✅ Cuando querés **probar una idea rápido**.
- ✅ Cuando tenés que hacer algo **repetitivo** que ya sabés hacer pero te cuesta tipear.
- ✅ Cuando querés **aprender un lenguaje nuevo** y ya sabés programar.

## Cuándo NO conviene

- ❌ Cuando estás **aprendiendo un concepto fundamental** y querés ejercitar la cabeza.
- ❌ Cuando vas a **rendir un examen** (obvio).
- ❌ Cuando trabajás con **información sensible** que no podés exponer.

---

## Ejercicio práctico

Vas a usar **ChatGPT** para hacer tus primeros programas en Python **sin instalar nada**.

### Paso 1: Pedile al asistente

Abrí ChatGPT y escribí:

> *Soy principiante absoluto en programación. Escribime un programa simple en Python que pida al usuario un número y le diga si es par o impar. Explicame línea por línea como si nunca hubiera visto código.*

### Paso 2: Probarlo online

1. Copiá el código que te dio.
2. Andá a `programiz.com/python-programming/online-compiler`.
3. Pegá el código en el panel izquierdo, borrando lo que haya por defecto.
4. Hacé clic en **"Run"** arriba a la derecha.
5. En el panel de abajo, escribí un número y apretá Enter.
6. Mirá el resultado.

### Paso 3: Modificar

Volvé a ChatGPT y pediile:

> *Ahora modificá el programa para que en vez de un solo número, pida 5 números y al final muestre cuántos eran pares y cuántos impares.*

Probalo de nuevo. Ya estás iterando con la IA como un programador.

### Paso 4: Pedir explicación profunda

> *Explicame qué hace cada línea de este nuevo programa, y por qué se usa un "bucle for".*

---

## Resumen

- Un **asistente de código** te ayuda a **escribir, entender, arreglar y explicar** programación.
- Para principiantes, lo más cómodo es usar **chatbots generales** (ChatGPT, Claude).
- Para programadores avanzados existen **GitHub Copilot**, **Cursor**, **Codeium** integrados al editor.
- Podés probar código **sin instalar nada** en Replit o Programiz online.
- Usá la IA para **entender y acelerar**, no para evitar pensar.
- **Siempre verificá** — la IA puede inventar funciones o cometer errores sutiles.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Asistente de código** — IA especializada en programación.
- **GitHub Copilot** — el asistente más conocido, paga.
- **Cursor** — editor de código pensado para IA.
- **Codeium** — alternativa gratis a Copilot.
- **Python** — uno de los lenguajes más usados para empezar.
- **IDE online** — editor de código en el navegador (Replit, Programiz).
- **Autocompletado** — cuando el editor te sugiere lo que vas a escribir.
- **Debug** — el proceso de encontrar y arreglar errores.
- **Pair programming** — programar de a dos. Con la IA, es como tener un compañero virtual.
- **Vibe coding** — programar con IA describiendo lo que querés sin escribir el código a mano.

> ✨ **¡Terminaste Herramientas de IA!** Ya entendés qué es la IA, sabés usar chatbots, generar imágenes y dar tus primeros pasos con código asistido. Ahora viene el momento decisivo: **elegir una especialidad**. Volvé a la pantalla del path y vas a ver las 5 carreras disponibles — elegí la que más resuene con vos.
