# Banne Barber — Landing

Landing móvil para la barbería Banne Barber. Sitio estático (HTML + CSS + JS puro), sin build ni dependencias — pensado para desplegarse en Vercel tal cual.

## Estructura

```
index.html            → toda la página (hero, barberos, precios, contacto, footer)
styles.css             → estilos (paleta negro/gris/blanco, muro de ladrillo, animaciones)
script.js              → arma los links de WhatsApp/Instagram y detalles menores
assets/logo.jpg        → logo real de Banne Barber (usado en el hero)
assets/fato.jpg        → foto de Fato
assets/vane.jpg        → foto de Vane
assets/favicon.svg     → ícono de la pestaña
vercel.json            → config mínima para Vercel (URLs limpias)
```

## Datos ya cargados

- WhatsApp de Fato y Vane: `+595 991 552145` (mismo número para ambos).
- Instagram: `@banne_barber`.
- Ubicación: link directo a Google Maps.

Si algún dato cambia, están en **script.js** (`WHATSAPP_NUMBERS`, `INSTAGRAM_URL`) y en el botón de ubicación dentro de **index.html** (`.fab-group`, el link con el ícono de mapa).

## Cómo publicarlo en Vercel (sin usar la terminal)

1. Entrar a [vercel.com/new](https://vercel.com/new).
2. Elegir **"Deploy"** por arrastre de carpeta (drag & drop) y soltar esta carpeta completa (`banne-barber-landing`) — o subir el proyecto a un repo de GitHub e importarlo desde ahí.
3. Vercel detecta que es un sitio estático (framework "Other") y lo publica sin pedir ningún build command ni variables de entorno.
4. Una vez publicado, se puede conectar un dominio propio desde **Project → Settings → Domains**.

## Desarrollo local

No requiere instalar nada. Basta con abrir `index.html` con un servidor estático simple, por ejemplo:

```bash
python -m http.server 8787
```

y visitar `http://localhost:8787`.
