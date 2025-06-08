# Proyecto Relaciones en Django

Este proyecto demuestra el uso práctico de relaciones entre modelos en Django, incluyendo relaciones uno a muchos y muchos a muchos. Además, incorpora funcionalidades como la generación de documentos PDF y el envío de correos electrónicos desde el servidor, todo integrado en una interfaz web sencilla.

## 🔧 Características Principales

-  **Relación Muchos a Muchos:** Asociación entre películas y personajes.
-  **Relación Uno a Muchos:** Asociación entre lenguajes de programación y frameworks.
-  **Generación de PDF:** Creación y descarga de facturas en PDF desde una plantilla HTML.
-  **Envío de Correos:** Envío de correos electrónicos usando credenciales protegidas con `.env`.
-  **Interfaz Web:** Navegación sencilla desde un index central que conecta todas las funciones.

---

##  Estructura del Proyecto

```
proyecto_relaciones/
│
├── relacion_uno_muchos/        # Lenguajes y frameworks (uno a muchos)
├── relacion_muchos_muchos/     # Películas y personajes (muchos a muchos)
├── generar_pdf/                # Generación de archivos PDF
├── send/                       # Envío de correos electrónicos
├── templates/                  # Plantillas HTML
├── .env                        # Configuración sensible (ignorada en Git)
└── settings.py                 # Configurado con PostgreSQL y variables de entorno
```

---

##  Requisitos

- Python 3.8 o superior
- Django 5.x
- PostgreSQL (como base de datos principal)
- Librería `xhtml2pdf` para PDF
- Librería `python-decouple` para variables de entorno
- Librería `psycopg2-binary` para conectar con PostgreSQL
- Cuenta SMTP válida (por ejemplo, Gmail)

---

##  Instalación y Configuración

1. **Clona el repositorio y entra al proyecto:**
   ```sh
   git clone https://github.com/romich1307/PWEB2-LAB_A.git
   cd PWEB2-LAB_A/LAB8/proyecto_relaciones
   ```

2. **Crea y activa un entorno virtual (opcional pero recomendado):**
   ```sh
   python -m venv env
   env\Scripts\activate  # En Windows
   ```

3. **Instala las dependencias:**
   ```sh
   pip install django xhtml2pdf python-decouple psycopg2-binary
   ```

4. **Configura la base de datos PostgreSQL:**
   - Crea una base de datos llamada `proyecto_relaciones` en tu servidor PostgreSQL.
   - Crea un archivo `.env` en la raíz del proyecto con tus credenciales:
     ```
     EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
     EMAIL_HOST=smtp.gmail.com
     EMAIL_PORT=587
     EMAIL_USE_TLS=True
     EMAIL_USE_SSL=False
     EMAIL_HOST_USER=tu_correo@gmail.com
     EMAIL_HOST_PASSWORD=tu_contraseña_o_clave_app
     DB_NAME=proyecto_relaciones
     DB_USER=tu_usuario_postgres
     DB_PASSWORD=tu_password_postgres
     DB_HOST=localhost
     DB_PORT=5432
     ```

5. **Realiza las migraciones:**
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Crea un superusuario (opcional):**
   ```sh
   python manage.py createsuperuser
   ```

---

##  Ejecución

1. **Ejecuta el servidor local:**
   ```sh
   python manage.py runserver
   ```

2. **Abre tu navegador en:**
   ```
   http://127.0.0.1:8000/
   ```

---

##  Funcionalidades del Proyecto

| Función           | Ruta              | Descripción                                      |
|-------------------|-------------------|--------------------------------------------------|
| Home              | `/`               | Página principal con enlaces a cada funcionalidad|
| Relación 1 a N    | `/lenguajes/`     | Muestra frameworks asociados a cada lenguaje     |
| Relación N a N    | `/peliculas/`     | Lista de películas con sus personajes            |
| PDF               | `/generate-pdf/`  | Genera una factura (vista y descarga)            |
| Enviar correo     | `/send-email/`    | Envía un mensaje de prueba                       |

---

##  Personalización

- Modifica los archivos en `templates/` para cambiar el diseño web.
- Añade tus propios modelos o funcionalidades basadas en estas apps.
- Usa la consola de admin (`/admin`) para gestionar los datos.

---

##  Autor

Romina Giuliana Camargo Hilachoque  
Estudiante de Ingeniería de Sistemas  
Universidad Nacional de San Agustín de Arequipa

