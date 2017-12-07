# api/resources.py
from tastypie.resources import ModelResource
from api.models import sentimentCard
from django.utils import timezone

class sentimentCardResource(ModelResource):
    class Meta:
        queryset = sentimentCard.objects.all()
        resource_name = 'sentimentcard'
    def get_object_list(self, request):
        return super(sentimentCardResource, self).get_object_list(request).filter(end_date__gte=timezone.now())
