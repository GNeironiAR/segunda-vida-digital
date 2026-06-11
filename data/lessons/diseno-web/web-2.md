# CSS: dándole estilo a la página

## Lo que vas a aprender

- Qué es **CSS** y cómo se conecta con HTML.
- Cómo cambiar **colores, fuentes y tamaños**.
- Cómo manejar **espacios, márgenes y bordes** (el famoso *box model*).
- Cómo hacer un diseño que se ve bien en **celular** y en computadora.

---

## ¿Qué es CSS?

**CSS** (Cascading Style Sheets — hojas de estilo en cascada) es el lenguaje que **le da estilo** a las páginas HTML.

Si HTML es la estructura (esqueleto), CSS es la apariencia (la ropa, los colores, la disposición). Es lo que hace que una página se vea **profesional** en vez de un texto plano con viñetas.

> 💡 Toda la diferencia entre Google y un trabajo de la escuela primaria son **3 cosas**: HTML, CSS y un poco de JavaScript. Lo grande está en el CSS.

---

## Cómo conectar CSS con HTML

Hay tres formas de aplicar CSS, en orden de mejor a peor práctica:

### 1. En un archivo separado (la mejor)

Creás un archivo `estilos.css` y en el `<head>` de tu HTML lo enlazás:

```html
<head>
  <link rel="stylesheet" href="estilos.css">
</head>
```

### 2. En el `<head>` con `<style>`

```html
<head>
  <style>
    p { color: red; }
  </style>
</head>
```

### 3. Inline (la peor)

Directo en la etiqueta. **Evitalo** porque mezcla estructura con estilo.

```html
<p style="color: red;">Hola</p>
```

---

## La sintaxis básica

CSS funciona así:

```css
selector {
  propiedad: valor;
  propiedad: valor;
}
```

Ejemplo:

```css
p {
  color: blue;
  font-size: 18px;
}
```

Esto significa: "todos los `<p>` van a tener texto azul y tamaño 18 píxeles".

---

## Selectores: a quién aplicar el estilo

### Por etiqueta

```css
h1 { color: red; }
/* Aplica a TODOS los <h1> */
```

### Por clase (la más usada)

En HTML:
```html
<p class="destacado">Hola</p>
```

En CSS:
```css
.destacado { color: green; }
/* Aplica a todo lo que tenga class="destacado" */
```

### Por id (único, solo uno por página)

En HTML:
```html
<div id="encabezado">...</div>
```

En CSS:
```css
#encabezado { background: yellow; }
```

### Combinados

```css
h1, h2, h3 { color: navy; }
/* Aplica a los tres */

article p { font-size: 14px; }
/* Solo a los <p> dentro de un <article> */
```

---

## Propiedades esenciales

### Colores y fondo

```css
.caja {
  color: #2a2620;        /* Color del texto */
  background: #faf7f2;   /* Color de fondo */
}
```

Los colores se escriben:
- Por **nombre**: `red`, `blue`, `green`...
- Por **hexadecimal**: `#ff0000` (rojo), `#000000` (negro), `#ffffff` (blanco). 
- Por **rgb**: `rgb(255, 0, 0)`.
- Con **transparencia**: `rgba(0, 0, 0, 0.5)` (50% opaco).

### Tipografía

```css
body {
  font-family: 'Arial', sans-serif;   /* Tipo de fuente */
  font-size: 16px;                    /* Tamaño */
  font-weight: bold;                  /* Negrita */
  font-style: italic;                 /* Cursiva */
  line-height: 1.5;                   /* Altura de línea */
  text-align: center;                 /* Alineación */
}
```

> 💡 Para fuentes profesionales, usá **Google Fonts** (`fonts.google.com`): copiás un link y tenés cientos de fuentes.

### Tamaños

CSS tiene varias unidades:
- `px` (píxeles): fijo.
- `%`: relativo al contenedor.
- `em` y `rem`: relativos al tamaño de fuente.
- `vw` y `vh`: relativos al tamaño de la pantalla (`100vw` = todo el ancho).

```css
.imagen {
  width: 300px;         /* Ancho fijo */
  height: auto;         /* Alto proporcional */
  max-width: 100%;      /* No supera su contenedor */
}
```

---

## El box model: la base de todo

Cada elemento HTML es una **caja**. Esa caja tiene 4 zonas:

```
┌──────────────────────────────┐
│  MARGIN (espacio externo)    │
│  ┌─────────────────────────┐ │
│  │  BORDER (borde)         │ │
│  │  ┌──────────────────┐   │ │
│  │  │ PADDING (interno)│   │ │
│  │  │ ┌──────────────┐ │   │ │
│  │  │ │  CONTENIDO   │ │   │ │
│  │  │ └──────────────┘ │   │ │
│  │  └──────────────────┘   │ │
│  └─────────────────────────┘ │
└──────────────────────────────┘
```

Las propiedades:

```css
.caja {
  margin: 20px;       /* Espacio EXTERNO */
  border: 2px solid black;
  padding: 16px;      /* Espacio INTERNO */
  width: 300px;
  height: 100px;
}
```

Podés especificar cada lado:

```css
margin: 10px 20px 30px 40px;
/* arriba, derecha, abajo, izquierda */

padding: 10px 20px;
/* arriba/abajo, izquierda/derecha */
```

### El truco que siempre conviene aplicar

Por defecto, el `width` no incluye el padding ni el border, lo que genera dolores de cabeza. Solución global:

```css
* {
  box-sizing: border-box;
}
```

Con esto, `width: 300px` significa **300px totales** (incluyendo padding y border). Mucho más intuitivo.

---

## Bordes y esquinas redondeadas

```css
.tarjeta {
  border: 1px solid #d4ccba;
  border-radius: 8px;     /* Esquinas redondeadas */
  padding: 16px;
  background: #ffffff;
}
```

### Sombras

```css
.tarjeta {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  /* desplazamiento-x desplazamiento-y desenfoque color */
}
```

Le da profundidad.

---

## Flexbox: alinear y distribuir

**Flexbox** es la forma moderna de organizar elementos. Lo aplicás al contenedor:

```css
.contenedor {
  display: flex;
  gap: 16px;                    /* Espacio entre hijos */
  justify-content: center;       /* Horizontal: start, center, end, space-between */
  align-items: center;           /* Vertical: stretch, start, center, end */
}
```

Útil para hacer **menús**, **galerías**, **tarjetas en fila**, **centrar cosas**.

---

## Responsive: que se vea bien en celular

Hoy más del 60% de los usuarios entran desde celular. Tu sitio **tiene que adaptarse**.

### Meta viewport

En el `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Sin esto, en celular se ve achicado y horrible.

### Media queries

CSS que se aplica solo bajo ciertas condiciones:

```css
/* Estilo normal (cualquier pantalla) */
.titulo { font-size: 32px; }

/* Solo en pantallas chicas (celulares) */
@media (max-width: 600px) {
  .titulo { font-size: 22px; }
}
```

> 💡 **Mobile first**: muchos diseñadores ya empiezan diseñando primero para celular y después agrandan para PC. Te ahorra cabeza.

---

## Ejercicio práctico

Vas a **estilizar la página de perfil** que hiciste en el módulo anterior.

1. Abrí tu `mi-perfil.html`.
2. En el mismo directorio, creá un archivo `estilos.css`.
3. En el `<head>` de tu HTML, enlazalo:

```html
<link rel="stylesheet" href="estilos.css">
```

4. En `estilos.css`, agregá:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #faf7f2;
  color: #2a2620;
  line-height: 1.6;
  padding: 40px 20px;
  max-width: 720px;
  margin: 0 auto;
}

h1 {
  color: #7a6a3d;
  font-size: 32px;
  margin-bottom: 16px;
}

h2 {
  margin-top: 24px;
  margin-bottom: 12px;
  color: #2a2620;
}

p { margin-bottom: 12px; }

ul { padding-left: 20px; margin-bottom: 16px; }

img {
  max-width: 200px;
  border-radius: 50%;
  display: block;
  margin: 20px 0;
}

a {
  color: #4a6a3a;
  font-weight: bold;
  text-decoration: none;
}

a:hover { text-decoration: underline; }

@media (max-width: 600px) {
  body { padding: 20px 12px; }
  h1 { font-size: 24px; }
}
```

5. Guardá los dos archivos y refrescá Firefox (F5).
6. Ahora redimensioná la ventana del navegador a tamaño celular: vas a ver cómo el `@media` cambia los tamaños.

---

## Resumen

- **CSS** le da estilo a HTML usando **selectores**, **propiedades** y **valores**.
- Lo ideal es ponerlo en un **archivo separado** y enlazarlo.
- Los selectores más usados: por etiqueta, por **clase** (`.algo`) y por **id** (`#algo`).
- El **box model**: cada elemento es una caja con margin, border, padding y contenido.
- `box-sizing: border-box` te simplifica la vida.
- **Flexbox** alinea y distribuye elementos.
- **Media queries** hacen tu sitio **responsive** (se adapta al celular).

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **CSS** — el lenguaje de estilo de la web.
- **Selector** — a qué elemento aplicar el estilo.
- **Box model** — cómo se calcula el espacio de cada elemento.
- **Flexbox** — sistema para distribuir elementos.
- **Grid** — sistema más avanzado, en cuadrícula.
- **Responsive design** — diseño adaptable a cualquier pantalla.
- **Media query** — CSS condicional según la pantalla.
- **Mobile first** — diseñar primero para celular.
- **Google Fonts** — fuentes gratis para tu web.
- **Tailwind CSS** — un framework popular para escribir CSS más rápido.
- **Hover** — el efecto al pasar el mouse.

> ✨ **Próximo paso:** En el último módulo del path vas a aprender a **publicar tu sitio en Internet gratis** con Netlify o GitHub Pages — para que cualquier persona del mundo pueda visitarlo desde una URL.
