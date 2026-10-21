# Links con UTM por canal

La landing lee `utm_source`, lo guarda en `sessionStorage` y reescribe todos los botones de WhatsApp para que el mensaje precargado diga de dónde vienes. Cualquier `utm_source` desconocido o ausente cae en `direct`. Sin JavaScript, el mensaje es el de TopConnect.

| Canal | URL | Mensaje de WhatsApp resultante |
|---|---|---|
| TopConnect (QR, grupo, bio) | `https://nextgol.com/?utm_source=topconnect&utm_medium=community&utm_campaign=mapa-2026-10` | Hola, vengo de TopConnect. Quiero mi MAPA |
| LinkedIn | `https://nextgol.com/?utm_source=linkedin&utm_medium=social&utm_campaign=mapa-2026-10` | Hola, vengo de LinkedIn. Quiero mi MAPA |
| Correo | `https://nextgol.com/?utm_source=email&utm_medium=email&utm_campaign=mapa-2026-10` | Hola, vengo por correo. Quiero mi MAPA |
| Sin UTM (directo) | `https://nextgol.com/` | Hola, vi la página de NextGol. Quiero mi MAPA |

## QR de TopConnect: link directo a WhatsApp

Para un QR que salta la landing y abre WhatsApp con el mensaje de TopConnect (valor de `waLink("topconnect")`):

```
https://wa.me/573219265622?text=Hola%2C%20vengo%20de%20TopConnect.%20Quiero%20mi%20MAPA
```

Este link no pasa por la landing, así que no genera visita ni evento en Umami. Si quieres medir el QR, usa el link con UTM de la primera fila.

## Eventos en Umami

Cada CTA envía un evento con el nombre `cta_<tipo>`:

- `cta_whatsapp`, `cta_booking`, `cta_email`, `cta_linkedin`

Propiedades de cada evento:

- `location`: `nav`, `hero`, `offer`, `sticky`, `fab`, `final`, `footer` o `founder` (dónde estaba el botón).
- `source`: `topconnect`, `linkedin`, `email` o `direct`.

Los eventos solo se registran cuando `CONFIG.UMAMI_WEBSITE_ID` tiene valor.
