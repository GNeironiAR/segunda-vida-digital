# SQL básico: SELECT, INSERT, UPDATE

## Lo que vas a aprender

- Qué es **SQL** y por qué todo el mundo de datos lo usa.
- Cómo **leer** datos con `SELECT`.
- Cómo **insertar, modificar y borrar** con `INSERT`, `UPDATE` y `DELETE`.
- Cómo **probar SQL en el navegador** sin instalar nada.

---

## ¿Qué es SQL?

**SQL** (se pronuncia *sí-cuel* o *es-cu-éle*, las dos están bien) significa **Structured Query Language** — lenguaje estructurado de consultas. Es **el idioma** con el que le hablás a una base de datos relacional para pedirle, modificar, agregar o borrar información.

Lo aprendés una vez y te sirve en:
- MySQL, PostgreSQL, SQLite, SQL Server, Oracle.
- En herramientas de análisis (Excel Power Query, Power BI, Tableau).
- En productos como Notion, Airtable, Retool.

Es **el segundo lenguaje más usado del mundo** (después de Excel) en empresas.

> 💡 Saber SQL básico es una habilidad transversal que te abre puertas en **muchísimos puestos**, no solo de programador: marketing, ventas, administración, contabilidad, salud, todos miran reportes que vienen de bases de datos.

---

## Cómo probar SQL sin instalar nada

Vamos a usar **SQLite Online**, un editor SQL gratuito en el navegador. No necesitás cuenta.

1. Abrí Firefox y entrá a `sqliteonline.com`.
2. Vas a ver tres paneles:
   - **Izquierda**: las tablas disponibles.
   - **Centro/arriba**: el editor donde tipeás las consultas.
   - **Centro/abajo**: el resultado de tu consulta.
3. Por defecto trae una base de ejemplo con tablas tipo `customers`, `products`, etc.

Si querés empezar con una base limpia, hacé clic en **"New"** o **"Reset"**.

---

## Crear una tabla de prueba

Antes de consultar, necesitamos datos. Vamos a crear una tabla simple. **Copiá y pegá** esto en el editor y hacé clic en **"Run"**:

```sql
CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nombre TEXT,
  ciudad TEXT,
  edad INTEGER
);

INSERT INTO clientes (id, nombre, ciudad, edad) VALUES
  (1, 'Ana Pérez', 'Córdoba', 32),
  (2, 'Juan Gómez', 'Buenos Aires', 45),
  (3, 'Lucía Ríos', 'Rosario', 28),
  (4, 'Pedro Cruz', 'Buenos Aires', 50),
  (5, 'María López', 'Córdoba', 24);
```

Apretá **Run**. Si todo va bien, te dice que la tabla se creó y se insertaron 5 filas.

---

## SELECT: leer datos

Es la consulta más usada. La estructura básica es:

```sql
SELECT columnas FROM tabla;
```

### Traer todas las columnas y todas las filas

```sql
SELECT * FROM clientes;
```

El `*` significa "todas las columnas". Vas a ver tu tabla de 5 clientes completa.

### Traer columnas específicas

```sql
SELECT nombre, ciudad FROM clientes;
```

Solo muestra nombre y ciudad.

### Filtrar con WHERE

```sql
SELECT * FROM clientes WHERE ciudad = 'Buenos Aires';
```

Te trae solo a Juan y Pedro.

Más filtros útiles:

```sql
SELECT * FROM clientes WHERE edad > 30;
SELECT * FROM clientes WHERE edad >= 25 AND edad <= 45;
SELECT * FROM clientes WHERE nombre LIKE 'A%';   -- empieza con A
SELECT * FROM clientes WHERE ciudad != 'Córdoba';
```

### Ordenar con ORDER BY

```sql
SELECT * FROM clientes ORDER BY edad DESC;
```

`DESC` = descendente (mayor a menor). `ASC` = ascendente (por defecto).

### Limitar resultados con LIMIT

```sql
SELECT * FROM clientes ORDER BY edad DESC LIMIT 3;
```

Te trae los 3 más grandes.

### Contar y agrupar

```sql
SELECT COUNT(*) FROM clientes;
-- Cuántos clientes en total

SELECT ciudad, COUNT(*) FROM clientes GROUP BY ciudad;
-- Cuántos clientes hay por ciudad

SELECT ciudad, AVG(edad) FROM clientes GROUP BY ciudad;
-- Edad promedio por ciudad
```

---

## INSERT: agregar datos

Para sumar un cliente nuevo:

```sql
INSERT INTO clientes (id, nombre, ciudad, edad)
VALUES (6, 'Carolina Díaz', 'Mendoza', 36);
```

Si corrés un `SELECT * FROM clientes;` después, vas a ver 6 filas.

> 💡 Si tu tabla tiene `id` como `INTEGER PRIMARY KEY`, podés **omitirlo** y la base lo asigna sola.

---

## UPDATE: modificar datos

Para cambiar el dato de un cliente:

```sql
UPDATE clientes
SET ciudad = 'La Plata'
WHERE id = 2;
```

Esto cambia la ciudad de Juan (id 2) de "Buenos Aires" a "La Plata".

> ⚠️ **NUNCA** te olvides del `WHERE` en un UPDATE. Si lo hacés sin filtro:
>
> ```sql
> UPDATE clientes SET ciudad = 'La Plata';
> ```
>
> ¡Todos los clientes pasan a vivir en La Plata! Es uno de los errores más temidos.

---

## DELETE: borrar datos

```sql
DELETE FROM clientes WHERE id = 5;
```

Borrás a María.

> ⚠️ Lo mismo que con UPDATE: si te olvidás el `WHERE`, **borrás toda la tabla**. Antes de un DELETE importante, hacé siempre un `SELECT` con el mismo `WHERE` para confirmar qué vas a borrar.

---

## Combinando consultas: el verdadero poder de SQL

### JOIN: unir dos tablas

Imaginate que también tenés una tabla `pedidos`:

```sql
CREATE TABLE pedidos (
  id INTEGER PRIMARY KEY,
  cliente_id INTEGER,
  producto TEXT,
  total INTEGER
);

INSERT INTO pedidos (id, cliente_id, producto, total) VALUES
  (101, 1, 'Cuaderno', 15000),
  (102, 2, 'Mochila', 12000),
  (103, 1, 'Lapicera', 4000),
  (104, 4, 'Cuaderno', 7500);
```

Ahora podés **unir** las dos tablas para ver el nombre del cliente junto a sus pedidos:

```sql
SELECT clientes.nombre, pedidos.producto, pedidos.total
FROM clientes
JOIN pedidos ON clientes.id = pedidos.cliente_id;
```

Esto te trae el nombre, producto y total de cada pedido. Sin el JOIN solo tendrías `cliente_id`, que es un número que no te dice nada.

### Total gastado por cliente

```sql
SELECT clientes.nombre, SUM(pedidos.total) AS total_gastado
FROM clientes
JOIN pedidos ON clientes.id = pedidos.cliente_id
GROUP BY clientes.nombre;
```

Vas a obtener:

| nombre | total_gastado |
|---|---|
| Ana Pérez | 19000 |
| Juan Gómez | 12000 |
| Pedro Cruz | 7500 |

Esto es el tipo de consulta que un negocio hace todo el tiempo para sus reportes.

---

## Buenas prácticas

- **Escribí los comandos en MAYÚSCULAS** (`SELECT`, `FROM`, `WHERE`). No es obligatorio pero hace el código más legible.
- **Usá indentación**: una cláusula por línea.
- **Comentá** consultas complejas con `--`:

```sql
-- Top 5 ciudades por cantidad de clientes
SELECT ciudad, COUNT(*) FROM clientes
GROUP BY ciudad
ORDER BY COUNT(*) DESC
LIMIT 5;
```

- **Antes de un UPDATE o DELETE**, siempre corré un `SELECT` con el mismo `WHERE` para ver qué vas a tocar.

---

## Ejercicio práctico

Con las tablas `clientes` y `pedidos` que creaste, resolvé:

1. Traé **todos los clientes** ordenados por edad de mayor a menor.
2. Traé los clientes que viven en **"Buenos Aires" o "Córdoba"**.
3. Insertá un nuevo cliente: **Carlos Mora, La Plata, 41 años**.
4. Cambiá la ciudad de **Lucía Ríos** a "Mendoza".
5. Borrá el pedido **101**.
6. Mostrá el **total gastado por ciudad** (uniendo las dos tablas).
7. Traé el cliente que **más gastó** (mostrando nombre y total).

Pasos sugeridos para el punto 7:

```sql
SELECT clientes.nombre, SUM(pedidos.total) AS total
FROM clientes
JOIN pedidos ON clientes.id = pedidos.cliente_id
GROUP BY clientes.nombre
ORDER BY total DESC
LIMIT 1;
```

---

## Resumen

- **SQL** es el lenguaje universal de las bases relacionales.
- **SELECT** lee datos. Con `WHERE` filtrás, con `ORDER BY` ordenás, con `LIMIT` cortás.
- **INSERT** agrega filas; **UPDATE** modifica; **DELETE** borra.
- **Nunca** UPDATE ni DELETE sin `WHERE` salvo que sepas exactamente qué hacés.
- **JOIN** une tablas relacionadas por sus claves.
- **GROUP BY + COUNT/SUM/AVG** te da reportes agregados (ventas por mes, clientes por ciudad).
- Podés practicar **gratis en `sqliteonline.com`** sin instalar nada.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **SQL** — el lenguaje estructurado de consulta.
- **Query** — una consulta.
- **SELECT, INSERT, UPDATE, DELETE** — las 4 sentencias básicas.
- **WHERE** — filtra qué filas usar.
- **ORDER BY** — ordena los resultados.
- **GROUP BY** — agrupa para hacer cálculos por grupo.
- **JOIN** — une dos tablas.
- **SUM, COUNT, AVG, MAX, MIN** — funciones de agregación.
- **DISTINCT** — elimina duplicados.
- **Subquery** — una consulta dentro de otra.
- **Index** — acelera búsquedas en tablas grandes.

> ✨ **Próximo paso:** En el último módulo del path vas a aprender a usar **Excel avanzado para datos** — porque cuando los datos son chicos, no hace falta una base de datos; Excel también es una herramienta seria si la sabés usar.
