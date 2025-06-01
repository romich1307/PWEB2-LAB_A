from django.db import models

# Create your models here.

class Destination(models.Model):
    
    nombreCiudad = models.CharField(max_length=200)
    imagenCiudad = models.ImageField(upload_to='pics')
    descripcionCiudad = models.TextField()
    precioTour = models.IntegerField()
    ofertaTour = models.BooleanField(default=False)

