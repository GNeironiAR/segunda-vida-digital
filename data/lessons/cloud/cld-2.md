# Principales proveedores (AWS, Azure, GCP)

## Lo que vas a aprender

- Quiénes son los **tres grandes** de la nube y qué los hace distintos.
- Las **fortalezas** de cada uno.
- Cómo elegir **uno para empezar** según tu perfil.
- Por qué hay otros proveedores chicos que también vale la pena conocer.

---

## Los tres grandes

Aunque hay muchísimos proveedores de nube, **el 70% del mercado mundial** lo dominan tres:

| Proveedor | Quién | Apodo |
|---|---|---|
| 🟧 **AWS** (Amazon Web Services) | Amazon | "El gigante" |
| 🟦 **Microsoft Azure** | Microsoft | "El integrado" |
| 🟥 **Google Cloud Platform (GCP)** | Google | "El innovador" |

Vamos a ver cada uno.

---

## AWS (Amazon Web Services)

### Datos rápidos

- **Lanzamiento**: 2006 (el primero, pionero).
- **Cuota de mercado**: ~32% del mundo cloud. **El más usado**.
- **Sede**: Estados Unidos, Amazon.
- **Color**: naranja.

### Fortalezas

- 🏆 **El más maduro**: 200+ servicios. Si necesitás algo, AWS lo tiene.
- 🌍 **Más regiones**: 30+ regiones en el mundo. Vas a tener un servidor cerca de tus usuarios sí o sí.
- 📚 **Más documentación y comunidad**: cualquier problema lo resolvés en Google porque ya alguien lo tuvo.
- 💪 **Confiable a escala**: lo usan Netflix, Airbnb, Disney+, NASA.

### Debilidades

- 💸 **Caro si no sabés usarlo bien**: es fácil quemar plata.
- 🤯 **Interfaz compleja**: la consola tiene tantos servicios que abruma al principio.
- 📑 **Curva de aprendizaje empinada**.

### Cuándo elegirlo

- Querés trabajar en **empresas grandes** o startups grandes.
- Querés **más oportunidades laborales** (AWS es el más demandado en CVs).
- Necesitás un servicio específico que solo AWS tiene.

### Servicios más conocidos

- **EC2** — servidores virtuales (IaaS).
- **S3** — almacenamiento de archivos.
- **RDS** — bases de datos administradas.
- **Lambda** — código que corre sin servidores (serverless).
- **CloudFront** — red de distribución global.

---

## Microsoft Azure

### Datos rápidos

- **Lanzamiento**: 2010.
- **Cuota de mercado**: ~23% del mundo cloud. Segundo.
- **Sede**: Estados Unidos, Microsoft.
- **Color**: azul.

### Fortalezas

- 🤝 **Integración con Office, Windows y Active Directory**: si tu empresa usa Microsoft, Azure es el camino natural.
- 🏢 **Fuerte en empresas grandes**: bancos, gobiernos, multinacionales.
- 🧠 **OpenAI corre acá**: GPT-4, GPT-5, ChatGPT — todo Azure.
- 🪟 **Soporte Windows nativo** (AWS también lo soporta pero Azure es el "natural").

### Debilidades

- ⚙️ **A veces difícil para no-Windows**: si nunca tocaste el mundo Microsoft, la curva es rara.
- 📑 **Documentación a veces inconsistente**: cambia mucho.
- 💰 **Caro también**, pero más predecible que AWS.

### Cuándo elegirlo

- Tu empresa ya usa **Microsoft 365** o tecnologías Microsoft.
- Querés trabajar en **grandes corporativos**.
- Te interesa el **mundo IA con OpenAI** (porque sus servicios corren en Azure).

### Servicios más conocidos

- **Azure Virtual Machines** — servidores virtuales.
- **Azure Blob Storage** — almacenamiento.
- **Azure SQL Database** — bases SQL.
- **Azure Functions** — serverless.
- **Azure OpenAI Service** — la versión empresarial de ChatGPT.

---

## Google Cloud Platform (GCP)

### Datos rápidos

- **Lanzamiento**: 2008 (pero el push fuerte fue desde 2015).
- **Cuota de mercado**: ~11%. Tercero.
- **Sede**: Estados Unidos, Google.
- **Color**: rojo/amarillo/azul/verde (multicolor).

### Fortalezas

- 🤖 **Mejor en datos e IA**: Google es el rey de los datos, su nube refleja eso. BigQuery, Vertex AI son referencias mundiales.
- ⚙️ **Mejor experiencia para desarrolladores**: interfaz más simple, comandos más limpios.
- 🐳 **Líder en Kubernetes** (el sistema para orquestar containers).
- 🌍 **Misma infra que YouTube y Google Search**: rendimiento brutal.

### Debilidades

- 📑 **Menos documentación** que AWS (aunque la oficial es muy buena).
- 🏢 **Menos popular en grandes empresas tradicionales**.
- 🪶 **Catálogo más chico** (aunque cubre todo lo importante).

### Cuándo elegirlo

- Te interesa **datos, analytics o IA**.
- Vas a usar **Kubernetes** o contenedores en serio.
- Tu startup nace **mobile / web** y querés foco en velocidad.

### Servicios más conocidos

- **Compute Engine** — VMs.
- **Cloud Storage** — almacenamiento.
- **BigQuery** — base de datos para analítica masiva (referencia mundial).
- **Cloud Functions** — serverless.
- **Vertex AI** — plataforma de IA.
- **Firebase** — backend para apps (lo usamos en este proyecto).

---

## Tabla comparativa rápida

| | AWS | Azure | GCP |
|---|---|---|---|
| **Cuota de mercado** | 32% | 23% | 11% |
| **Madurez** | Máxima | Alta | Buena |
| **Documentación** | Excelente | Buena | Buena |
| **Mejor en** | Variedad de servicios | Integración Microsoft + IA | Datos + IA + DX |
| **Curva de aprendizaje** | Alta | Media-Alta | Media |
| **Demanda laboral** | Máxima | Alta | Creciente |
| **Empresas que destacan** | Netflix, Airbnb, NASA | LinkedIn, BMW, Walmart | Spotify, Twitter, Shopify |

---

## Otros proveedores que vale la pena conocer

Para no quedar atrapado pensando que solo existen los tres grandes:

### Cloud genérico

- **DigitalOcean** — más barato, más simple. Genial para emprendimientos.
- **Linode** (Akamai) — similar a DigitalOcean.
- **Vultr** — competidor low-cost.
- **Hetzner** — alemana, súper barata, muy buena.
- **OVH** — francesa, presencia fuerte en Europa.

### Plataformas más arriba en la pila

- **Vercel** — para frontends modernos (Next.js).
- **Netlify** — sitios estáticos y serverless (lo viste).
- **Heroku** — la "abuela" de PaaS.
- **Railway**, **Render**, **Fly.io** — generaciones nuevas, súper fáciles.
- **Cloudflare** — empezó como CDN, hoy es nube completa.

### Específicas

- **Firebase** — Google. Backend completo para apps.
- **Supabase** — alternativa open source a Firebase.
- **MongoDB Atlas** — base de datos en la nube.
- **PlanetScale** — MySQL serverless.

> 💡 Para un emprendedor o startup, **conviene empezar con los simples** (Netlify, Vercel, Firebase, Railway). El día que necesites más control, migrás a AWS/Azure/GCP.

---

## Cómo elegir uno para aprender

Si recién arrancás y querés invertir tiempo en aprender uno:

### Si tu objetivo es **demanda laboral máxima**

➡ **AWS**. Es el que más aparece en ofertas de trabajo en todo el mundo.

### Si trabajás (o vas a trabajar) en **una empresa con mucho Microsoft**

➡ **Azure**. La integración con todo el ecosistema Microsoft es natural.

### Si tu interés es **datos, IA, o startups jóvenes**

➡ **GCP**. Es el más cómodo para esos perfiles.

### Si solo querés **probar la nube sin estresarte**

➡ Empezá con **DigitalOcean** (más barato, más simple) o **Netlify/Firebase** (sin servidores).

> 💡 **Una vez que aprendés uno, los demás son fáciles**. Los conceptos son los mismos, solo cambian nombres y interfaces.

---

## Cuentas y free tiers

Los tres grandes ofrecen **niveles gratuitos** para que pruebes:

- **AWS Free Tier**: 12 meses gratis con muchos servicios limitados. Algunos servicios son gratis "para siempre" (siempre que no te pases del cupo).
- **Azure Free Account**: $200 USD gratis los primeros 30 días + algunos servicios gratis 12 meses.
- **GCP Free Tier**: $300 USD gratis los primeros 90 días + cupos gratuitos en muchos servicios.

> ⚠️ **Cuidado**: si te pasás de los cupos gratuitos, **te cobran sin avisar**. Configurá alertas de presupuesto desde el primer día.

---

## Ejercicio práctico

Vas a hacer **un análisis** de los tres grandes.

1. Andá a las tres páginas oficiales:
   - `aws.amazon.com`
   - `azure.microsoft.com`
   - `cloud.google.com`
2. Por cada uno, anotá:
   - El **producto principal** que destacan en la home.
   - Cuántos **servicios** ofrecen (suele estar en el navegador o catálogo).
   - Algún **caso de éxito** que mencionen (cliente importante).
3. Pensá: si tuvieras que armar **una app de fotos como Instagram**, ¿cuál usarías? ¿Por qué? (No hay respuesta correcta — la justificación es lo que importa).

---

## Resumen

- Los **tres grandes** son AWS (32% del mercado), Azure (23%) y GCP (11%).
- **AWS** es el más maduro, variado y demandado laboralmente.
- **Azure** es la elección natural si trabajás con tecnologías Microsoft y para IA con OpenAI.
- **GCP** brilla en datos, IA y experiencia de desarrollador.
- Hay **otros proveedores chicos** (DigitalOcean, Vercel, Firebase) que son geniales para empezar.
- Los tres ofrecen **niveles gratuitos** para probar — con cuidado de no pasarte.
- **Una vez que aprendés uno, los demás son fáciles**.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **AWS** (Amazon Web Services).
- **Azure** (Microsoft).
- **GCP** (Google Cloud Platform).
- **Cuota de mercado cloud**.
- **Free tier** o **nivel gratuito**.
- **Multinube** — usar varios proveedores.
- **AWS Certified** — certificaciones oficiales de AWS.
- **Azure Certification** — certificaciones de Azure.
- **Google Cloud Certification** — certificaciones de GCP.
- **DigitalOcean** — alternativa más simple y barata.
- **Firebase** — backend completo de Google.

> ✨ **Próximo paso:** En el módulo siguiente vas a conocer los **tres tipos de servicios** más básicos que toda nube ofrece: almacenamiento, cómputo y bases de datos. La base sobre la que se construye todo lo demás.
