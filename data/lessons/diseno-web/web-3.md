# Publicar un sitio gratis con Netlify o GitHub Pages

## Lo que vas a aprender

- Qué es el **hosting** y por qué tu HTML local no es "una web pública".
- Cómo **publicar tu sitio gratis** en menos de 5 minutos con Netlify.
- Cómo usar **GitHub Pages** para sumarle versionado al hosting.
- Cómo conectar un **dominio propio** a tu sitio (opcional).

---

## El problema: tu HTML local no es accesible

Hasta ahora, tus páginas web están **en tu computadora**. Solo vos las ves, abriéndolas con Firefox desde Archivos.

Para que **otra persona** pueda visitarlas desde su celular, su PC, desde cualquier lugar del mundo, tu HTML tiene que estar **en un servidor** accesible desde Internet. Eso se llama **hosting**.

> 💡 Un servidor es básicamente una computadora prendida 24/7 conectada a Internet, que sirve tus archivos cuando alguien los pide. Antes alquilarlos costaba plata. Hoy hay servicios gratuitos brutalmente buenos.

---

## Opciones gratuitas

Las dos que recomiendo:

### 1. Netlify (la más fácil)

- Subís tus archivos arrastrando y soltando.
- Te da una URL del tipo `nombre-aleatorio.netlify.app`.
- 100 GB de tráfico gratis por mes.
- HTTPS automático.
- Ideal para empezar.

### 2. GitHub Pages (la más profesional)

- Subís tus archivos a un **repositorio de Git**.
- Te da una URL del tipo `tu-usuario.github.io/nombre-del-repo`.
- Gratuito, sin límite de tráfico razonable.
- Te suma **versionado** (podés volver atrás si rompés algo).
- Ideal cuando ya programás un poco.

Vamos a hacer la opción 1 primero (rápida y sin instalar nada) y la opción 2 después.

---

## Opción 1: Publicar con Netlify (drag and drop)

### Paso 1: preparar tu carpeta

Tu sitio puede ser un archivo solo o muchos. Lo importante es que tenga un archivo llamado **`index.html`** en la raíz. Esa es la página de inicio.

Estructura típica de un sitio simple:

```
mi-sitio/
├── index.html
├── estilos.css
└── imagen.jpg
```

Asegurate de tener todo en **una sola carpeta** (sin subcarpetas extra al inicio).

### Paso 2: crear cuenta en Netlify

1. Abrí Firefox y entrá a `netlify.com`.
2. Hacé clic en **"Sign up"** → **"Sign up with email"**.
3. Llená tu email y contraseña, confirmá el mail.
4. Iniciá sesión.

### Paso 3: subir tu sitio

1. En el panel principal, vas a ver una caja grande que dice **"Drag and drop your site output folder here"**.
2. Abrí el explorador de archivos en otro lado.
3. **Arrastrá tu carpeta** completa hasta esa caja.
4. Esperá 20 segundos.
5. Netlify te da una URL tipo `helpful-pastry-12345.netlify.app`. Hacé clic — **¡tu sitio está online!**

### Paso 4: cambiar la URL (opcional)

Esa URL aleatoria está bien, pero podés cambiarla a algo más lindo:

1. Andá a **Site settings → Change site name**.
2. Elegí un nombre disponible: `mi-portfolio-gnero.netlify.app`.

¡Listo!

> 💡 Para actualizar el sitio: arrastrás de nuevo la carpeta. Netlify reemplaza la versión anterior con la nueva en segundos.

---

## Opción 2: Publicar con GitHub Pages

Esta opción tiene una curva de aprendizaje un poco más alta pero **vale mucho la pena** porque agrega **versionado con Git** — la herramienta que usan todos los desarrolladores del mundo.

### Paso 1: crear cuenta en GitHub

1. Entrá a `github.com`.
2. **Sign up** con tu email.
3. Verificá el mail y entrá.

### Paso 2: crear un repositorio

1. Hacé clic en el **+ arriba a la derecha → New repository**.
2. **Repository name**: `mi-sitio` (o el nombre que quieras).
3. Marcá **Public** (debe ser público para que funcione GitHub Pages gratis).
4. Tildá **"Add a README file"**.
5. Hacé clic en **Create repository**.

### Paso 3: subir tu HTML

Forma fácil sin instalar nada:

1. En el repo que recién creaste, hacé clic en **"Add file" → "Upload files"**.
2. Arrastrá tu **`index.html`** y demás archivos.
3. Abajo, hacé clic en **"Commit changes"**.

### Paso 4: activar GitHub Pages

1. En el repo, andá a **Settings** (arriba a la derecha).
2. En el menú izquierdo, **Pages**.
3. En **"Branch"**, elegí `main` y carpeta `/ (root)`.
4. Hacé clic en **Save**.
5. Esperá 1-2 minutos.
6. Vuelve a refrescar — vas a ver una URL como `https://tu-usuario.github.io/mi-sitio/`.

¡Tu sitio está online y con versionado!

> 💡 Para actualizar tu sitio: subís nuevos archivos por la web o instalás Git localmente (lo recomendado si vas a hacer esto seguido).

---

## Dominio propio (opcional)

Si querés que tu URL sea **algo personalizado** como `mariadigital.com.ar` en vez de `mariadigital.netlify.app`:

1. Comprá un dominio en **NIC.ar** (`.com.ar`, cuesta poco) o **Namecheap** / **Cloudflare** (`.com`, dólares).
2. En Netlify (o GitHub Pages), andá a **Domain settings → Add custom domain**.
3. En la web donde compraste el dominio, configurá los **DNS** que te da Netlify (te dicen los valores exactos).
4. Esperá unas horas a que se propague.

> 💡 No te preocupes por el dominio propio al inicio. La URL gratuita de Netlify/GitHub está perfecta para empezar.

---

## HTTPS: el candadito

Tanto Netlify como GitHub Pages te dan **HTTPS automático**. Eso significa que la URL aparece con el candadito 🔒 y es segura.

No tenés que hacer nada — ya viene activado.

---

## Algunos tips finales

### El archivo `index.html` es sagrado

Cuando alguien va a `tu-sitio.netlify.app`, lo primero que el servidor sirve es **`index.html`**. Si tu archivo principal se llama distinto, no funciona.

### Las rutas tienen que ser relativas

Si en tu HTML escribís:

```html
<link rel="stylesheet" href="/home/ger/Documentos/estilos.css">
```

eso **no funciona online** porque esa ruta no existe en el servidor.

Usá rutas relativas:

```html
<link rel="stylesheet" href="estilos.css">
```

### Sensibles a mayúsculas

En tu PC, `Imagen.jpg` y `imagen.jpg` pueden ser iguales. **En el servidor son distintos**. Por las dudas, usá siempre **minúsculas** y sin espacios.

❌ Mal: `Mi Foto.JPG`
✅ Bien: `mi-foto.jpg`

---

## Ejercicio práctico

Vas a publicar el sitio que armaste en los dos módulos anteriores.

1. Asegurate que tu carpeta tenga:
   - `index.html` (la página principal, podés renombrar `mi-perfil.html` → `index.html`).
   - `estilos.css`.
   - Cualquier imagen que uses.
2. **Publicalo en Netlify** siguiendo los pasos: crear cuenta → arrastrar y soltar.
3. Anotá tu URL.
4. **Compartila** con un amigo o familiar por WhatsApp para que la abra desde su celular. ¡Tu primer sitio público!
5. (Opcional) También subilo a **GitHub Pages** para tener una segunda versión versionada.
6. Hacé un cambio chico en tu HTML (por ejemplo, cambiá el color de un título en el CSS) y **actualizá**: en Netlify, volvé a arrastrar la carpeta; en GitHub, subí el archivo modificado.

---

## Resumen

- Tu HTML local **solo lo ves vos**. Para que el mundo lo vea, necesitás un **hosting**.
- **Netlify** y **GitHub Pages** son los dos servicios gratuitos más fáciles.
- Netlify: arrastrar y soltar la carpeta → sitio online en segundos.
- GitHub Pages: subir a un repositorio público → activar en Settings → Pages.
- Tu archivo principal **se debe llamar `index.html`**.
- Las rutas dentro de los archivos tienen que ser **relativas** y en **minúsculas**.
- Podés sumar un **dominio propio** (`.com`, `.com.ar`) cuando quieras.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Hosting** — el servicio que mantiene tu sitio online.
- **Netlify** — servicio de hosting gratuito.
- **GitHub Pages** — el equivalente de GitHub.
- **Dominio** — la dirección "humana" del sitio (`misitio.com`).
- **DNS** — el sistema que conecta el dominio con el servidor.
- **HTTPS / SSL** — la conexión segura, el candadito 🔒.
- **Despliegue** o **deploy** — el acto de subir el sitio.
- **Git** — el sistema de versionado.
- **Repositorio** — la carpeta versionada en GitHub.
- **Commit** — un cambio versionado.
- **Vercel** — alternativa similar a Netlify, muy usada.

> ✨ **¡Terminaste Diseño web!** Sabés HTML, CSS y publicar tu sitio. Ya podés armar landing pages, portfolios y sitios simples para emprendimientos. El próximo gran paso es **Informática en la nube**, donde vas a ver cómo se escala todo esto a millones de visitas.
