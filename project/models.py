from django.db import models


class Video(models.Model):
    room_title = models.CharField(max_length=25)
    description = models.TextField()

    def __str__(self):
        return self.room_title
