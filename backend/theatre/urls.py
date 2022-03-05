# from django.conf.urls import url
from django.urls import re_path
from .views import TheatreListView, theatre_details
app_name = 'theatre'
urlpatterns = [
    re_path(r'^$', TheatreListView.as_view(), name='list'),
    re_path(r'^(?P<theatre_id>\d+)/$', theatre_details, name='detail')   
]