# Excel avanzado para datos

## Lo que vas a aprender

- Por qué **Excel sigue siendo** la herramienta de datos más usada en el mundo.
- Las **funciones avanzadas** que te separan de un usuario común.
- Cómo **limpiar y preparar** datos antes de analizarlos.
- Cómo armar **dashboards básicos** que se actualizan solos.

---

## Por qué Excel sigue importando

Aunque exista SQL, Python y herramientas modernas, **el 80% del trabajo real con datos en empresas se hace en Excel** (o LibreOffice Calc). Razones:

- 📂 **Está en todos lados**. Cualquier PC tiene Office o LibreOffice.
- 🚀 **Es rápido para datos chicos** (hasta 100.000 filas, anda perfecto).
- 🤝 **Todo el mundo lo entiende**: cuando mandás un Excel, lo abre tu jefe, tu cliente, tu abuela.
- 🔁 **Combina muy bien con SQL**: muchos profesionales sacan datos con SQL y los terminan analizando en Excel.

Aprenderlo a fondo es **una superpotencia**.

---

## Funciones que tenés que conocer

### BUSCARV (VLOOKUP) o BUSCARX (XLOOKUP)

Buscar un valor en otra tabla y traer información relacionada.

Ejemplo: tenés una hoja con códigos de producto y otra con sus nombres. Querés que aparezcan los nombres al lado de los códigos.

```
=BUSCARV(A2, Hoja2!A:B, 2, FALSO)
```

- `A2` → qué buscar.
- `Hoja2!A:B` → dónde buscar (rango de la tabla).
- `2` → de qué columna traer el resultado.
- `FALSO` → coincidencia exacta.

> 💡 **Truco moderno**: si tu Excel es 365 o 2021+, usá `BUSCARX` (`XLOOKUP`). Es más simple y potente: `=BUSCARX(A2, Hoja2!A:A, Hoja2!B:B)`.

### SI (IF) y SI anidado

Para decisiones automáticas.

```
=SI(B2>1000, "Mayorista", "Minorista")
```

Anidado para más casos:

```
=SI(B2>10000, "Premium",
   SI(B2>5000, "Plata",
   SI(B2>1000, "Bronce", "Sin categoría")))
```

### SUMAR.SI / CONTAR.SI / PROMEDIO.SI

Suman/cuentan/promedian solo las celdas que cumplen una condición.

```
=SUMAR.SI(B2:B100, ">1000")
-- Suma los valores mayores a 1000

=CONTAR.SI(C2:C100, "Buenos Aires")
-- Cuenta cuántas veces aparece "Buenos Aires"

=PROMEDIO.SI(B2:B100, ">0")
-- Promedio solo de los positivos
```

### SUMAR.SI.CONJUNTO (varias condiciones)

```
=SUMAR.SI.CONJUNTO(C:C, A:A, "Producto X", B:B, "Buenos Aires")
-- Suma C donde A="Producto X" Y B="Buenos Aires"
```

### TEXTO y CONCATENAR

Para armar etiquetas o IDs combinando varias celdas.

```
=A2 & " - " & B2
-- "Ana - Córdoba"

=TEXTO(B2, "#.##0")
-- Formatea un número con separador de miles
```

### IZQUIERDA, DERECHA, EXTRAE, LARGO

Para manipular texto.

```
=IZQUIERDA(A2, 3)
-- Primeros 3 caracteres

=EXTRAE(A2, 5, 4)
-- Desde el carácter 5, traer 4

=LARGO(A2)
-- Cuántos caracteres tiene
```

### HOY y AHORA

```
=HOY()        -- Fecha actual
=AHORA()      -- Fecha y hora actual
=A2-HOY()     -- Días entre A2 y hoy
```

---

## Limpiar datos: el 80% del trabajo

La realidad de cualquier analista: **los datos vienen sucios**. Espacios de más, mayúsculas mezcladas, formatos rotos, duplicados, celdas vacías.

### Quitar duplicados

1. Seleccioná tu rango.
2. **Datos → Eliminar duplicados**.
3. Te avisa cuántos sacó.

### Reemplazar valores

`Ctrl + H` abre **Buscar y reemplazar**. Útil para:
- Cambiar "B.A." por "Buenos Aires".
- Quitar espacios extra.
- Corregir errores comunes.

### Funciones para limpiar

```
=ESPACIOS(A2)          -- Quita espacios al inicio, final, y dobles
=MAYUSC(A2)            -- Todo MAYÚSCULAS
=MINUSC(A2)            -- Todo minúsculas
=NOMPROPIO(A2)         -- Primera Letra En Mayúscula
```

### Validación de datos

Andá a **Datos → Validez**. Te permite forzar que en una columna **solo** se acepten:
- Una lista pre-definida (Buenos Aires / Córdoba / Rosario).
- Números dentro de un rango.
- Fechas en cierto formato.

Evita errores antes de que ocurran.

---

## Formato condicional: ver problemas con colores

Resaltar celdas según su valor.

1. Seleccioná tu rango.
2. **Formato → Formato condicional → Condición**.
3. Definí la regla:
   - "Valores mayores a 1000" → fondo verde.
   - "Valores menores a 0" → fondo rojo.
   - "Texto que contenga 'Urgente'" → fondo amarillo.

Una planilla con formato condicional bien aplicado **se entiende de un vistazo**.

### Barras de datos e iconos

También podés:
- Aplicar **barras de datos** dentro de la celda (mini gráfico de barras horizontal).
- **Escalas de color** (verde a rojo).
- **Iconos** (flechas, semáforos).

---

## Tablas dinámicas avanzadas

Repaso rápido de lo que viste en Office: las **tablas dinámicas** son la herramienta más potente de Excel. Acá vamos a profundizar.

### Segmentadores de datos (slicers)

Botones interactivos que filtran tu tabla dinámica con un clic.

1. Hacé clic en tu tabla dinámica.
2. **Insertar → Segmentación de datos**.
3. Elegí qué columnas convertir en botones.

Resultado: ahora tu jefe tiene **botones grandes** para filtrar por Ciudad, Producto, etc.

### Campos calculados

Dentro de la tabla dinámica podés crear columnas calculadas que no existen en los datos originales.

Ejemplo: agregás un campo **"% del total"** que muestra qué porcentaje representa cada fila.

### Gráficos dinámicos

Cualquier tabla dinámica se puede convertir en gráfico:

1. Hacé clic en tu tabla dinámica.
2. **Insertar → Gráfico dinámico**.
3. Elegí el tipo (barras, torta, líneas).

El gráfico **se actualiza solo** cuando cambian los datos. Esto es la base de un **dashboard**.

---

## Armar un dashboard básico

Un **dashboard** es un panel visual con los datos más importantes para tomar decisiones. Estructura típica:

1. **Arriba**: KPIs grandes (ventas del mes, clientes nuevos, % de cumplimiento).
2. **Centro-izquierda**: gráfico de tendencia (ventas mes a mes).
3. **Centro-derecha**: gráfico por categoría (ventas por producto).
4. **Abajo**: tabla detallada con los principales movimientos.
5. **A los costados**: segmentadores para filtrar todo.

Con tablas dinámicas, segmentadores y gráficos dinámicos, lo armás en unas horas.

> 💡 Un dashboard bueno **responde preguntas en 5 segundos**. Si tu jefe lo mira y no entiende, no sirve.

---

## Ejercicio práctico

Vas a armar un **mini-dashboard de ventas**.

### Paso 1: Datos

Creá una planilla con datos de venta (al menos 30 filas):

| Fecha | Vendedor | Producto | Categoría | Ciudad | Cantidad | Precio_unit |
|---|---|---|---|---|---|---|

Inventá datos: 3-4 vendedores, 5-6 productos en 2-3 categorías, 3 ciudades. Mes de marzo.

### Paso 2: Limpiar y enriquecer

1. Agregá una columna **`Total`** con `=Cantidad * Precio_unit`.
2. Agregá una columna **`Mes`** con `=TEXTO(Fecha, "MMMM")`.

### Paso 3: Tabla dinámica + gráfico

1. Insertá una **tabla dinámica** con:
   - Filas: **Vendedor**.
   - Datos: **Total** (suma).
2. Insertá un **gráfico dinámico** de barras.

### Paso 4: Segmentadores

1. Agregá un segmentador por **Ciudad**.
2. Agregá un segmentador por **Categoría**.

### Paso 5: Formato condicional

Aplicá **formato condicional** a tu tabla original: marcá en verde los Totales mayores a 50.000 y en rojo los menores a 10.000.

### Resultado

Vas a tener un mini-dashboard donde se puede filtrar por Ciudad y Categoría con clics, y el gráfico se actualiza solo.

---

## Resumen

- **Excel/Calc** sigue siendo la herramienta más usada para datos en empresas.
- Las funciones clave: **BUSCARV/BUSCARX**, **SI**, **SUMAR.SI**, **CONTAR.SI**, **TEXTO**, **ESPACIOS**.
- **Limpiar datos** es el 80% del trabajo: quitar duplicados, normalizar texto, validar entradas.
- El **formato condicional** te hace ver problemas de un vistazo.
- Las **tablas dinámicas con segmentadores y gráficos** son la base de un **dashboard**.
- Un buen dashboard responde preguntas **en 5 segundos**.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **BUSCARV** (VLOOKUP) y **BUSCARX** (XLOOKUP) — buscar en otra tabla.
- **Tabla dinámica** — herramienta de resumen sin fórmulas.
- **Segmentación de datos** (slicer) — filtros con botones.
- **Formato condicional** — colorear celdas según su valor.
- **Validación de datos** — restringir qué se puede ingresar.
- **Dashboard** — panel visual con KPIs.
- **KPI** (key performance indicator) — métrica clave del negocio.
- **Power Query** — herramienta para limpiar/transformar datos en Excel.
- **Power BI** — la evolución de Excel para dashboards profesionales.
- **ETL** (extract, transform, load) — el proceso de mover y limpiar datos.

> ✨ **¡Terminaste Administración de datos!** Ya tenés la trilogía: bases de datos, SQL y Excel avanzado. El próximo gran paso es **Informática en la nube**, donde vas a entender dónde viven hoy las bases de datos serias y cómo se gestionan a escala.
