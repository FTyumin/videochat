from django.contrib import admin
from .models import Video


class VideoAdmin(admin.ModelAdmin):
    list = ('room_title', 'title')


