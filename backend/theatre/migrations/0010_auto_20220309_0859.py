# Generated by Django 3.1.5 on 2022-03-09 08:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theatre', '0009_auto_20220309_0847'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='time',
            field=models.TimeField(default=datetime.datetime(2022, 3, 9, 8, 59, 56, 772560)),
        ),
    ]