# api/resources.py
from tastypie.resources import ModelResource
from api.models import sentimentCard, answer
from django.utils import timezone
from tastypie.authorization import Authorization

class sentimentCardResource(ModelResource):
    class Meta:
        queryset = sentimentCard.objects.all()
        resource_name = 'sentimentcard'
    def get_object_list(self, request):
        return super(sentimentCardResource, self).get_object_list(request).filter(end_date__gte=timezone.now())

class answerResource(ModelResource):
    class Meta:
        queryset = answer.objects.all()
        resource_name = 'answer'
        authorization=Authorization()