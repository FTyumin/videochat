from django.shortcuts import render
from .serializers import VideoSerializer
from rest_framework import viewsets
from .models import Video


class VideoView(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = Video.objects.all()
