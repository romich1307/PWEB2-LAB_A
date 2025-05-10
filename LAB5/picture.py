from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = [line[::-1] for line in self.img]
    return Picture(vertical)

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    return Picture(self.img[::-1])

  def negative(self):
    """ Devuelve un negativo de la imagen """
    return Picture([''.join(self._invColor(c) for c in line) for line in self.img])

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    return Picture([a + b for a, b in zip(self.img, p.img)])

  def up(self, p):
    return Picture(p.img + self.img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    return Picture([
      ''.join(pc if pc != ' ' else sc for pc, sc in zip(p_line, s_line))
      for p_line, s_line in zip(p.img, self.img)
      ])
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    return Picture([line * n for line in self.img])

  def verticalRepeat(self, n):
    return Picture(self.img * n)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)

