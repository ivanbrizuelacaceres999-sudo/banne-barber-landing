# Banne Barber — Landing

Landing móvil para la barbería Banne Barber. Sitio estático (HTML + CSS + JS puro), sin build ni dependencias — pensado para desplegarse en Vercel tal cual.

## Estructura

```
index.html          → toda la página (hero, barberos, precios, contacto, footer)
styles.css           → estilos (paleta negro/celeste/blanco, muro de ladrillo, animaciones)
script.js            → arma los links de WhatsApp/Instagram y detalles menores
assets/favicon.svg   → ícono de la pestaña (mismo mark del logo)
vercel.json          → config mínima para Vercel (URLs limpias)
```

## Antes de publicar — datos pendientes

Editar **script.js**:

- `WHATSAPP_NUMBERS.fato` y `.vane` → números reales (formato `595XXXXXXXXX`, sin `+` ni espacios).
- `INSTAGRAM_URL` → usuario real de Instagram.

Editar **index.html**:

- El botón de ubicación (ícono de mapa, abajo a la derecha) apunta a una búsqueda genérica de Google Maps — reemplazar por el link real del local cuando esté la dirección.

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
