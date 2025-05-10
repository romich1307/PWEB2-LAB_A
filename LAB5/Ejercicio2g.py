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

# Creando las dos filas vacías que usaremos
espacio1 = square.join(square.negative()).horizontalRepeat(4).verticalRepeat(1)
espacio2 = square.negative().join(square).horizontalRepeat(4).verticalRepeat(1)

# Unir las piezas en orden correcto: blancas abajo, negras arriba
piezas = fila_blancas.up(peones_blancos).up(espacio2).up(espacio1).up(espacio2).up(espacio1).up(peones_negros).up(fila_negras)

# Superponer las piezas sobre el tablero
imagen = tablero.under(piezas)

draw(imagen)
