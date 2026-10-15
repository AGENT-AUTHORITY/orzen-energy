# ORZEN ENERGY · Sitio institucional (v2.1)

Landing estática, adaptable a celular, sin frameworks, pagos ni servicios de backend. Diseño inspirado en la maqueta aprobada: apertura con destello del símbolo, imagen industrial cinematográfica y tarjetas por sector.

## Publicar gratis en GitHub Pages

1. Creá un repositorio público `orzen-energy` (o actualizá el existente).
2. Subí **los archivos directamente a la raíz del repositorio**: `index.html`, `styles.css`, `script.js` y la carpeta `assets`. No subas la carpeta contenedora completa.
3. GitHub → repositorio → **Settings → Pages → Build and deployment** → `Deploy from a branch` → `main` → `/ (root)` → Save.
4. El sitio quedará en `https://TU-USUARIO.github.io/orzen-energy/` (GitHub puede demorar en publicar).

## Correo institucional y formulario (importante)

El formulario prepara un `mailto:`. NO guarda datos, NO envía consultas automáticamente y requiere que la persona confirme desde su aplicación de correo. Antes de compartir la web con empresas, **creá y verificá** la casilla que figura al inicio de `script.js`:

```js
const CONTACT_EMAIL = 'orzenenergy.comercial@gmail.com';
```

Esa dirección es una **propuesta, no una cuenta creada ni verificada**. Podés sustituirla por cualquier casilla que ya controles. Sin casilla verificada se pueden perder consultas. En el futuro se puede migrar a un formulario gratuito con integración, o a Supabase, después de decidir almacenamiento, políticas de privacidad y medidas antispam.

Para disponer de `contacto@orzenenergy.com.ar` primero hace falta registrar y controlar el dominio y configurar un servicio de correo o reenvío.

## Editar contenido

- Textos y sectores: `index.html`
- Estilos, colores y animaciones: `styles.css`
- Destinatario del formulario, intro, menú: `script.js`
- Fotografías e isotipos: `assets/`

La intro dura ~3.5 segundos, se puede saltar y aparece solo una vez por sesión. Si la persona prefiere movimiento reducido, no aparece. El brillo en el logo es una animación CSS, no un video.

## Origen y representación comercial

- La foto de la portada proviene de un recorte de una **imagen conceptual generada** que fue aprobada como estética para el sitio. Es ilustrativa, no una instalación real de ORZEN ni un trabajo ejecutado.
- Las fotos restantes son las imágenes Pexels elegidas y aportadas para el proyecto. Verificá las condiciones de uso, créditos y trazabilidad en las páginas originales antes de una campaña comercial.
- ORZEN Energy se presenta como vinculación comercial independiente: no afirma ser proveedora, instaladora, distribuidora, representante oficial ni profesional habilitado.
- Todas las carpetas `assets` están optimizadas a WebP; el logotipo y símbolo se entregan también en SVG.

## Antes del lanzamiento comercial

- [ ] Confirmar la existencia y acceso a la casilla de contacto.
- [ ] Definir teléfono o WhatsApp de ORZEN para sumar CTA directo.
- [ ] Revisar el área de cobertura y criterios de calificación con el proveedor.
- [ ] Formalizar trazabilidad de referidos y acuerdos de comisión.
- [ ] Verificar identidad de marca y disponibilidad de dominio y redes.
- [ ] Completar aviso de privacidad conforme al tratamiento real de datos que se vaya a realizar.

## Corrección de v2.1: exportación a PDF

La versión original no tenía reglas `@media print`. En impresión aparecía la pantalla de presentación, se perdían las fotografías implementadas como fondos CSS y algunos paneles quedaban ilegibles. Esta versión:

- Esconde la introducción al imprimir y evita páginas vacías.
- Usa imágenes HTML `<img>` para portada, tarjetas y sección informativa; se pueden imprimir aun con fondos gráficos desactivados.
- Incorpora estilos de impresión A4 sin modificar la experiencia de navegación.

En Chrome, para conservar los tonos de azul más fielmente: Imprimir → Más ajustes → **Gráficos de fondo** (opcional). Un PDF no puede reproducir la animación del destello; esta funciona en la web interactiva.
