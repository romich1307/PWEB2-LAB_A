from django.shortcuts import render
from relacion_uno_muchos.models import Language, Framework
from relacion_muchos_muchos.models import Movie, Character

def index(request):
    languages = Language.objects.all()
    frameworks = Framework.objects.all()
    movies = Movie.objects.all()
    characters = Character.objects.all()
    return render(request, 'index.html', {
        'languages': languages,
        'frameworks': frameworks,
        'movies': movies,
        'characters': characters
    })
