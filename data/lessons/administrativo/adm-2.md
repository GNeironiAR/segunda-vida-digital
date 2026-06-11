# Excel intermedio: tablas dinámicas y filtros

## Lo que vas a aprender

- Cómo **filtrar** y **ordenar** datos para encontrar lo que necesitás rápido.
- Qué es una **tabla dinámica** y por qué es tan poderosa.
- Cómo armar tu primera tabla dinámica desde cero.
- Trucos para **analizar grandes volúmenes de datos** sin tocar fórmulas complicadas.

---

## Por qué este módulo importa

En cualquier puesto administrativo te van a pedir cosas como:
- "¿Cuánto vendimos este mes por sucursal?"
- "Listame solo los clientes morosos de Buenos Aires."
- "¿Cuál es el producto más vendido por categoría?"

Si responder esas preguntas te lleva **horas pasando filas a mano**, ya perdiste. Con filtros y tablas dinámicas, te lleva **segundos**.

> 💡 Saber tablas dinámicas es una de las habilidades **más valoradas** en puestos administrativos. Y muy poca gente las domina realmente.

---

## Repaso: filtros simples

Para los siguientes ejercicios vamos a usar una planilla con datos de ventas. Si no tenés una, armá esta en LibreOffice Calc o Excel:

| Fecha | Sucursal | Producto | Categoría | Cantidad | Precio |
|---|---|---|---|---|---|
| 01/05 | Centro | Cuaderno | Librería | 10 | 1500 |
| 01/05 | Norte | Lapicera | Librería | 25 | 800 |
| 02/05 | Centro | Mochila | Marroquinería | 5 | 12000 |
| 02/05 | Sur | Cuaderno | Librería | 15 | 1500 |
| 03/05 | Norte | Mochila | Marroquinería | 3 | 12000 |
| 03/05 | Centro | Lapicera | Librería | 30 | 800 |

Ponele encabezados en la fila 1 y los datos abajo.

### Activar filtros

1. Seleccioná cualquier celda dentro de la tabla.
2. Andá a **Datos → Filtro automático** (en LibreOffice) o **Datos → Filtro** (en Excel).
3. Aparecen unas **flechitas** en cada encabezado.

### Usar filtros

1. Hacé clic en la flechita de **Sucursal**.
2. Destildá todas las opciones excepto **"Centro"**.
3. Hacé clic en **OK**.

¡Solo te muestra los datos de la sucursal Centro! Los demás siguen ahí pero ocultos. Para volver: destildás "Centro" y tildás todo de nuevo, o hacés clic en **"Restablecer filtro"**.

### Combinar filtros

Podés filtrar por **varias columnas a la vez**: por ejemplo solo "Centro" y solo "Librería". Acumulá todos los criterios que necesites.

---

## Ordenar datos

Las flechitas también te permiten **ordenar**.

- Hacé clic en la flechita de **Cantidad**.
- Elegí **"Orden ascendente"** o **"Orden descendente"**.

Toda la tabla se reordena por esa columna, manteniendo las filas juntas.

> ⚠️ **Importante**: si ordenás directamente desde el menú **Datos → Ordenar**, asegurate de seleccionar **toda la tabla** primero. Si no, podés ordenar solo una columna y desarmar el resto. Catástrofe asegurada.

---

## Las tablas dinámicas

Una **tabla dinámica** (en inglés: *pivot table*) es la herramienta más potente de Excel/Calc. Te deja **resumir, agrupar y calcular** datos de una tabla larga, sin escribir ni una fórmula.

### Para qué sirve

Con la tabla del ejemplo, una tabla dinámica te puede responder en segundos:
- "¿Cuánto vendimos en total por sucursal?"
- "¿Cuántas unidades vendimos por categoría?"
- "¿Cuál es el precio promedio por producto?"

### Cómo crear tu primera tabla dinámica

1. Seleccioná **toda tu tabla** (con encabezados).
2. Andá a **Insertar → Tabla dinámica** (en LibreOffice: **Insertar → Tabla dinámica → Selección actual**).
3. Se abre un asistente con cuatro zonas: **Filas**, **Columnas**, **Datos** y **Filtros**.
4. **Arrastrá los campos**:
   - Llevá **Sucursal** a la zona de **Filas**.
   - Llevá **Cantidad** a la zona de **Datos**.
5. Hacé clic en **Aceptar**.

¡Listo! En segundos, te aparece una tabla mostrando cuántas unidades vendió cada sucursal.

### Cambiar el cálculo

Por defecto, Excel suma los datos. Si querés contar, promediar, o calcular máximo/mínimo:

1. En la zona de datos, hacé doble clic en el campo (o **clic derecho → Configuración del campo**).
2. Elegí la **función**: SUMA, PROMEDIO, CONTAR, MAX, MIN.
3. Aceptá.

### Reorganizar la tabla dinámica

La magia es que podés cambiar la estructura **al vuelo**.

- Llevá **Categoría** a **Columnas** → ahora ves un cruce de Sucursal × Categoría.
- Sacá **Sucursal** de Filas y poné **Producto** → cambia la perspectiva.
- Movés los campos como quieras hasta que veas lo que buscás.

> 💡 Una buena tabla dinámica responde una pregunta. Si querés responder otra, **cambiá** los campos: no necesitás hacer una tabla nueva.

---

## Trucos extra que te van a salvar la vida

### Buscar valores con BUSCARV (VLOOKUP)

Imaginate que tenés dos planillas: una con códigos de cliente y otra con nombres. Con `=BUSCARV(A2, Hoja2!A:B, 2, FALSO)` traés el nombre desde la otra planilla buscando por código. La fórmula puede asustar al principio — practicala con un ejemplo simple.

### Función SI (IF)

Te permite **decisiones automáticas**. Por ejemplo, marcar pagos vencidos:

```
=SI(B2 < HOY(), "Vencido", "Al día")
```

Si la fecha en B2 es anterior a hoy, escribe "Vencido"; si no, "Al día".

### Validación de datos

Permite que solo se ingresen valores válidos en una celda (por ejemplo, una lista desplegable de "Centro/Norte/Sur"). Andá a **Datos → Validez**.

---

## Ejercicio práctico

Con la tabla de ventas que armaste:

1. **Filtrá** solo las filas de la sucursal **"Norte"**.
2. Sacá el filtro.
3. **Ordená** la tabla por **Cantidad** descendente. ¿Cuál es el producto más vendido en unidades?
4. Insertá una **tabla dinámica** con:
   - Filas: **Sucursal**.
   - Datos: **Cantidad** (suma).
5. Cambiá la tabla dinámica para que muestre el **promedio de precio por categoría**:
   - Filas: **Categoría**.
   - Datos: **Precio** (promedio).
6. Sumá una columna **"Total"** en la tabla original con la fórmula `=Cantidad * Precio`, y armá una nueva tabla dinámica que sume el **Total por Sucursal**.

---

## Resumen

- Los **filtros** te dejan mostrar solo lo que necesitás sin borrar datos.
- **Ordenar** desde la flechita mantiene las filas juntas.
- Una **tabla dinámica** resume, agrupa y calcula sin fórmulas — solo arrastrando campos.
- Las tres zonas clave: **Filas, Columnas, Datos**.
- Podés cambiar el cálculo: suma, promedio, conteo, máximo, mínimo.
- **BUSCARV** y **SI** son los pasos siguientes que vale la pena dominar.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Filtro automático** — la flechita para filtrar y ordenar.
- **Tabla dinámica** o **pivot table** — la herramienta de resumen sin fórmulas.
- **BUSCARV** (VLOOKUP) — buscar un valor en otra tabla.
- **Función SI** (IF) — decisiones automáticas en una celda.
- **Rango de datos** — el conjunto que vas a analizar.
- **Validación de datos** — restringir qué se puede ingresar.
- **Subtotal** — sumar grupos dentro de una tabla.
- **Filtro avanzado** — filtros con condiciones más complejas.
- **Formato condicional** — colorear celdas según su valor.

> ✨ **Próximo paso:** En el último módulo del path vas a aprender a **gestionar tu agenda y calendario** con Google Calendar — esencial para coordinar reuniones, tareas y plazos.
