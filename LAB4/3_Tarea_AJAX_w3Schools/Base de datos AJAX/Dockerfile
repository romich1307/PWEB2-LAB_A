FROM php:8.2-apache

# Instala mysqli
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Copia los archivos de tu proyecto
COPY . /var/www/html/

# Habilita mod_rewrite (si es necesario)
RUN a2enmod rewrite
