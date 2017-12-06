from api.models import sentimentCard
from django.core.files import File

sentiment_card = sentimentCard(title="Analysis 1")
sentiment_card.media.save('imagentest.jpg', File(open('C:\\Users\\Fernando Flores\\Desktop\\bull.jpg','rb')))
