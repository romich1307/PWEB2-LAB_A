from django.db import models

class Movie(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Character(models.Model):
    name = models.CharField(max_length=50)
    movies = models.ManyToManyField(Movie)

    def __str__(self):
        return self.name

