# from django.conf.urls import url
from django.urls import re_path
from .views import payment_gateway, payment_confirmation, reserve_seat,BookingListView,BookingDetailView\
,BookingDeleteView
app_name = 'booking'
urlpatterns = [
   re_path(r'^seatchoice/(?P<show_id>\d+)/$', reserve_seat, name='reserve_seat'),
   re_path(r'^payment/$', payment_gateway, name='payment_gateway'),
   re_path(r'^payment_confirmation/$', payment_confirmation, name='payment_confirmation'),
   re_path(r'^$', BookingListView.as_view(), name='list'),
   re_path(r'^(?P<btid>.*)/delete/$', BookingDeleteView.as_view(), name='delete')
 ,  re_path(r'^(?P<btid>.*)/$', BookingDetailView.as_view(), name='detail'),
#   re_path(r'^(?P<btid>.*)/delete/$', BookingDeleteView.as_view(), name='delete')
]