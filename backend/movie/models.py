from django.db import models
from django.db.models import Q
from django.urls.base import reverse
# Create your models here.
class MovieQuerySet(models.query.QuerySet):
    def search(self,query):
        lookup = (
            Q(name__icontains=query)|
            Q(director__icontains=query)|
            Q(language__icontains=query)|
            Q(cast__icontains=query)
        )
        return self.filter(lookup).distinct()

class MovieManager(models.Manager):
    def get_queryset(self):
        return MovieQuerySet(self.model,self._db)
    def search(self,query):
        return self.get_queryset().search(query)


class Movie(models.Model):
    lang_choice=(
            ('ENGLISH','English'),
            # ('BENGALI','Bengali'),
            # ('HINDI','Hindi'),
            # ('TAMIL','Tamil'),
            # ('TELUGU','Telugu'),
            # ('MALAYALAM','Malayalam'),
            # ('MARATHI','Marathi'),
            # ('FRENCH','French'),
            ('KOREAN', 'Korean'),
            ('RUSSIAN', 'Russian'),
            ('CHINESE','Chinese'),
        )
    rating_choice=(
            ('U','U'),
            ('UA','U/A'),
            ('A','A'),
            ('R','R'),
        )    
    name              =     models.CharField(max_length=50)
    cast              =     models.CharField(max_length=100)
    director          =     models.CharField(max_length=20)
    language          =     models.CharField(max_length=10,choices=lang_choice, blank=True)
    run_length        =     models.IntegerField(help_text='Enter run length in minutes', blank=True)
    certificate       =     models.CharField(max_length=2,choices=rating_choice, blank=True)
    popularity_index  =     models.IntegerField(unique=True,null=True)
    trailer           =     models.CharField(max_length=200, default="youtube.com")    
    image             =     models.ImageField(null=True)
    
    objects = MovieManager()

    def get_absolute_url(self):
        return reverse('movie:detail',kwargs={'movie_id':self.pk})
    
    def __str__(self):
        return self.name