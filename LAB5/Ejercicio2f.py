from interpreter import draw
from chessPictures import *

fila1 = square.join(square.negative()).horizontalRepeat(4)
fila2 = square.negative().join(square).horizontalRepeat(4)
tablero = fila2.up(fila1).verticalRepeat(2)
draw(tablero)