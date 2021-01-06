from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=256)
    roll_number = models.CharField(max_length=256)
    math_marks = models.IntegerField()
    physics_marks = models.IntegerField()
    chemistry_marks = models.IntegerField()

    def __str__(self):
        return self.name
