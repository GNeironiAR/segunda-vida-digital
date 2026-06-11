# Seguridad y costos en la nube

## Lo que vas a aprender

- Los **principios básicos de seguridad** que tenés que conocer.
- Cómo manejar **identidades y permisos** (IAM).
- Cómo **no quemar plata** sin querer.
- Las **mejores prácticas** desde el día 1.

---

## Por qué este módulo importa

La nube te da poder enorme: en 5 minutos podés desplegar una app que llega a millones de personas. Y en esos mismos 5 minutos podés:

- 💸 **Quemar miles de dólares** sin darte cuenta (servidor olvidado prendido por meses).
- 🔓 **Exponer datos sensibles** de tus usuarios (mala configuración de un bucket).
- 🪪 **Ser hackeado** si dejás una contraseña en el código.
- 🚨 **Recibir un susto** cuando llega la factura.

Este módulo cubre lo mínimo que **tenés que saber antes de tocar producción**.

---

## Parte 1: Seguridad básica

### Principio fundamental: zero trust

**No confíes en nada por defecto**. Cada acceso, cada usuario, cada servicio tiene que **demostrar** que tiene permiso para hacer lo que está haciendo.

### IAM: Identity and Access Management

Toda nube tiene un sistema de **identidades y permisos**. Es la herramienta más importante para seguridad.

- **AWS**: **IAM** (Identity and Access Management).
- **Azure**: **Azure Active Directory + RBAC**.
- **GCP**: **Cloud IAM**.

#### Los tres conceptos clave

1. **Usuario o servicio**: la "identidad" (quién o qué).
2. **Rol**: el conjunto de permisos.
3. **Política**: las reglas concretas de qué puede hacer.

#### Ejemplo: tu desarrollador junior

- **Usuario**: `juan.perez@empresa.com`.
- **Rol**: "Developer".
- **Política**:
  - Puede leer/escribir en el bucket `desarrollo-staging`.
  - **NO puede** tocar producción.
  - **NO puede** crear nuevos usuarios.

Cuando Juan se va de la empresa, **le sacás el rol** y listo: pierde todo acceso.

### Los 5 mandamientos de la seguridad cloud

#### 1. NO uses la cuenta raíz salvo para emergencias

Cada nube te da una **cuenta raíz** (root) con poderes totales. **Nunca trabajes con ella en el día a día**. Creá un usuario administrativo con MFA y usá ese.

#### 2. Activá MFA (autenticación multifactor) en TODO

MFA = además de contraseña, necesitás un código del celular (Google Authenticator, Authy). Si alguien te roba la contraseña, **no puede entrar**.

> ⚠️ Esto **no es opcional**. Activalo desde el primer día. Toma 2 minutos.

#### 3. Aplicá el principio del menor privilegio

Cada usuario o servicio recibe **el mínimo permiso** que necesita para hacer su trabajo. Ni un permiso más.

❌ Mal: "Juan tiene acceso a todo, total es de confianza".
✅ Bien: "Juan tiene acceso solo a lo que su rol necesita".

#### 4. Nunca pongas credenciales en el código

Lo peor que podés hacer:

```python
AWS_ACCESS_KEY = "AKIA12345..."   # NO HAGAS ESTO
```

Si subís eso a GitHub público, **en 2 minutos** alguien lo encuentra y empieza a usar tu cuenta. (Hay bots que escanean GitHub buscando esto las 24 horas).

Usá:
- **Variables de entorno**.
- Servicios como **AWS Secrets Manager**, **Azure Key Vault**, **GCP Secret Manager**.

#### 5. Cifrá los datos sensibles

**En tránsito** (mientras viajan): siempre HTTPS, nunca HTTP.

**En reposo** (mientras están guardados): la mayoría de servicios de nube hoy cifran por defecto, pero **verificalo**.

### Cuidados específicos por servicio

#### Buckets S3 (o equivalentes)

Por defecto los buckets son **privados**. Si los hacés públicos por error, **cualquiera del mundo puede ver/descargar** lo que tenés.

**Casos de fugas históricas** por esto:
- Datos médicos expuestos.
- Backups de empresas filtrados.
- Fotos privadas accesibles públicamente.

> 💡 Antes de hacer público un bucket, preguntate **mil veces** si lo que está adentro debería ser público.

#### Bases de datos expuestas

Nunca expongas tu base de datos a Internet. Lo correcto:
- La base vive en una **red privada**.
- Solo el servidor de tu app accede.
- Tu app es la única "puerta" pública.

#### Logs y monitoreo

Activá **logs** desde el día 1. Si pasa algo raro, necesitás saber qué pasó.

- **AWS**: **CloudTrail** (auditoría) + **CloudWatch** (logs/métricas).
- **Azure**: **Activity Logs** + **Monitor**.
- **GCP**: **Cloud Logging** + **Cloud Monitoring**.

---

## Parte 2: Costos

### Cómo se cobra en la nube

La mayoría de servicios se cobran **por uso**, en alguna de estas dimensiones:

- ⏱ **Tiempo** (hora de VM prendida).
- 📦 **Capacidad** (GB de storage al mes).
- 🌐 **Tráfico** (GB transferidos hacia fuera).
- 🔢 **Operaciones** (cantidad de llamadas a una API).
- 🧠 **Recursos** (CPU/RAM usados).

> 💡 La regla universal: **lo que entra a la nube es gratis (ingress), lo que sale cobra (egress)**. Por eso descargar archivos cuesta más que subirlos.

### Los cinco errores que te pueden quemar plata

#### 1. Dejar servidores prendidos sin usar

Un caso típico: levantaste una VM para probar algo, te fuiste a dormir, te olvidaste. La VM corre 30 días seguidos sin uso: **$50-200 USD perdidos**.

**Solución**: apagá lo que no uses. **Setear "Auto Stop"** cuando se puede.

#### 2. Bucket con millones de archivos chiquitos

Cada archivo en S3 tiene un costo de operación. Si tu app sube 10 millones de archivos de 1 KB cada uno, **te cobran por las 10 millones de operaciones**.

**Solución**: agrupá archivos chiquitos en archivos más grandes cuando sea posible.

#### 3. Egreso de datos masivo

Sacar datos de la nube cuesta caro. Si tu app sirve videos pesados a miles de usuarios, la factura de egreso puede ser **mayor que la del compute**.

**Solución**: usá **CDN** (CloudFront, Cloud CDN, Azure CDN) para cachear y ahorrar.

#### 4. Backups antiguos olvidados

Cada nube te deja hacer backups. Si nunca borrás los viejos, **se acumulan**. Después de un año, podés tener TB de backups que ya no necesitás.

**Solución**: **políticas de retención** (mantener 30 días, después borrar).

#### 5. Servicios que escalan automáticamente sin límite

Si configurás autoescalado sin un límite máximo, un pico de tráfico (o un bot atacando tu API) puede **multiplicar tus instancias por 100** y la factura por igual.

**Solución**: siempre configurar **máximo de instancias** en autoescalado.

### Cómo controlar costos desde el día 1

#### Configurá alertas de presupuesto

Tanto AWS, Azure como GCP te permiten **avisar por mail** cuando estés por superar un umbral.

Ejemplo:
- "Avisame cuando llegue al 50% del presupuesto mensual estimado".
- "Avisame cuando llegue al 100%".

**Configuralas ANTES de empezar a usar la cuenta**. Cuesta 3 minutos.

#### Usá las **calculadoras de costo**

Antes de levantar un servicio caro, estima cuánto te va a costar.

- **AWS Pricing Calculator** (`calculator.aws`).
- **Azure Pricing Calculator** (`azure.microsoft.com/pricing/calculator`).
- **GCP Pricing Calculator** (`cloud.google.com/products/calculator`).

Te muestra estimaciones realistas según lo que vas a usar.

#### Revisá la factura todos los meses

Aunque tengas alertas, **abrí la factura** de vez en cuando. Ahí ves:
- Qué servicios se llevan más plata.
- Si hay algún cargo raro.
- Si conviene optimizar algo.

#### Usá los free tiers a fondo

Mientras puedas, **mantenete dentro de los cupos gratuitos**. Los tres grandes los tienen, y son generosos para apps chicas.

### Estrategias de ahorro avanzadas

Una vez que pasaste el free tier:

#### 1. Reserved Instances / Savings Plans

Si vas a usar un servidor durante 1-3 años, podés **comprarlo "comprometido"** y pagar mucho menos por hora (hasta 70% menos).

Es como un contrato de alquiler vs. hotel: hospedarte 365 días en un hotel sale carísimo, alquilar un depto sale mucho menos por día.

#### 2. Spot Instances (AWS) / Preemptible VMs (GCP)

VMs **mucho más baratas** (90% menos) pero que la nube te puede **apagar en cualquier momento** si necesita esos recursos.

Ideal para procesamiento batch que se puede reiniciar.

#### 3. Auto-scaling con horarios

Si tu app casi no se usa de noche, programá la **reducción automática** de instancias a la noche y el aumento a la mañana.

#### 4. Storage tiers

Object storage tiene **niveles de precio** según qué tan rápido necesitás acceder:

- **Hot**: acceso inmediato, más caro.
- **Cool**: acceso ocasional, más barato.
- **Cold / Archive**: acceso lento (horas), muy barato.

Si tenés archivos viejos que casi no abre nadie, **moverlos al tier frío** te ahorra muchísimo.

---

## Ejercicio práctico

Vas a hacer dos cosas: **simular costos** y **planear seguridad**.

### Parte 1: Simular costos

1. Andá al **AWS Pricing Calculator** (`calculator.aws`).
2. Configurá una arquitectura típica:
   - 1 EC2 t3.micro (Linux, 730 horas al mes).
   - 50 GB de almacenamiento S3.
   - 1 RDS PostgreSQL db.t3.micro.
   - 100 GB de tráfico saliente al mes.
3. Anotá el costo total estimado.
4. **Ahora simulá un crecimiento 10x**: 10 VMs, 500 GB S3, base más grande, 1 TB de tráfico. ¿Cuánto sale?
5. Sacá conclusiones: dónde se va más plata.

### Parte 2: Plan de seguridad mínimo

Para una app cualquiera (la que vos imagines), respondé:

1. ¿Quiénes son los **usuarios** con acceso? ¿Qué rol tiene cada uno?
2. ¿Tu cuenta raíz tiene **MFA activado**?
3. ¿Hay alguna **credencial en el código**? Si sí, **¿cómo la moverías a un secret manager?**
4. ¿Tu storage está **público** sin querer?
5. ¿Tu base de datos está **expuesta** a Internet?
6. ¿Tenés **alertas de costo** configuradas? ¿En qué montos?

Lo importante de este ejercicio es **adoptar la mentalidad**: pensar en seguridad y costos **desde antes** de tocar la nube.

---

## Resumen

### Seguridad

- **Zero trust**: nadie tiene permisos por defecto.
- **MFA** en todas las cuentas — sin excepciones.
- **Principio del menor privilegio**: cada uno tiene lo mínimo necesario.
- **Nunca** poner credenciales en código.
- **Cifrar** en tránsito (HTTPS) y en reposo.
- **Buckets** privados por defecto.
- **Logs** activados desde el día 1.

### Costos

- **Pagás por uso**: tiempo, capacidad, tráfico, operaciones.
- **Egreso cuesta**: descargar datos sale más caro que subirlos.
- **Cinco errores típicos**: VMs olvidadas, millones de archivos chiquitos, egreso masivo, backups acumulados, autoescalado sin límite.
- **Configurá alertas** de presupuesto **antes** de empezar.
- **Usá free tiers** mientras puedas.
- **Reserved Instances** y **Spot** ahorran muchísimo cuando ya conocés tu uso.

---

## Conceptos clave

Si querés buscar más sobre estos temas en Google o YouTube, usá estas palabras:

- **IAM** (Identity and Access Management).
- **MFA** o **2FA** — autenticación multifactor.
- **Principio del menor privilegio**.
- **Rol** (role) y **política** (policy).
- **Cuenta raíz** o **root account**.
- **Secret manager** — sistema para guardar credenciales.
- **Cifrado en tránsito / en reposo**.
- **Free tier** o **nivel gratuito**.
- **Reserved Instance** (AWS) o **Committed use** (GCP).
- **Spot Instance** o **Preemptible**.
- **CDN** — red de distribución.
- **Hot / cold / archive storage** — niveles de precio.
- **Billing alert** — alerta de costo.
- **Cost Explorer** / **Cost Management** — herramientas para analizar gasto.

> ✨ **¡Terminaste Informática en la nube y el último path del programa!** Ya tenés un mapa completo: arrancaste con Alfabetización, pasaste por Office e IA, elegiste una especialidad y terminaste entendiendo cómo funciona la infraestructura moderna a escala. Lo que sigue depende de vos: profundizar en la dirección que más te apasionó, sumar otra carrera, certificarte. **Tenés las herramientas para entrar al mundo digital con todo**.
