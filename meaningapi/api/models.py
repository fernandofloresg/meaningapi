from django.db import models

# Create your models here.
class sentimentCard(models.Model):
	title = models.CharField(max_length=200)
	media = models.ImageField(upload_to='media/images')
	start_date = models.DateField()
	end_date = models.DateField()

def __str__(self):
    return self.title