# from django.conf.urls import url
from django.urls import re_path
from .views import MovieListView, movie_details

app_name = 'movie'

urlpatterns = [
    
    re_path(r'^$', MovieListView.as_view(), name='list'),
    re_path(r'^(?P<movie_id>\d+)/$', movie_details, name='detail'),
        
]