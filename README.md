# Perspective
TMI Project FDI_UCM

## Cómo funciona

La imagen proviniente de la webcam va a ser tratada para que el área que se
encuentra dentro de los cuatro puntos seleccionados se vea de frente.

Para consegirlo, distorsionamos la imagen para que lo que aparece dentro de esa
área se convierta en un cuadrado de 500 por 500 píxeles. Eso no es respetuoso
con el aspect ratio original, pero nos permite hacernos a la idea de la forma
que tendría esa área si la vieramos de frente.

Para consegirlo, usamos la librería perspective-transform, cogiendo como puntos
de destino los seleccionados por el usuario, y como destino los puntos `(0,0)`,
`(0,500)`, `(500,0)` y `(500,500)`, para transformar esa área en un cuadrado de
500x500 píxeles.

```js
var srcCorners = [158, 64, 494, 69, 495, 404, 158, 404]; // Seleccionados por el usuario
var dstCorners = [0, 0, 0, 500, 500, 0, 500, 500];
var perspT = PerspT(srcCorners, dstCorners);
var t = perspT.coeffs;
t = [t[0], t[3], 0, t[6],
     t[1], t[4], 0, t[7],
     0   , 0   , 1, 0   ,
     t[2], t[5], 0, t[8]];
element.style.transform = "matrix3d(" + t.join(", ") + ")";
```

La librería nos genera la matriz homomórfica que podemos usar
para transformar la imágen obtenida con la webcam con la propiedad
`transform` y la función `matrix3d()` de CSS3.

## Cómo probarlo

Instalamos node y npm de https://nodejs.org/.

Descargamos el código de este repositorio, por ejemplo:

```sh
$ git clone https://github.com/11crom11/Perspective/
```

Dentro de la carpeta descargada, ejecutamos:

```sh
$ npm install
$ npm start
```

El navegador nos debería abrir la aplicación automáticamente.
