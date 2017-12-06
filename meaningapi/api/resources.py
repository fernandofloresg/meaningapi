# api/resources.py
from tastypie.resources import ModelResource
from api.models import sentimentCard
class sentimentCardResource(ModelResource):
    class Meta:
        queryset = sentimentCard.objects.all()
        resource_name = 'sentimentcard'