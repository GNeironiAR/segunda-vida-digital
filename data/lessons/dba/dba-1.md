# Qué es una base de datos

## Lo que vas a aprender

- Qué es una **base de datos** en términos simples.
- La diferencia entre una **planilla** y una base de datos real.
- Qué son **tablas, filas, columnas** y **claves**.
- Los **tipos de bases de datos** más usados hoy.

---

## Una definición sencilla

Una **base de datos** es un lugar donde se guarda información de forma **organizada**, para poder buscarla y modificarla rápido.

Una agenda telefónica de papel **es** una base de datos. Una planilla de Excel con tus clientes, también. Lo que llamamos "base de datos" en informática es lo mismo, pero con **dos superpoderes**:

1. **Maneja muchísima más información** sin perder velocidad (millones de filas).
2. **Mantiene la integridad** automáticamente (no permite registros duplicados, datos mal formados, contradicciones).

> 💡 Pensá en YouTube: tiene **miles de millones** de videos. Cuando buscás "gatos graciosos", te muestra resultados en menos de un segundo. Detrás de eso hay una base de datos brutal.

---

## Planilla vs. base de datos

Una planilla de Calc o Excel está bien para:
- Pocos datos (hasta unas miles de filas).
- Un solo usuario que la edita.
- Cálculos rápidos.

Una base de datos hace falta cuando:
- Tenés **millones** de registros.
- Hay **varios usuarios** trabajando al mismo tiempo.
- Querés **consultas complejas** ("dame todos los clientes que compraron más de X y viven en Y").
- Necesitás **integridad** garantizada (no quiero que se borre un cliente si tiene pedidos pendientes).

> 💡 Las planillas son para hojas; las bases de datos son para sistemas. Cuando un negocio crece, lo que era un Excel termina migrando a una base de datos.

---

## El concepto de tabla

Una base de datos se organiza en **tablas**. Cada tabla es como una planilla:

- Las **columnas** definen los **campos** (qué tipo de información guarda).
- Las **filas** son los **registros** (cada dato individual).

### Ejemplo: tabla `clientes`

| id | nombre | email | ciudad |
|---|---|---|---|
| 1 | Ana Pérez | ana@gmail.com | Córdoba |
| 2 | Juan Gómez | juan@hotmail.com | Buenos Aires |
| 3 | Lucía Ríos | lu@yahoo.com | Rosario |

Las columnas son `id`, `nombre`, `email`, `ciudad`. Las filas son los tres clientes.

### Ejemplo: tabla `pedidos`

| id | cliente_id | producto | cantidad | total |
|---|---|---|---|---|
| 101 | 1 | Cuaderno | 10 | 15000 |
| 102 | 2 | Mochila | 1 | 12000 |
| 103 | 1 | Lapicera | 5 | 4000 |

Esta tabla guarda los pedidos. Notá una cosa importante: la columna `cliente_id` **referencia** la tabla anterior. Es como decir "este pedido es del cliente con id 1, que es Ana".

---

## Claves: el orden del caos

### Clave primaria (Primary Key, PK)

Cada tabla tiene una columna que **identifica únicamente** cada fila. Generalmente es un número auto-incremental llamado `id`. **No puede repetirse ni quedar vacío**.

En la tabla `clientes`, la PK es `id`. Cada cliente tiene un `id` único.

### Clave foránea (Foreign Key, FK)

Cuando una columna apunta a la PK de **otra tabla**. Eso crea una **relación**.

En la tabla `pedidos`, la columna `cliente_id` es una FK que apunta al `id` de la tabla `clientes`.

> 💡 Las relaciones son el secreto del poder. En vez de copiar el nombre y email de Ana en cada pedido, guardás solo su id. Si Ana cambia su email, lo actualizás **en un solo lugar**.

---

## Tipos de bases de datos

### 1. Relacionales (SQL)

Las clásicas. Datos organizados en tablas con relaciones. Se consultan con un lenguaje llamado **SQL** (que vas a aprender en el próximo módulo).

Las más conocidas:

- 🐬 **MySQL** — gratis, muy usada en webs.
- 🐘 **PostgreSQL** — gratis, robusta, preferida por desarrolladores serios.
- 🪶 **SQLite** — chiquita, ideal para apps móviles o aprender.
- 🟪 **SQL Server** — de Microsoft, paga.
- 🟧 **Oracle** — paga, muy usada en grandes empresas.

### 2. No relacionales (NoSQL)

Más flexibles. Guardan datos en formato libre (como diccionarios o documentos). Sirven cuando la estructura cambia mucho o necesitás escalar a millones de usuarios.

Ejemplos:

- 🟩 **MongoDB** — documentos JSON.
- 🟥 **Redis** — para datos super rápidos en memoria.
- 🟦 **Firebase** (que justamente usamos en este proyecto) — Google.
- 🟧 **DynamoDB** — Amazon.

> 💡 No hay "mejor" o "peor" — cada una se usa para distintos problemas. Las relacionales son la base que todo administrador de datos debería conocer.

---

## Cosas que se hacen sobre una base de datos

Las cuatro operaciones básicas se conocen como **CRUD**:

- **C**reate — insertar nuevos datos.
- **R**ead — consultar / leer datos existentes.
- **U**pdate — modificar datos.
- **D**elete — borrar datos.

Vas a verlas en detalle en el próximo módulo con SQL.

Además, una base de datos te permite:

- **Buscar** con criterios complejos ("clientes de Buenos Aires que compraron más de $50.000").
- **Ordenar** los resultados.
- **Agrupar y resumir** ("total de ventas por mes").
- **Mantener integridad** ("no se puede borrar un cliente si tiene pedidos").
- **Compartir** entre muchos usuarios simultáneamente.

---

## Ejemplos de bases de datos en tu vida

- 🛒 **Mercado Libre**: cada producto, cliente, venta y comentario está en una base de datos.
- 📱 **Tu agenda del celular**: una mini base de datos local con tus contactos.
- 🏥 **El sistema del hospital**: pacientes, historias clínicas, turnos, todo está allí.
- 🏦 **Tu banco**: cada transacción, cada cliente, cada cuenta.
- 🎬 **Netflix**: catálogo de series, perfiles de usuarios, lo que mirás, recomendaciones.

Donde haya **muchos datos organizados**, hay una base de datos.

---

## Ejercicio práctico

Vas a hacer un **diseño en papel** de una base de datos simple.

### Caso

Imaginá que sos administrador de una **biblioteca chica del barrio**. Necesitás llevar:
- Los **libros** que tenés.
- Los **socios** registrados.
- Los **préstamos** activos.

### Tu tarea

Diseñá tres tablas en papel:

1. **`libros`**: ¿qué columnas tendría? (al menos: id, título, autor, género, cantidad de copias).
2. **`socios`**: ¿qué columnas? (al menos: id, nombre, email, teléfono).
3. **`prestamos`**: ¿qué columnas? Pensá: ¿quién prestó qué libro y cuándo lo devuelve?

Para `prestamos`, vas a necesitar **dos claves foráneas**: una al socio y otra al libro.

Inventá **3 socios, 3 libros y 3 préstamos** de ejemplo. Hacé el ejercicio a mano, en papel — es la mejor forma de internalizar la estructura.

---

## Resumen

- Una **base de datos** organiza información para buscarla y modificarla rápido.
- Se compone de **tablas** con **filas** (registros) y **columnas** (campos).
- La **clave primaria** identifica únicamente cada fila.
- La **clave foránea** relaciona dos tablas.
- Las **CRUD** son las cuatro operaciones básicas: Create, Read, Update, Delete.
- Hay bases **relacionales (SQL)** y **no relacionales (NoSQL)**.
- Las relacionales son las más usadas y las que vas a estudiar.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Base de datos** — repositorio organizado de información.
- **Tabla** — la unidad de organización (como una planilla).
- **Registro** o **fila** — una entrada individual.
- **Campo** o **columna** — un atributo del registro.
- **Clave primaria (PK)** — identificador único de cada registro.
- **Clave foránea (FK)** — referencia a otra tabla.
- **Relación uno a muchos** — un cliente, muchos pedidos.
- **CRUD** — las 4 operaciones básicas.
- **SQL** — lenguaje para consultar bases relacionales.
- **NoSQL** — bases no relacionales.
- **Integridad referencial** — la garantía de que las relaciones sean válidas.

> ✨ **Próximo paso:** En el módulo siguiente vas a aprender **SQL**, el lenguaje universal para hablarle a las bases de datos relacionales y hacer consultas reales.
