# Planilla de cálculo (Excel / LibreOffice Calc)

## Lo que vas a aprender

- Qué es una **planilla de cálculo** y cuándo conviene usarla.
- Cómo manejarte con **filas, columnas y celdas**.
- Cómo escribir **fórmulas** para que la PC haga las cuentas por vos.
- Cómo armar un **gráfico** simple a partir de tus datos.

---

## ¿Qué es una planilla de cálculo?

Una **planilla de cálculo** (o **hoja de cálculo**) es como una tabla gigante donde podés:

- Llevar **listas** (gastos, contactos, inventario).
- Hacer **cuentas automáticas** sin tener que calcular vos.
- Generar **gráficos** para ver los datos de forma visual.

Las más conocidas:

- 🟩 **Microsoft Excel** (la más famosa, viene con Office).
- 🟦 **LibreOffice Calc** (gratis, en Linux Mint).
- 🟨 **Google Sheets** (online, gratis).

> 💡 Los tres son compatibles. Lo que aprendas en Calc te sirve en Excel y viceversa, igual que con Writer y Word.

---

## Filas, columnas y celdas

Cuando abrís LibreOffice Calc vas a ver una **cuadrícula gigante**. Ahí están los tres conceptos básicos:

- Las **filas** son las líneas horizontales, numeradas: 1, 2, 3, 4...
- Las **columnas** son las verticales, con letras: A, B, C, D...
- La intersección de una fila y una columna es una **celda**, y se identifica con la columna + la fila: **A1**, **B5**, **C12**, etc.

Cada celda puede tener:

- **Texto** (palabras): `Juan`, `Compras`.
- **Números**: `1500`, `42.5`.
- **Fechas**: `15/05/2026`.
- **Fórmulas**: empieza con `=` y le pide a la PC que calcule algo.

Para escribir en una celda: hacé **clic** sobre ella y empezá a tipear. Apretá **Enter** para confirmar y moverte a la de abajo, o **Tab** para moverte a la derecha.

---

## Tu primera planilla: una lista de gastos

Imaginá que querés llevar control de tus gastos. Hacé esto:

1. En la celda **A1** escribí `Concepto`. En **B1** escribí `Monto`. Esos son los **encabezados** de la tabla.
2. Desde **A2** para abajo, escribí: `Luz`, `Internet`, `Comida`, `Transporte`.
3. En la columna **B**, al lado de cada concepto, escribí el monto: por ejemplo `4500`, `3200`, `28000`, `8000`.

Ya tenés una tabla con tus gastos.

---

## Fórmulas: que la PC haga las cuentas

Las **fórmulas** son lo más poderoso de las planillas. Siempre empiezan con `=`. Probemos una.

En la celda **A7** escribí `Total`. En la celda **B7** escribí:

```
=SUMA(B2:B5)
```

Apretá **Enter**. ¡La PC sumó todos los gastos sola!

### Otras fórmulas útiles

| Fórmula | Qué hace |
|---|---|
| `=SUMA(A1:A10)` | Suma todos los valores entre A1 y A10. |
| `=PROMEDIO(A1:A10)` | Calcula el promedio. |
| `=MAX(A1:A10)` | Te da el valor más alto. |
| `=MIN(A1:A10)` | Te da el valor más bajo. |
| `=CONTAR(A1:A10)` | Te dice cuántas celdas con números hay. |
| `=A1+B1` | Suma solo esas dos celdas. |
| `=A1*0.21` | Multiplica A1 por 0.21 (útil para calcular el IVA). |

> 💡 Si después cambiás un número de los gastos, la fórmula **se actualiza sola**. Esa es la magia: nunca más vas a calcular a mano.

---

## Dar formato a la planilla

Una planilla con datos crudos es difícil de leer. Para que se entienda:

### Para los encabezados (A1 y B1)

1. Seleccionalos arrastrando con el mouse.
2. Aplicá **negrita** (`Ctrl + B`).
3. Cambiales el **color de fondo** desde el ícono del balde de pintura en la barra.

### Para los montos

1. Seleccioná desde **B2** hasta **B7**.
2. Hacé clic derecho → **Formato de celdas → Números → Moneda**.
3. Elegí el símbolo (`$`) y la cantidad de decimales (`0`).

Ahora todos los números muestran `$4.500`, `$3.200`, etc.

### Para hacer las columnas más anchas

Si un texto no entra, posicioná el cursor en el **borde derecho** del encabezado de columna (justo entre la "A" y la "B") y arrastrá para hacerla más ancha. O hacé **doble clic** para que se ajuste sola.

---

## Tu primer gráfico

Visualizar los datos hace que se entiendan al toque.

1. Seleccioná las celdas desde **A1** hasta **B5** (los datos sin el total).
2. Andá a **Insertar → Gráfico**.
3. Se abre un asistente. Elegí el tipo **"Barras"** o **"Circular"** (pie).
4. Hacé clic en **Finalizar**.

El gráfico aparece en la planilla. Lo podés mover y cambiar el tamaño.

---

## Guardar la planilla

Lo mismo que con Writer:

- `Ctrl + S` para guardar.
- Formatos: **ODS** (nativo de LibreOffice), **XLSX** (de Excel), **CSV** (texto plano, útil para compartir datos).

---

## Ejercicio práctico

Vas a armar un **presupuesto familiar mensual**.

1. Abrí **LibreOffice Calc**.
2. En la columna **A**, listá tus categorías de gasto: `Alquiler`, `Luz`, `Gas`, `Agua`, `Internet`, `Comida`, `Transporte`, `Otros`.
3. En la columna **B**, ponele un monto estimado a cada uno.
4. Al final, en la celda al lado de "Otros", agregá `Total` y usá `=SUMA(B2:B9)`.
5. **Formateá los encabezados** en negrita con fondo de color.
6. **Aplicá formato de moneda** a la columna **B**.
7. **Insertá un gráfico de torta** con tus categorías y montos.
8. Guardá como `Presupuesto mensual.ods` en tu carpeta **Documentos**.
9. Cambiá un monto cualquiera y mirá cómo el total se actualiza automáticamente. Esa es la potencia de las fórmulas.

---

## Resumen

- Las **planillas de cálculo** son tablas inteligentes que hacen cuentas solas.
- Cada **celda** tiene una dirección (A1, B5...) que podés usar en fórmulas.
- Las **fórmulas** empiezan con `=`. Las más usadas: **SUMA**, **PROMEDIO**, **MAX**, **MIN**.
- Si cambiás un dato, la fórmula **se recalcula automáticamente**.
- Los **gráficos** sirven para ver los datos de un vistazo.
- **Excel** y **Calc** son compatibles entre sí; aprendiste para los dos.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Planilla de cálculo** o **hoja de cálculo** — la tabla inteligente.
- **Celda** — cada cuadrado individual.
- **Fila** y **columna** — las líneas horizontales y verticales.
- **Fórmula** — una operación que empieza con `=`.
- **Rango** — un conjunto de celdas como `A1:A10`.
- **SUMA**, **PROMEDIO**, **MAX**, **MIN** — las fórmulas más usadas.
- **Formato de celda** — cambiar cómo se ve un número (moneda, fecha, porcentaje).
- **Gráfico** — representación visual de los datos.
- **LibreOffice Calc** y **Microsoft Excel** — los dos programas más conocidos.

> ✨ **Próximo paso:** En el módulo siguiente vas a aprender a armar **presentaciones** con diapositivas para mostrar tu trabajo de forma profesional.
