# Generated by Django 3.1.5 on 2022-03-09 09:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theatre', '0011_auto_20220309_0906'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='time',
            field=models.TimeField(default=datetime.datetime(2022, 3, 9, 9, 7, 19, 393022)),
        ),
    ]
