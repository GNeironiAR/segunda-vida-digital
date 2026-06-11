# Servicios básicos: almacenamiento, cómputo y bases de datos

## Lo que vas a aprender

- Los **tres pilares** sobre los que se construye cualquier sistema en la nube.
- Qué es y para qué sirve cada uno: **storage, compute, database**.
- Los servicios equivalentes en **AWS, Azure y GCP**.
- Cuándo conviene cada tipo según tu caso.

---

## Los tres pilares

Cualquier app que abrís — Instagram, Netflix, Mercado Libre — usa estos tres ingredientes:

1. **Storage (almacenamiento)**: ¿dónde guardo los archivos?
2. **Compute (cómputo)**: ¿dónde corre mi código?
3. **Database (base de datos)**: ¿dónde guardo los datos organizados?

Los tres existen en todas las nubes, con nombres distintos pero conceptos iguales. Vamos uno por uno.

---

## 1. Storage: almacenamiento

### Qué es

Un lugar para **guardar archivos**: fotos, videos, PDFs, audios, copias de seguridad. Cualquier cosa que sea un **archivo** vive ahí.

### Tipos de storage en la nube

#### Object storage

El más común. Guardás archivos como **objetos** y le pedís por una URL. Como una carpeta gigante con miles de millones de archivos.

- **AWS**: **S3** (Simple Storage Service) — el más famoso de la nube.
- **Azure**: **Blob Storage**.
- **GCP**: **Cloud Storage**.

**Características**:
- Capacidad **prácticamente infinita** (petabytes y petabytes).
- Súper barato (centavos por GB al mes).
- Cada archivo tiene una **URL única** para acceder.
- **Durabilidad altísima**: tus archivos están replicados en varios servidores. Prácticamente imposible que se pierdan.

**Ejemplos de uso**:
- **Instagram**: las fotos y videos viven en S3.
- **Spotify**: las canciones en object storage.
- **Sitios web estáticos**: el HTML, CSS e imágenes pueden vivir directamente en S3.

#### Block storage

Discos virtuales que se conectan a un servidor. Como un disco duro USB, pero conectado a una VM en la nube.

- **AWS**: **EBS** (Elastic Block Store).
- **Azure**: **Managed Disks**.
- **GCP**: **Persistent Disk**.

**Características**:
- Se montan a una sola VM por vez.
- Acceso rápido a nivel de bloque.
- Capacidad fija (tipo 100 GB, 500 GB).

**Ejemplos de uso**: el disco del servidor donde corre tu base de datos, donde está instalado tu sistema operativo, etc.

#### File storage

Carpetas compartidas a las que varias VMs pueden acceder al mismo tiempo. Como una carpeta compartida en una oficina.

- **AWS**: **EFS** (Elastic File System).
- **Azure**: **Files**.
- **GCP**: **Filestore**.

**Ejemplos de uso**: una empresa que tiene varios servidores que necesitan acceder a los mismos archivos compartidos.

### El truco del object storage

S3 (y sus equivalentes) son **el corazón de la nube moderna**. Si tu negocio maneja archivos, es casi seguro que vas a usar S3 o uno equivalente.

```
[Foto tuya en Instagram] 
       ↓
[Sube a S3 con una URL única]
       ↓
[Cuando alguien la ve, S3 la sirve]
```

---

## 2. Compute: cómputo

### Qué es

**Dónde corre tu código**: el servidor virtual o el servicio que ejecuta lo que vos programaste.

### Tipos de compute

#### Máquinas virtuales (VMs) — IaaS

Servidor virtual completo. Vos decidís sistema operativo, memoria, CPU. Lo administrás como si fuera una compu propia.

- **AWS**: **EC2** (Elastic Compute Cloud).
- **Azure**: **Virtual Machines**.
- **GCP**: **Compute Engine**.

**Cuándo usarlas**: cuando necesitás **control total** y/o tu aplicación es vieja o compleja.

#### Containers — orquestación con Kubernetes

En vez de una VM completa, corrés tu app en **containers** chiquitos (con Docker) que se pueden mover entre servidores.

- **AWS**: **ECS / EKS**.
- **Azure**: **AKS** (Azure Kubernetes Service).
- **GCP**: **GKE** (Google Kubernetes Engine).

**Cuándo usarlas**: cuando tu app es moderna y querés escalado automático, despliegues rápidos.

#### Serverless — Functions as a Service

Subís solo tu **función** (un trozo de código) y la nube se encarga de todo: dónde corre, cuántas instancias hay, escalado.

- **AWS**: **Lambda**.
- **Azure**: **Functions**.
- **GCP**: **Cloud Functions** / **Cloud Run**.

**Cuándo usarlas**: cuando tu código se ejecuta a partir de **eventos** (cuando alguien sube un archivo, cuando se hace una compra) y no todo el tiempo. Pagás solo por las milésimas de segundo que corre.

**Ejemplo**: una función que **redimensiona la foto** automáticamente cuando alguien la sube a tu sitio.

#### App Platforms — PaaS

Subís tu código y se ejecuta. Sin pensar en nada más.

- **AWS**: **Elastic Beanstalk**.
- **Azure**: **App Service**.
- **GCP**: **App Engine** o **Cloud Run**.
- También: **Netlify**, **Vercel**, **Heroku**, **Railway**.

**Cuándo usarlas**: cuando solo querés que tu app funcione y no querés tocar nada de infraestructura.

### El espectro de compute

```
Control TOTAL                                                     Cero control
   IaaS                                                                SaaS
   |                                                                    |
VMs propias → Containers → Kubernetes → PaaS → Serverless → SaaS listo
```

A medida que vas hacia la derecha, **menos te ocupás de infraestructura, más rápido lanzás producto**.

---

## 3. Database: bases de datos

### Qué es

Donde guardás los **datos organizados** (no archivos sueltos). Clientes, pedidos, productos, comentarios, sesiones — todo está en una base.

### Tipos de bases en la nube

#### Bases relacionales (SQL)

Las clásicas que viste en el path de DBA.

- **AWS RDS** — soporta MySQL, PostgreSQL, MariaDB, SQL Server, Oracle.
- **AWS Aurora** — versión propia de AWS, súper performante.
- **Azure SQL Database** — SQL Server gestionado por Azure.
- **GCP Cloud SQL** — soporta MySQL, PostgreSQL.

**Cuándo usarlas**: cuando tus datos tienen estructura clara y relaciones (como vimos en DBA).

#### Bases NoSQL — documentos / clave-valor

- **AWS DynamoDB** — clave-valor súper rápida.
- **Azure Cosmos DB** — multi-modelo (documentos, grafos).
- **GCP Firestore / Datastore** — documentos para apps modernas.
- **Firebase Realtime Database** (lo usamos en este proyecto).
- **MongoDB Atlas** — el más popular.

**Cuándo usarlas**: apps móviles, datos sin estructura fija, escalado masivo.

#### Bases en memoria (cache)

- **AWS ElastiCache** (Redis o Memcached).
- **Azure Cache for Redis**.
- **GCP Memorystore**.

**Cuándo usarlas**: para guardar datos súper rápido en RAM, típicamente como cache de cosas costosas de calcular.

#### Bases para analytics

- **AWS Redshift** — data warehouse.
- **Azure Synapse Analytics**.
- **GCP BigQuery** — la referencia mundial. Petabytes de datos consultables en segundos.

**Cuándo usarlas**: cuando hacés reportes pesados sobre millones de filas.

### Bases gestionadas vs. auto-hospedadas

En la nube, **siempre conviene usar bases gestionadas** (como RDS, Cloud SQL, Atlas). Te ahorra:
- Backups automáticos.
- Replicación geográfica.
- Parches de seguridad.
- Upgrades de versión.

A cambio, pagás un poco más que si lo hacés todo a mano. **Vale la pena** salvo casos muy específicos.

---

## Cómo se combinan en una app típica

Una app moderna usa los tres pilares **al mismo tiempo**. Ejemplo:

**Mi app de e-commerce**

```
🖥 Frontend (HTML/CSS/JS)
    ↓ servido desde
📦 S3 + CloudFront (storage + CDN)

📲 Cuando alguien clickea "Comprar"
    ↓ va a
⚙ Lambda function (compute serverless)
    ↓ consulta y guarda en
🗄 RDS PostgreSQL (database relacional)

📸 Las fotos de los productos
    ↓ viven en
📦 S3 (storage de objetos)

⚡ Las sesiones de usuarios
    ↓ se cachean en
🔥 ElastiCache Redis (memory store)
```

Cada pieza usa el servicio que mejor le va. **Eso es la nube en serio**.

---

## Costos típicos (orden de magnitud)

Para que tengas referencia, una pequeña app de 1.000 usuarios al mes podría costar:

- **Storage (S3)**: ~ $5 USD/mes.
- **Compute (Lambda)**: ~ $0-2 USD/mes (suele caer en el free tier).
- **Database (RDS chiquita)**: ~ $15-30 USD/mes.
- **Tráfico de red**: ~ $5 USD/mes.

**Total**: $25-40 USD/mes. Para una empresa, **es nada**. Para un emprendedor solo, hay que ver.

A medida que crece el negocio, el costo crece (más o menos linealmente). El truco es **diseñar bien desde el inicio** para no quemar plata.

> 💡 Si recién arrancás, usá los **free tiers** y servicios PaaS (Netlify, Firebase, Vercel). Te alcanza para tus primeros 1.000 usuarios con $0.

---

## Ejercicio práctico

Vas a **diseñar la arquitectura** de una app imaginaria.

### El caso

Querés crear **una app de fotos** donde:
- Los usuarios suben fotos.
- Otros usuarios las ven.
- Pueden dejar likes y comentarios.
- Tenés un perfil personal con tus fotos.

### Tu tarea

Identificá qué servicios necesitás de cada categoría:

1. **Storage**: ¿dónde se guardan las fotos?
2. **Compute**: ¿dónde corre el backend?
3. **Database**: ¿qué base de datos para users, fotos, comentarios?
4. **Cache**: ¿necesitás caché para algo?

Hacelo para uno de los proveedores que más te haya gustado (AWS, Azure o GCP). Anotá el nombre exacto del servicio en cada caso.

Ejemplo de respuesta (con AWS):
- Storage: **S3** para las fotos.
- Compute: **Lambda** para la lógica de subida/visualización.
- Database: **DynamoDB** para users, fotos y comentarios (es rápido, escalable, NoSQL).
- Cache: **ElastiCache Redis** para el feed de fotos populares.

---

## Resumen

- Los **tres pilares** de la nube: **storage** (archivos), **compute** (código), **database** (datos).
- **Object storage** (S3, Blob, Cloud Storage) es lo más usado para archivos.
- **Compute** va desde VMs (control total) hasta serverless (cero control).
- **Bases gestionadas** te ahorran el trabajo administrativo — **siempre conviene**.
- Una app moderna **combina los tres** sin pensar.
- Los **free tiers** de los tres grandes te alcanzan para empezar gratis.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **Object storage** — almacenamiento de objetos (S3 y equivalentes).
- **Block storage** — discos virtuales.
- **File storage** — archivos compartidos en red.
- **VM** (virtual machine) — máquina virtual.
- **Container** — paquete portable con tu app.
- **Kubernetes** — orquestador de containers.
- **Serverless** — código sin servidores propios.
- **Lambda function** — la implementación de AWS.
- **CDN** (content delivery network) — distribución global de contenido.
- **Cache** — datos rápidos en RAM.
- **Data warehouse** — base de datos para analítica masiva.
- **BigQuery** — el data warehouse de Google.

> ✨ **Próximo paso:** En el último módulo del path vas a aprender a **manejar la seguridad y los costos** en la nube — los dos aspectos que distinguen un usuario casual de un profesional serio.
