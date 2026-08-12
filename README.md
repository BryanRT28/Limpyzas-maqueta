#  Limpyzas — Servicios de Limpieza Profesional

Bienvenido al repositorio oficial del sitio web de **Limpyzas**, empresa dedicada a servicios de limpieza para casas, departamentos, oficinas y propiedades Airbnb.

Este proyecto ha sido desarrollado como una solución web estática optimizada para la conversión directa de clientes a través de **WhatsApp**, diseñada para obtener un rendimiento sobresaliente en **PageSpeed Insights** y blindada con cabeceras de seguridad clasificadas en categoría **A/A+** en **Security Headers**.

---

##  Tecnologías y Librerías Utilizadas

- **HTML5 Semántico**: Estructura optimizada para accesibilidad y SEO local.
- **Tailwind CSS (v3)**: Compilado y minificado localmente vía Node.js para eliminar scripts pesados en el cliente y garantizar la máxima velocidad de carga en móviles.
- **JavaScript (ES6+)**: Lógica interactiva nativa para menú desplegable, componentes acordeón de preguntas frecuentes y carga dinámica de datos.
- **Lucide Icons**: Iconografía SVG ligera para destacar beneficios y acciones principales.
- **Marked.js**: Integración para renderizado dinámico de contenido enriquecido desde archivos JSON.
- **Google Fonts**: Carga asíncrona no bloqueante de las fuentes corporativas (*Nunito* y *Quicksand*).

---

##  Estructura del Proyecto

```text
├── index.html              # Landing page principal del sitio
├── input.css               # Punto de entrada CSS para las directivas de Tailwind
├── styles.css              # Hoja de estilos estática compilada y minificada para producción
├── tailwind.config.js      # Definición de colores de marca (marca.teal, marca.green, etc.)
├── package.json            # Configuración de dependencias de Node.js
├── package-lock.json       # Registro exacto de versiones instaladas
├── _headers                # Configuración de cabeceras HTTP de seguridad para Cloudflare Pages
├── robots.txt              # Reglas de indexación para motores de búsqueda
├── sitemap.xml             # Mapa del sitio optimizado para Google
├── admin/                  # Panel de administración CMS / gestión estática
├── data/
│   ├── contacto.json       # Información de contacto (WhatsApp, correo, redes)
│   └── faq.json            # Preguntas frecuentes dinámicas
└── img/                    # Galería de imágenes y recursos gráficos en formato optimizado
```

---

##  Compilación y Desarrollo Local

Para modificar los estilos visuales o ajustar clases de Tailwind, el proyecto utiliza **Node.js** local.

### 1. Requisitos
Tener instalado [Node.js](https://nodejs.org/) (versión v18+ o superior).

### 2. Instalación de Dependencias
Abre la terminal en la carpeta raíz del proyecto y ejecuta:
```bash
npm install
```

### 3. Recompilar el archivo `styles.css`
Si agregas nuevas clases HTML o modificas `input.css`, regenera el CSS optimizado para producción ejecutando:
```bash
npx tailwindcss -i ./input.css -o ./styles.css --minify
```

---

##  Administración de Contenidos

Los datos dinámicos del sitio se gestionan de manera sencilla desde los archivos ubicados en la carpeta `/data/`:

1. **`data/contacto.json`**: Actualiza el número de WhatsApp principal, enlaces a redes sociales y correo electrónico.
2. **`data/faq.json`**: Añade o modifica preguntas frecuentes y respuestas desplegables.

---

##  Seguridad y Hosting (Cloudflare Pages)

El proyecto cuenta con una configuración avanzada de seguridad mediante el archivo **`_headers`**, diseñado para servidores y CDNs como **Cloudflare Pages**:

- **HSTS** (`Strict-Transport-Security`): Garantiza conexiones HTTPS forzadas.
- **X-Frame-Options**: `SAMEORIGIN` para evitar ataques de Clickjacking.
- **Permissions-Policy**: Restringe accesos no autorizados a la cámara, micrófono y geolocalización.
- **Content Security Policy (CSP)**: Control de dominios permitidos para scripts, estilos y fuentes externas (`cdn.jsdelivr.net`, `fonts.googleapis.com`, etc.).

---

##  Instrucciones para Entrega y Despliegue

Al subir el sitio web a GitHub o Cloudflare Pages:

- **Archivos a incluir**: Sube todos los archivos del proyecto (`index.html`, `styles.css`, `_headers`, carpetas `data/`, `img/`, `admin/`, etc.).
- **Carpeta Excluida**: **NUNCA** se debe subir la carpeta `node_modules/` al servidor ni al repositorio público.

---

© 2026 **Limpyzas** — Todos los derechos reservados.
