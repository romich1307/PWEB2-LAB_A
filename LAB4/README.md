# Laboratorio 4 - Programación Web 2

## Descripción
Este laboratorio forma parte del curso de **Programación Web 2 - Laboratorio (Grupo A)**. En este laboratorio se desarrollaron ejercicios prácticos relacionados con la creación de servidores web utilizando **Node.js** y **Express**, así como la integración de tecnologías como **AJAX** y **Google Charts**.

## Contenido
El laboratorio está dividido en las siguientes secciones:

1. **Actividades**  
   Contiene ejercicios básicos para entender el funcionamiento de servidores HTTP y Express.
   - Ejercicio 1: Servidor HTTP básico.
   - Ejercicio 2: Servidor con Express.

2. **Ejercicios Resueltos**  
   Ejercicios prácticos que incluyen:
   - Ejercicio 1: Interacción básica con el cliente.
   - Ejercicio 2: Uso de AJAX para cargar contenido dinámico.
   - Ejercicio 3: Conversión de texto Markdown a HTML.

3. **Tarea AJAX w3Schools**  
   Ejercicios prácticos que demuestran el uso de AJAX en diferentes contextos. Cada ejercicio se ejecuta de forma independiente.

4. **AJAX con Google Charts**  
   Implementación de gráficos dinámicos utilizando Google Charts y AJAX.

---

## Requisitos
- **Node.js** (versión 14 o superior)
- **npm** (gestor de paquetes de Node.js)
- **Docker** (para algunos ejercicios de la tarea AJAX)

---

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/romich1307/PWEB2-LAB_A.git
   ```
2. Navega a la carpeta del laboratorio 4:
   ```bash
   cd PWEB2-LAB_A/LAB4
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

---

## Ejecución

### **1. Actividades, Ejercicios Resueltos y AJAX con Google Charts**
1. Inicia el servidor general:
   ```bash
   node index.js
   ```
2. Abre tu navegador y accede a:
   ```
   http://localhost:3000
   ```
3. Desde el índice general, puedes navegar a:
   - **1_Actividades**: Ejercicios básicos de servidores.
   - **2_Ejercicios_Resueltos**: Ejercicios prácticos con AJAX y Markdown.
   - **4_AJAX_GoogleCharts**: Implementación de gráficos dinámicos.

---

### **2. Tarea AJAX w3Schools**
Cada ejercicio de la carpeta `3_Tarea_AJAX_w3Schools` se ejecuta de forma independiente. Aquí están las instrucciones para cada uno:

#### **IntroducciónAJAX**
1. Navega a la carpeta:
   ```bash
   cd 3_Tarea_AJAX_w3Schools/IntroducciónAJAX
   ```
2. Abre el archivo `index.html` en tu navegador.

#### **AJAX XML Http**
1. Navega a la carpeta:
   ```bash
   cd 3_Tarea_AJAX_w3Schools/AJAX\ XML\ Http
   ```
2. Abre el archivo `index.html` en tu navegador.

#### **AJAX PHP**
1. Asegúrate de tener Docker instalado.
2. Navega a la carpeta:
   ```bash
   cd 3_Tarea_AJAX_w3Schools/AJAX\ PHP
   ```
3. Inicia el contenedor Docker:
   ```bash
   docker-compose up
   ```
4. Abre tu navegador y accede a:
   ```
   http://localhost:8080
   ```

#### **AJAX ASP**
1. Asegúrate de tener Docker instalado.
2. Navega a la carpeta:
   ```bash
   cd 3_Tarea_AJAX_w3Schools/AJAX\ ASP
   ```
3. Construye y ejecuta el contenedor Docker:
   ```bash
   docker build -t ajax-asp .
   docker run -p 80:80 ajax-asp
   ```
4. Abre tu navegador y accede a:
   ```
   http://localhost
   ```

#### **Archivo XML AJAX**
1. Navega a la carpeta:
   ```bash
   cd 3_Tarea_AJAX_w3Schools/Archivo\ XML\ AJAX
   ```
2. Abre el archivo `index.html` en tu navegador.

#### **Base de datos AJAX**
1. Asegúrate de tener Docker instalado.
2. Navega a la carpeta:
   ```bash
   cd 3_Tarea_AJAX_w3Schools/Base\ de\ datos\ AJAX
   ```
3. Inicia los contenedores Docker:
   ```bash
   docker-compose up
   ```
4. Abre tu navegador y accede a:
   ```
   http://localhost
   ```

#### **Respuesta AJAX**
1. Navega a la carpeta del ejercicio que deseas ejecutar (por ejemplo, `Ejercicio1`):
   ```bash
   cd 3_Tarea_AJAX_w3Schools/Respuesta\ AJAX/Ejercicio1
   ```
2. Abre el archivo `index.html` en tu navegador.

---

## Autor
**Romina Giuliana Camargo Hilachoque**  
Estudiante de Ingeniería de Sistemas  
Universidad Nacional de San Agustín de Arequipa

## Docente
**Carlo José Luis Corrales Delgado**
