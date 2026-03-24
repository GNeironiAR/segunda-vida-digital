# Segunda Vida Digital

Sistema de trazabilidad para donaciones tecnológicas. Permite registrar equipos informáticos donados, restaurarlos con software libre (Linux Mint), y entregarlos a instituciones que no tienen acceso a recursos informáticos.

**Trazabilidad end-to-end:** Donante → Equipo → Institución receptora.

## Funcionalidades

- **Ingreso de equipos:** Registro con UID único (SVD-00001), tipo, marca, donante, fecha y descripción.
- **Gestión de donantes:** Registro de personas o empresas que donan equipos/componentes.
- **Gestión de instituciones:** Registro de escuelas, ONGs, comedores y otras entidades receptoras.
- **Ensamblado:** Combinar componentes sueltos (RAM, disco, fuente, etc.) en un equipo completo entregable, manteniendo la trazabilidad de cada pieza.
- **Entrega:** Asignación de equipos disponibles a instituciones con fecha y notas.
- **Inventario:** Vista completa con búsqueda y estados (Disponible, Entregado, Ensamblado).
- **Trazabilidad:** Vista visual del flujo completo de cada equipo, desde el donante original hasta la institución receptora.
- **Autenticación:** Firebase Auth con email/contraseña. Solo usuarios autorizados pueden acceder.
- **Dashboard:** Contadores en tiempo real de equipos, disponibles, entregados, donantes e instituciones.

## Stack

- HTML + CSS + JavaScript vanilla (un solo archivo, sin frameworks ni build)
- Firebase Realtime Database
- Firebase Authentication (email/password)
- GitHub Pages (hosting)

## Setup

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilitar **Authentication** → Email/Password
3. Crear una **Realtime Database**
4. Configurar reglas de seguridad:
   ```json
   {
     "rules": {
       ".read": "auth != null",
       ".write": "auth != null"
     }
   }
   ```
5. Registrar una app web y copiar las credenciales en `FIREBASE_CONFIG` dentro de `index.html`
6. Crear usuarios desde Firebase Console → Authentication → Users
7. Deployar en GitHub Pages o abrir `index.html` directamente

## Licencia

Proyecto abierto para uso comunitario y social.
