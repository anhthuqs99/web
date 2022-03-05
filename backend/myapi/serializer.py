from rest_framework import fields, serializers
from django.contrib.auth.models import User
from booking.models import Booking, Seat, BookedSeat 
from movie.models import Movie
from theatre.models import Theatre, Show

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User 
        fields = ('url', 'usename', 'email')

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('name', 'cast', 'director', 'language', 'run_length', 'certificate', 'popularity_index', 'trailer', 'image')
    
    def create(self, validated_data):
        movie = super.create(validated_data)
        return movie

class TheatreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theatre 
        fields = ('name', 'city', 'address', 'no_of_screen', 'admin_id')

class ShowSerializer(serializers.ModelSerializer):
    movie = MovieSerializer
    theatre = TheatreSerializer
    class Meta:
        model = Show 
        fields = ('movie', 'theatre', 'screen', 'date', 'time')

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('timestamp', 'payment_type', 'paid_amount', 'paid_by')

class SeatSerializer(serializers.ModelSerializer):
    show = ShowSerializer
    class Meta:
        model = Seat
        fields = ('no', 'seat_type', 'show')

class BookedSeatSerializer(serializers.ModelSerializer):
    seat = SeatSerializer
    booking = BookingSerializer
    class Meta:
        model = BookedSeat
        fields = ('seat', 'booking')