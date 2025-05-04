# Usa la imagen de PHP con Apache
FROM php:8.0-apache

# Copia los archivos del proyecto al contenedor
COPY . /var/www/html/

# Habilita el módulo mod_rewrite de Apache (si lo necesitas)
RUN a2enmod rewrite

# Expone el puerto 80 (predeterminado de Apache)
EXPOSE 80
