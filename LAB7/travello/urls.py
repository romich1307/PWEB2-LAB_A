from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='destination-list'),
    path('add/', views.destination_create, name='destination-add'),
    path('edit/<int:pk>/', views.destination_update, name='destination-edit'),
    path('delete/<int:pk>/', views.destination_delete, name='destination-delete'),
]