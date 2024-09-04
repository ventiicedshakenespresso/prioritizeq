from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Patient(models.Model):
    _mrn = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    pod = models.IntegerField(null=True, blank=True)
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return self.name

