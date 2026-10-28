# Jaque Mimito

Ajedrez tierno para niños. Aprenden a mover cada pieza, resuelven retos de jaque mate, viven una aventura de 12 capítulos contra rivales cada vez más listos y juegan con otra persona en el mismo aparato.

**Jugar:** https://pardaillan4-alt.github.io/Ajedrez-infantil/

## Qué incluye

- **Aprender:** 6 lecciones (una por pieza), 5 retos de mate en 1 y 6 jugadas buenas con explicación para practicar (buen comienzo, pieza sin cuidar, tenedor, clavada, doble ataque de peón y mate de la escalera).
- **Clases:** escuela de ajedrez de 16 clases en 4 niveles por edad (Explorador 6-7, Aprendiz 7-8, Estratega 8-9 y Campeón 9-10 años). Cada clase tiene una explicación con tableritos, leída en voz alta, y ejercicios para practicar. Se abren en orden dentro de cada nivel.
- **Aventura:** la historia de la Corona de Estrellas, 12 capítulos con dificultad creciente.
- **Dos jugadores** en el mismo celular o tableta.
- **Mi estilo:** 6 parejas de colores, 15 diseños de piezas (Mimitos, Selva, Cristal, Jardín, Fuego y agua, Carritos, Espacio, Caricatura, Ébano y marfil, Elegantes, Gatitos, Dulces, Robots, Clásicas), 19 tableros (4 con fotos del espacio) y 15 fondos (incluye un fondo espacial generado y 4 fotos reales del espacio).
- **Vista 2D y 3D** con tablero que se puede girar y acercar.
- **Música clásica** con control de volumen.
- **Frases del Catecismo y de los santos:** mientras juegan aparece una frase nueva cada 40 segundos y la voz del navegador la lee en voz alta (la música baja mientras habla). Se alternan frases del Catecismo de la Iglesia Católica, adaptadas para niños y con su número, y frases cortas de santos. Tocar la frase muestra otra; en Mi estilo se pueden ocultar o quitar la voz.

El progreso se guarda en el navegador de cada aparato.

Para usarla como app en el celular: ábrela en el navegador y elige **Agregar a pantalla de inicio**.

## Archivos

- `index.html`: toda la app (HTML, estilos y código).
- `vendor/three.min.js`: Three.js r128 (licencia MIT) para la vista 3D.
- `music/`: grabaciones de música clásica.
- `icons/` y `manifest.webmanifest`: ícono para la pantalla de inicio.

## Créditos de la música

Obras de dominio público. Grabaciones obtenidas de Musopen y fuentes similares:

| Obra | Compositor | Grabación |
|---|---|---|
| La mañana (Peer Gynt, Suite n.º 1) | Grieg | Czech National Symphony Orchestra, Musopen. Dominio público |
| La Primavera (Las cuatro estaciones), I y III | Vivaldi | Musopen. Dominio público |
| Nocturno Op. 9 n.º 2 | Chopin | Aya Higuchi. Dominio público |
| Claro de luna, III. Presto agitato | Beethoven | Philip Addison Jones. Licencia Creative Commons |
| Minueto (Sonata n.º 11) | Mozart | |
| Marcha de El Cascanueces | Chaikovski | |
| Nocturno Op. 9 n.º 1 | Chopin | |
| Claro de luna, I. Adagio sostenuto | Beethoven | |
| Canon y Giga en Re | Pachelbel | Chamber Music Society of Lincoln Center (Isabella Stewart Gardner Museum). Licencia Creative Commons, sin modificar |
| Danza de los mirlitones, Danza china, Danza rusa, Galope de los niños (El Cascanueces) | Chaikovski | |

Las melodías extra (Minueto en Sol, Oda a la alegría, Estrellita, Para Elisa, Canon en Re y Pequeña serenata) las genera la app con un violín y un piano sintetizados.

## Créditos de las fotos del espacio

| Fondo | Crédito |
|---|---|
| Nebulosa de Carina (Acantilados Cósmicos) | NASA, ESA, CSA, STScI (telescopio James Webb) |
| Andrómeda (M31) | ESA/Herschel/PACS & SPIRE Consortium, O. Krause, HSC, H. Linz |
| Nebulosa de la Hélice | NASA/JPL-Caltech (telescopio Spitzer) |
| Galaxia NGC 4013 | NASA y The Hubble Heritage Team (STScI/AURA) |

## Créditos de modelos 3D

- Diseño **Elegantes**: modelo "Chess Set" de Pia Leung, licencia Creative Commons Atribución (CC BY), vía Poly Pizza.
- Diseño **Ébano y marfil**: modelo "CHESS BOARD" de Kmunawwar703 (https://sketchfab.com/kmunawar703), licencia CC BY 4.0, vía Sketchfab. Se simplificó la geometría para que funcione en celulares (`models/fino.json`).
- Diseño y tablero **Caricatura**: modelo "Cartoon Chess Set" de CYX1122 (https://sketchfab.com/CYX1122), licencia CC BY 4.0, vía Sketchfab. Se conservaron sus colores y su tablero; se simplificó la geometría (`models/caricatura.json`).
