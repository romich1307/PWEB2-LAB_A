from django.shortcuts import render
from .models import Destination
# Create your views here.

def index(request):    
    dest1 = Destination()
    dest1.name = 'Mumbai'
    dest1.desc = 'The city that never sleeps'
    dest1.price = 700

    dest2 = Destination()
    dest2.name = 'Indonesia'
    dest2.desc = 'The Emerald of the Equator'
    dest2.price = 900

    dest3 = Destination()
    dest3.name = 'San Francisco'
    dest3.desc = 'The Golden City'
    dest3.price = 800

    return render(request, 'index.html', {'dest1': dest1, 'dest2': dest2, 'dest3': dest3})