from django.db import models

# Create your models here.
class sentimentCard(models.Model):
	title = models.CharField(max_length=200)
	media = models.ImageField(upload_to='media/images')
	start_date = models.DateField()
	end_date = models.DateField()

	def __str__(self):
	    return self.title

class student(models.Model):
	student_id = models.CharField(primary_key=True, max_length=200)
	name = models.CharField(max_length=200)

	def __str__(self):
	    return self.name

class answer(models.Model):
	text = models.CharField(max_length=200)
	score_tag = models.CharField(max_length=10)
	student_id = models.ForeignKey(student, on_delete =models.CASCADE)
	sentiment_card_id = models.ForeignKey(sentimentCard, on_delete =models.CASCADE)

	def __str__(self):
	    return self.text