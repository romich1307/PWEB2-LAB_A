#  Laboratorio 5 – Ajedrez en Python

Este laboratorio corresponde al curso **Programación Web II**, y tiene como objetivo implementar una clase `Picture` que permita manipular visualmente piezas de ajedrez representadas como listas de strings. Las figuras generadas son visualizadas mediante la biblioteca `pygame`.

##  Objetivo del laboratorio

- Implementar los métodos de la clase `Picture`:
  - `verticalMirror()`
  - `horizontalMirror()`
  - `negative()`
  - `join()`
  - `up()`
  - `under()`
  - `horizontalRepeat(n)`
  - `verticalRepeat(n)`

- Utilizar estos métodos para construir diversas composiciones gráficas, representadas en los ejercicios `Ejercicio2a.py` hasta `Ejercicio2g.py`.

##  Estructura de Archivos

| Archivo              | Descripción                                           |
|----------------------|-------------------------------------------------------|
| `picture.py`         | Clase principal `Picture` con todos los métodos solicitados |
| `chessPictures.py`   | Contiene las piezas: torre, caballo, rey, reina, etc. |
| `pieces.py`          | Definiciones internas de las imágenes en caracteres   |
| `colors.py`          | Diccionario para invertir colores                     |
| `interpreter.py`     | Motor visual que usa `pygame` para mostrar imágenes   |
| `Ejercicio2a.py` ... `2g.py` | Ejercicios que ilustran los métodos desarrollados     |

##  Requisitos

- Python 3.12 o superior
- Biblioteca `pygame` instalada

##  Instrucciones de ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/romich1307/PWEB2-LAB_A.git
cd PWEB2-LAB_A/LAB5
```

### 2. Crear entorno virtual (opcional)

#### En Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

#### En Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Instalar pygame

```bash
pip install pygame
```

### 4. Ejecutar los ejercicios

Cada archivo genera una figura distinta correspondiente a los enunciados del laboratorio. Para ejecutarlos, usa el siguiente comando:

#### En Windows:

```bash
python Ejercicio2a.py  # Para el ejercicio 2a
python Ejercicio2b.py  # Para el ejercicio 2b
python Ejercicio2c.py  # Para el ejercicio 2c
python Ejercicio2d.py  # Para el ejercicio 2d
python Ejercicio2e.py  # Para el ejercicio 2e
python Ejercicio2f.py  # Para el ejercicio 2f
python Ejercicio2g.py  # Para el ejercicio 2g
```

#### En Linux:

```bash
python3 Ejercicio2a.py  # Para el ejercicio 2a
python3 Ejercicio2b.py  # Para el ejercicio 2b
python3 Ejercicio2c.py  # Para el ejercicio 2c
python3 Ejercicio2d.py  # Para el ejercicio 2d
python3 Ejercicio2e.py  # Para el ejercicio 2e
python3 Ejercicio2f.py  # Para el ejercicio 2f
python3 Ejercicio2g.py  # Para el ejercicio 2g
```

Asegúrate de estar en el directorio `PWEB2-LAB_A/LAB5` antes de ejecutar los comandos.