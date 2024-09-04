from django.urls import path
from base import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('patients/', views.getPatients, name="patients"),
    path('patients/<str:pk>', views.getPatient, name="patient"),
]