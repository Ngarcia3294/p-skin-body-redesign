# Guía de edición — MYP Skin & Body

## Cambiar textos, precios y datos de contacto

Abre `app/page.tsx`. Cerca del comienzo encontrarás el objeto `content`, donde están agrupados el teléfono, correo electrónico, dirección, enlace de reservas y las tarjetas de servicios.

Los demás textos aparecen directamente dentro de su sección correspondiente en ese mismo archivo.

## Añadir las imágenes

1. Guarda las imágenes optimizadas en `public/images/` usando formato `.webp` o `.jpg`.
2. En `app/page.tsx`, localiza el marcador correspondiente. Por ejemplo:

   ```tsx
   <div className="hero-visual image-placeholder">...</div>
   ```

3. Sustitúyelo por:

   ```tsx
   <img
     className="hero-visual"
     src="/images/hero.webp"
     alt="Tratamiento facial en MYP Skin & Body"
   />
   ```

Las medidas recomendadas aparecen dentro de cada marcador. Para mantener la página rápida, intenta que cada imagen pese menos de 500 KB.

## Cambiar colores

Edita las variables situadas al comienzo de `app/globals.css`:

- `--ink`: verde oscuro.
- `--cream`: fondo crema.
- `--paper`: fondo claro.
- `--sage`: verde suave.
- `--terracotta`: color de acento.

## Cambiar el enlace de reserva

En `app/page.tsx`, cambia `bookingLink` dentro del objeto `content` por el enlace de Square, Vagaro, Fresha, Calendly u otra plataforma.

## Conectar el formulario

Actualmente el formulario no envía información fuera de la página. Su función `onSubmit` debe conectarse al servicio elegido antes de publicar el sitio para clientes.

## Cambiar el título para Google

Abre `app/layout.tsx` y edita los campos `title` y `description` del objeto `metadata`.
