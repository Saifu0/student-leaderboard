from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from .models import Student
from .serializers import StudentSerializer


class StudentListView(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetailView(RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentCreateView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentUpdateView(UpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDeleteView(DestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
