from django.shortcuts import render, redirect, get_object_or_404
from .models import Destination
from .forms import DestinationForm
from django.contrib.auth.decorators import login_required

def index(request):
    dests = Destination.objects.all()
    return render(request, 'index.html', {'dests': dests})

@login_required
def destination_create(request):
    if request.method == 'POST':
        form = DestinationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('destination-list')
    else:
        form = DestinationForm()
    return render(request, 'travello/destination_form.html', {'form': form})

@login_required
def destination_update(request, pk):
    dest = get_object_or_404(Destination, pk=pk)
    if request.method == 'POST':
        form = DestinationForm(request.POST, request.FILES, instance=dest)
        if form.is_valid():
            form.save()
            return redirect('destination-list')
    else:
        form = DestinationForm(instance=dest)
    return render(request, 'travello/destination_form.html', {'form': form})

@login_required
def destination_delete(request, pk):
    dest = get_object_or_404(Destination, pk=pk)
    if request.method == 'POST':
        dest.delete()
        return redirect('destination-list')
    return render(request, 'travello/destination_confirm_delete.html', {'dest': dest})