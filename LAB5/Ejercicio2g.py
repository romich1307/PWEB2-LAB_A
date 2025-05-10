from interpreter import draw
from chessPictures import *

# Crear el tablero (cuadro gris claro y oscuro)
fila1 = square.join(square.negative()).horizontalRepeat(4)
fila2 = square.negative().join(square).horizontalRepeat(4)
tablero = fila2.up(fila1).verticalRepeat(4)

# Fila de piezas negras
fila_negras = rock.negative().join(knight.negative()).join(bishop.negative()).join(queen.negative()).join(king.negative()).join(bishop.negative()).join(knight.negative()).join(rock.negative())

# Peones negros
peones_negros = pawn.negative().horizontalRepeat(8)

# Peones blancos
peones_blancos = pawn.horizontalRepeat(8)

# Fila de piezas blancas
fila_blancas = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)

# Cuatro filas vacías
vacio = square.horizontalRepeat(8)
espacios = vacio.verticalRepeat(4)

# Unir las piezas en orden correcto: negras arriba, blancas abajo
piezas = fila_negras.up(peones_blancos).up(espacios).up(peones_negros).up(fila_blancas)

# Superponer las piezas sobre el tablero
imagen = tablero.under(piezas)

draw(imagen)
