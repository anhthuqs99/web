from django.shortcuts import render
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User

from booking.models  import Booking, Seat, BookedSeat
from movie.models import Movie 
from theatre.models import Theatre, Show
from .serializer import BookedSeatSerializer, SeatSerializer, BookingSerializer, MovieSerializer, TheatreSerializer, ShowSerializer

class MovieAPIView(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    
    # def get_object(self):
    #     return super().get_object()

class TheatreAPIView(viewsets.ModelViewSet):
    queryset = Theatre.objects.all()
    serializer_class = TheatreSerializer


class ShowAPIView(viewsets.ModelViewSet):
    queryset = Show.objects.all()
    serializer_class = ShowSerializer


class BookingAPIView(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class SeatAPIView(viewsets.ModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer



class BookedSeatAPIView(viewsets.ModelViewSet):
    queryset = BookedSeat.objects.all()
    serializer_class = BookedSeatSerializer