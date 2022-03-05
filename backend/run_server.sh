python manage.py collectstatic
gunicorn --bind 0.0.0.0:8000 BoxOffice.wsgi &
DJANGO_SETTINGS_MODULE=BoxOffice.settings gunicorn --bind 0.0.0.0:8001 BoxOffice.wsgi &
DJANGO_SETTINGS_MODULE=BoxOffice.settings gunicorn --bind 0.0.0.0:8002 BoxOffice.wsgi &
while true ; do
	:
done
trap "kill $(jobs -p)" EXIT