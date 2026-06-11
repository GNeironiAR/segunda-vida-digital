# Introducción a HTML

## Lo que vas a aprender

- Qué es **HTML** y por qué es la base de toda página web.
- La estructura de **etiquetas** y cómo se anidan.
- Las etiquetas más usadas: **títulos, párrafos, listas, enlaces, imágenes**.
- Cómo armar y **ver tu primera página** sin instalar nada.

---

## ¿Qué es HTML?

**HTML** (HyperText Markup Language — lenguaje de marcas de hipertexto) es el lenguaje con el que están escritas **todas las páginas web del mundo**. Define **qué contiene** una página: títulos, párrafos, imágenes, enlaces, formularios.

> 💡 Cada página que abrís — Mercado Libre, YouTube, Wikipedia — empieza siendo un archivo `.html` que tu navegador interpreta y te muestra.

HTML **no es un lenguaje de programación**. Es un **lenguaje de marcado**: vos escribís texto y le ponés "etiquetas" que indican qué es cada cosa.

---

## La estructura básica

Una página HTML mínima tiene esta forma:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primera página</title>
</head>
<body>
  <h1>Hola mundo</h1>
  <p>Esta es mi primera página web.</p>
</body>
</html>
```

Vamos por partes:

- `<!DOCTYPE html>` → le dice al navegador "esto es HTML5".
- `<html>` → todo el contenido de la página va adentro.
- `<head>` → **información sobre** la página (título, idioma, codificación). No se ve.
- `<body>` → **el contenido visible**: lo que el usuario va a ver.

> 💡 Las etiquetas funcionan en **pares**: una de apertura (`<p>`) y una de cierre (`</p>`). Todo lo que va en el medio está afectado por esa etiqueta.

---

## Cómo probar tu primera página

No necesitás instalar nada. Vamos a usar **el editor de texto** que viene en Linux Mint.

1. Abrí **Archivos** (Nautilus) y andá a tu carpeta **Documentos**.
2. Clic derecho → **Nuevo documento → Documento vacío**.
3. Llamalo **`index.html`** (la extensión es importante).
4. Hacé doble clic — se abre con el editor de texto.
5. **Pegá** el código de arriba y guardá con `Ctrl + S`.
6. Volvé al explorador de archivos, **clic derecho sobre `index.html` → Abrir con → Firefox**.

Vas a ver tu página en el navegador. Es un sitio web local, solo lo ves vos, pero **es real**.

> 💡 También podés usar editores como **VSCode** o **Sublime Text** (más cómodos), o un editor online como `codepen.io` o `jsfiddle.net` si querés probar sin instalar nada.

---

## Las etiquetas más usadas

### Títulos: h1 a h6

Para organizar la jerarquía del contenido. `h1` es el más importante, `h6` el más chico.

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Subsección</h3>
```

> 💡 Por SEO (cómo te ve Google), **una sola `<h1>` por página**. Después podés usar varios `<h2>`, `<h3>` etc.

### Párrafos

```html
<p>Este es un párrafo de texto. Puede tener varias oraciones, links, negrita.</p>
```

### Negrita, cursiva, subrayado

```html
<p>Esta palabra está en <strong>negrita</strong>.</p>
<p>Esta palabra está en <em>cursiva</em>.</p>
<p>Esta palabra está <u>subrayada</u>.</p>
```

### Listas

```html
<!-- Sin orden (con viñetas) -->
<ul>
  <li>Manzanas</li>
  <li>Peras</li>
  <li>Bananas</li>
</ul>

<!-- Con orden (numerada) -->
<ol>
  <li>Primero esto</li>
  <li>Después esto</li>
  <li>Por último esto</li>
</ol>
```

### Enlaces

```html
<a href="https://google.com">Ir a Google</a>
<a href="contacto.html">Contacto</a>
<a href="https://google.com" target="_blank">Abrir en pestaña nueva</a>
```

### Imágenes

```html
<img src="foto.jpg" alt="Descripción de la foto">
```

- `src` → ruta de la imagen (puede ser local o un link).
- `alt` → texto que se ve si la imagen no carga, y que **leen los lectores de pantalla** (importante para accesibilidad).

### Saltos y líneas

```html
<br>     <!-- Salto de línea -->
<hr>     <!-- Línea horizontal -->
```

### Contenedores: div y span

Sirven para **agrupar** contenido y darle estilo después con CSS.

```html
<div>
  <p>Estoy dentro de un div.</p>
</div>

<p>Este texto tiene <span>una parte</span> con un span.</p>
```

`<div>` agrupa bloques. `<span>` agrupa cosas dentro de una línea de texto.

---

## Anidamiento

Las etiquetas se pueden meter unas adentro de otras. Esto se llama **anidar**.

```html
<div>
  <h2>Mi sección</h2>
  <p>Un párrafo con un <a href="#">link</a> adentro.</p>
  <ul>
    <li>Item con <strong>negrita</strong></li>
  </ul>
</div>
```

**Regla importante**: la última etiqueta que abrís es la primera que cerrás. No cruces apertura y cierre.

❌ Mal: `<p><strong>texto</p></strong>`
✅ Bien: `<p><strong>texto</strong></p>`

---

## Comentarios

Para dejar notas que no se ven en la web:

```html
<!-- Esto es un comentario y no se renderiza -->
```

Útiles para explicar partes complicadas de tu código.

---

## Atributos

Las etiquetas pueden tener **atributos** que les dan información extra. Algunos comunes:

- `id="algo"` → identificador único.
- `class="algo"` → clase (para aplicar estilos a varios elementos).
- `style="color: red;"` → estilo directo (mejor evitarlo, lo vas a ver en CSS).
- `title="texto"` → texto que aparece al pasar el mouse.

```html
<p id="introduccion" class="texto-grande" title="Pasale el mouse">
  Hola
</p>
```

---

## Estructura semántica moderna

HTML5 trae etiquetas que dicen **qué representa** cada bloque (no solo "div"):

```html
<header>Cabecera del sitio (logo, navegación)</header>
<nav>Menú de navegación</nav>
<main>Contenido principal</main>
<section>Una sección lógica</section>
<article>Un artículo independiente</article>
<aside>Contenido relacionado, barra lateral</aside>
<footer>Pie de página</footer>
```

Usarlas en lugar de `<div>` mejora la **accesibilidad** y el **SEO**.

---

## Ejercicio práctico

Vas a armar **tu primera página web** sobre vos mismo.

1. Creá un archivo `mi-perfil.html` en tu carpeta Documentos.
2. Pegá esta estructura base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi perfil</title>
</head>
<body>
  <!-- Acá va tu contenido -->
</body>
</html>
```

3. Adentro del `<body>`, agregá:
   - Un `<h1>` con tu nombre completo.
   - Un `<p>` debajo con una frase de presentación.
   - Una imagen `<img>` (puede ser una foto tuya o un placeholder de Internet).
   - Un `<h2>` que diga "Sobre mí" y debajo dos o tres párrafos.
   - Un `<h2>` que diga "Lo que sé hacer" y debajo una lista `<ul>` con 5 ítems.
   - Un `<h2>` que diga "Contacto" y un `<a>` con tu email tipo `mailto:tu@email.com`.
4. Guardá y abrilo en Firefox.
5. **Revisalo**. Hacé cambios y refrescá (F5) para verlos.

---

## Resumen

- **HTML** es el lenguaje base de la web. No es un lenguaje de programación, es de marcado.
- Una página tiene `<!DOCTYPE html>`, `<html>`, `<head>` y `<body>`.
- Las etiquetas vienen en **pares** (`<p>...</p>`) y pueden **anidarse**.
- Los esenciales: `h1`-`h6`, `p`, `strong`, `em`, `ul`, `ol`, `li`, `a`, `img`, `div`, `span`.
- Las etiquetas pueden tener **atributos**: `id`, `class`, `href`, `src`, etc.
- Las etiquetas semánticas (`header`, `nav`, `main`, `footer`) mejoran SEO y accesibilidad.
- Probás abriendo el archivo con un navegador. **Cualquier `.html` se ve en Firefox**.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **HTML** — lenguaje de marcado de la web.
- **Etiqueta** o **tag** — los `<algo>`.
- **Atributo** — información extra dentro de la etiqueta (`href`, `src`, `class`).
- **Anidamiento** — etiquetas dentro de otras.
- **Semántica HTML** — usar etiquetas según su significado.
- **SEO** — optimización para que Google te encuentre.
- **Accesibilidad web (a11y)** — que la página la puedan usar todos, incluso con discapacidad.
- **DOCTYPE** — declaración del tipo de documento.
- **Codepen / JSFiddle** — editores online para probar HTML rápido.
- **VS Code** — el editor más usado para hacer código.

> ✨ **Próximo paso:** En el módulo siguiente vas a aprender **CSS**, el lenguaje que le da estilo y diseño a las páginas. HTML es el esqueleto; CSS es la ropa.
