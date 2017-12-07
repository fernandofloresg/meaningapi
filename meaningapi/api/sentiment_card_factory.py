from api.models import sentimentCard
from django.core.files import File

sentiment_card = sentimentCard(title="Analysis 2", start_date ='2017-12-01', end_date ='2017-12-15')
sentiment_card.media.save('imagentest.jpg', File(open('C:\\Users\\Fernando Flores\\Desktop\\bull.jpg','rb')))
