from interpreter import draw
from chessPictures import *

fila1 = knight.negative().verticalMirror().join(knight.verticalMirror()) 
fila2 = knight.join(knight.negative())
cuadro = fila1.up(fila2) 

draw(cuadro)