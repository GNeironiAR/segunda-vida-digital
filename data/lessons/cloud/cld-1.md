# Qué es la nube y para qué sirve

## Lo que vas a aprender

- Qué es **la nube** en términos serios (más allá de "guardar archivos online").
- Por qué **cambió la industria de la informática** para siempre.
- La diferencia entre **IaaS, PaaS y SaaS**.
- Cuándo conviene la nube y cuándo no.

---

## La nube: una definición profesional

Ya viste la nube en Office Básico (guardar archivos en Google Drive). Pero la **nube de verdad** es muchísimo más que eso.

**Cloud computing** (informática en la nube) significa **alquilar recursos informáticos** —servidores, almacenamiento, bases de datos, software— **bajo demanda, por Internet**, sin tener que comprarlos físicamente.

Antes (años 90 y 2000):
- Para tener un sitio web grande, comprabas servidores físicos por miles de dólares.
- Los metías en una **sala con aire acondicionado**.
- Pagabas técnicos para mantenerlos.
- Si tu sitio crecía mucho, comprabas más servidores. Y rezabas.

Hoy (era cloud):
- Entrás a una página, pedís "dame 10 servidores".
- En 60 segundos los tenés funcionando.
- Pagás solo por las horas que los usás.
- Si tu sitio crece a millones de visitas, **se agrandan solos**.

> 💡 La nube **democratizó la informática a escala**. Hoy un emprendedor desde su casa puede competir con infraestructura tecnológica al nivel de Google. Antes, eso era inalcanzable.

---

## Por qué la nube cambió todo

### 1. Pagás solo lo que usás

Como la electricidad o el agua. Si usás 1 hora de un servidor, pagás 1 hora. Si lo apagás, dejás de pagar.

### 2. Escalabilidad infinita

¿Tu app de e-commerce tiene mil visitas habituales y de repente entra a la TV y se llena? La nube **agranda automáticamente** los recursos para que no se caiga.

### 3. Disponibilidad global

Tu servicio puede estar funcionando **en 5 continentes** al mismo tiempo. Tus usuarios en Japón ven la página tan rápido como los de Argentina, porque hay servidores cerca de cada uno.

### 4. Foco en lo importante

No te ocupás de mantener hardware, refrigeración, actualizaciones de seguridad de bajo nivel. **Te ocupás de tu producto**.

### 5. Innovación rápida

¿Querés probar una idea nueva? La armás en una tarde, la subís, si no funciona la borrás. **Costo de experimentar: casi cero**.

---

## Los tres modelos de servicio

Cuando alguien dice "servicio en la nube", puede referirse a tres cosas distintas. Acordate con la sigla **IaaS / PaaS / SaaS**:

### IaaS — Infraestructura como Servicio

**Te alquilan los servidores virtuales y vos los configurás todo**.

- Vos elegís el sistema operativo (Linux, Windows).
- Vos instalás el software que necesites.
- Vos administrás los servidores.
- Te da la máxima flexibilidad pero también la máxima responsabilidad.

**Ejemplos**: 
- **AWS EC2** (Amazon Elastic Compute Cloud).
- **Google Compute Engine**.
- **Azure Virtual Machines**.

**Cuándo se usa**: cuando necesitás control total — por ejemplo, una empresa que ya tiene su software y solo necesita "los fierros".

### PaaS — Plataforma como Servicio

**Te dan un entorno listo donde subís tu código y se ejecuta**. No te preocupás por servidores.

- Vos escribís tu código.
- Lo subís.
- La plataforma se ocupa de los servidores, balanceo, escalado.
- Pagás por uso de recursos.

**Ejemplos**:
- **Netlify** (lo viste en Diseño web — sí, **es PaaS**).
- **Vercel**.
- **Heroku**.
- **Google App Engine**.
- **Firebase** (lo usamos en este proyecto).

**Cuándo se usa**: cuando querés foco total en tu producto y no en la infraestructura.

### SaaS — Software como Servicio

**Te dan el software ya hecho, listo para usar desde el navegador**. No instalás nada, no programás nada.

- Pagás una suscripción mensual.
- Usás el producto desde el navegador o app.
- Todo lo demás es problema del proveedor.

**Ejemplos**:
- **Gmail** (lo usás todos los días).
- **Google Drive / Docs / Sheets**.
- **Microsoft 365**.
- **Spotify**, **Netflix**, **Mercado Libre**.
- **Salesforce**, **Slack**, **Notion**.

**Cuándo se usa**: cuando solo querés **resolver un problema** y no te interesa cómo está hecho.

### Resumen visual

```
SaaS (Software)        ← El cliente usa una app
PaaS (Plataforma)      ← El desarrollador sube código
IaaS (Infraestructura) ← El admin gestiona servidores virtuales
On-premise (servidor) ← Vos comprás y mantenés todo
```

Cuanto más subís en la pila, **menos te ocupás de infraestructura**, pero también **menos control tenés**.

---

## Tipos de nube

Aparte de los modelos de servicio, también hay diferentes **tipos** de nube según quién la opera:

### Nube pública

Los servicios los provee una empresa grande y vos los compartís con otros clientes (cada uno en su "espacio aislado", obvio).

**Ejemplos**: AWS, Azure, Google Cloud. La mayoría de la gente usa nube pública.

### Nube privada

Una empresa grande arma **su propia nube interna**, solo para sus equipos. Mucha inversión inicial, pero control total.

**Cuándo se usa**: bancos, gobiernos, salud — sectores con regulaciones estrictas.

### Nube híbrida

Combina ambas: lo crítico en nube privada, lo no tan sensible en pública.

### Multinube

Cuando usás varios proveedores (AWS + Azure + Google Cloud). Reduce dependencia de uno solo.

---

## Cuándo conviene la nube y cuándo no

### Conviene cuando…

- ✅ Tenés un **producto nuevo** y querés salir rápido.
- ✅ Tu tráfico **varía mucho** (campañas, estaciones).
- ✅ Necesitás **presencia global**.
- ✅ Querés evitar comprar hardware y administrar fierros.
- ✅ Tenés un **equipo chico** y querés focalizar en producto.

### NO conviene cuando…

- ❌ Tenés **datos súper sensibles** con regulaciones estrictas (algunos sectores requieren on-premise).
- ❌ Tu uso es **muy parejo y muy alto**: a largo plazo puede salir más barato tener hardware propio.
- ❌ Tu conexión a Internet es **muy mala** y todo el trabajo depende de ella.

> 💡 **Hoy el 95% de las empresas usa nube** de alguna manera, aunque sea SaaS. La pregunta no es "¿usar nube?" sino "¿cómo y cuánto?".

---

## Ejemplos de tu día a día

Probablemente ya estés usando nube sin darte cuenta:

- 📧 **Gmail** → SaaS de Google sobre su nube.
- 📱 **WhatsApp** → corre sobre infraestructura en la nube.
- 🎬 **Netflix** → casi **toda** la plataforma corre sobre AWS.
- 🛒 **Mercado Libre** → infraestructura propia de Mercado Libre, parcialmente sobre nube pública.
- 🎮 **Fortnite** → corre sobre AWS.
- 💬 **ChatGPT** → corre sobre Microsoft Azure.

> 💡 Toda startup moderna nace en la nube. Punto.

---

## Ejercicio práctico

Vas a hacer un **análisis** de servicios en la nube que ya usás.

1. Anotá **10 servicios** que usás todos los días (apps, sitios web, herramientas).
2. Para cada uno, decidí: **¿es SaaS, PaaS o IaaS?** (Probablemente la mayoría sean SaaS).
3. Para los 3 más importantes para vos, buscá en Google: **"[nombre] runs on which cloud"** o **"[nombre] infraestructura"**. ¿Está sobre AWS, Azure, GCP, propia?

Ejemplo:
| Servicio | Tipo | Sobre qué nube |
|---|---|---|
| Gmail | SaaS | Google Cloud |
| WhatsApp | SaaS | Facebook (propia + AWS) |
| Netflix | SaaS | AWS |
| ChatGPT | SaaS | Azure |
| ... | ... | ... |

Vas a darte cuenta de que **toda tu vida digital pasa por la nube**.

---

## Resumen

- La **nube** es alquilar recursos informáticos por Internet, pagando solo lo que usás.
- Cambió la industria: **pagás por uso**, **escalás infinito**, **innovás rápido**.
- Hay tres modelos: **IaaS** (servidores), **PaaS** (plataforma para tu código), **SaaS** (software listo).
- Hay tres tipos: **pública**, **privada**, **híbrida**.
- Conviene casi siempre, salvo casos con regulación extrema o uso súper parejo y alto.
- Hoy **casi todo Internet corre sobre nube**.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Cloud computing** — informática en la nube.
- **IaaS** (Infrastructure as a Service) — infraestructura.
- **PaaS** (Platform as a Service) — plataforma.
- **SaaS** (Software as a Service) — software.
- **On-premise** — infraestructura propia (no en la nube).
- **Nube pública / privada / híbrida** — los tipos.
- **Escalabilidad** — capacidad de crecer.
- **Elasticidad** — agrandarse y achicarse según demanda.
- **Pay-as-you-go** — pagar por lo que usás.
- **Servidor virtual** o **VM** — máquina virtual en la nube.
- **Disponibilidad** o **SLA** — % de tiempo que el servicio está activo.

> ✨ **Próximo paso:** En el módulo siguiente vas a conocer los **tres grandes proveedores de nube** del mercado (AWS, Azure, Google Cloud) y vas a ver cuál conviene para qué.
