from django.urls import path, include
from .views import (
    StudentListView,
    StudentDeleteView,
    StudentCreateView,
    StudentUpdateView,
    StudentDetailView
)

urlpatterns = [
    path('api/', StudentListView.as_view()),
    path('api/create/', StudentCreateView.as_view()),
    path('api/<pk>/', StudentDetailView.as_view()),
    path('api/<pk>/update/', StudentUpdateView.as_view()),
    path('api/<pk>/delete/', StudentDeleteView.as_view())
]
