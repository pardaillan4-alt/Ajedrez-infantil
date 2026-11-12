# Jaque Mimito

Ajedrez tierno para niños. Aprenden a mover cada pieza, resuelven retos de jaque mate, viven una aventura de 12 capítulos contra rivales cada vez más listos y juegan con otra persona en el mismo aparato.

**Jugar:** https://pardaillan4-alt.github.io/Ajedrez-infantil/

## Qué incluye (versión 1.0)

- **Jugar:** partida contra la compu con 12 rivales de dificultad creciente, eligiendo blancas, negras o al azar. Incluye un **búho entrenador** que avisa antes de perder una pieza o de caer en un mate, y una **fuerza** del jugador que sube y baja con cada partida.
- **Repaso de partidas:** jugada por jugada, con la notación en español y comentarios del búho (buenas jugadas, mejorables y errores, con la mejor jugada sugerida).
- **Clases:** escuela de 30 clases en 5 niveles por edad (Explorador 6-7, Aprendiz 7-8, Estratega 8-9, Campeón 9-10 y Maestro 10+), con explicación en voz alta y ejercicios.
- **Aprender:** 6 lecciones de piezas, 5 retos de mate en 1 y 6 jugadas buenas explicadas.
- **Rompecabezas:** 100 problemas verificados con el motor, en 5 niveles (atrapa la pieza, mate en 1, mate en 1 difícil, mate en 2 y mate en 2 maestro).
- **Reto del día:** un problema diario con racha de días seguidos.
- **Aventura:** la historia de la Corona de Estrellas, 12 capítulos con dificultad creciente.
- **Dos jugadores** en el mismo aparato.
- **Logros:** 32 medallas de bronce, plata y oro.
- **Perfiles:** cada niño con su nombre, su pieza y su avance. Al empezar se pregunta la edad y el nivel para recomendar por dónde comenzar.
- **Zona de papás:** protegida con una multiplicación. Reporte de avance y tiempo de juego por niño, ajustes (sonido, música, voz, frases del Catecismo, entrenador, vibración), recordatorio de descanso y respaldo del avance con un código.
- **Mi estilo:** 6 parejas de colores, 15 diseños de piezas, 19 tableros y 15 fondos.
- **Vista 2D y 3D** con tablero que se puede girar y acercar.
- **Música clásica** con control de volumen y **frases del Catecismo y de los santos** leídas en voz alta (se pueden quitar).
- **Sin anuncios, sin compras, sin cuentas y sin enviar datos.** Funciona sin internet una vez abierta. [Política de privacidad](https://pardaillan4-alt.github.io/Ajedrez-infantil/privacidad.html).

El progreso se guarda en el navegador de cada aparato.

Para usarla como app en el celular: en Android, ábrela en Chrome y elige **Instalar app** en el menú de los tres puntos; en iPhone o iPad, ábrela en Safari, toca Compartir y elige **Agregar a pantalla de inicio**. Una vez abierta, funciona también sin internet (menos la música grabada).

## Archivos

- `index.html`: toda la app (HTML, estilos, código y fuentes incluidas).
- `privacidad.html`: política de privacidad para las tiendas.
- `sw.js`: permite instalar la app y usarla sin internet.
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

## Tipografías

Baloo 2 y Nunito, licencia SIL Open Font License 1.1, incluidas dentro de la app (sin conexión a Google Fonts).

## Créditos de modelos 3D

- Diseño **Elegantes**: modelo "Chess Set" de Pia Leung, licencia Creative Commons Atribución (CC BY), vía Poly Pizza.
- Diseño **Ébano y marfil**: modelo "CHESS BOARD" de Kmunawwar703 (https://sketchfab.com/kmunawar703), licencia CC BY 4.0, vía Sketchfab. Se simplificó la geometría para que funcione en celulares (`models/fino.json`).
- Diseño y tablero **Caricatura**: modelo "Cartoon Chess Set" de CYX1122 (https://sketchfab.com/CYX1122), licencia CC BY 4.0, vía Sketchfab. Se conservaron sus colores y su tablero; se simplificó la geometría (`models/caricatura.json`).
