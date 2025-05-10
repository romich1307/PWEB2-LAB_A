from interpreter import draw
from chessPictures import *

fila1 = knight.join(knight.negative())
fila2 = knight.negative().join(knight)
imagen = fila1.up(fila2).verticalMirror()

draw(imagen)