# Generated by Django 2.1.5 on 2021-09-24 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theatre', '0003_auto_20210924_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='theatre',
            name='city',
            field=models.CharField(choices=[('MOSCOW', 'Moscow'), ('STPETERSBURG', 'StPetersBurg')], max_length=9),
        ),
    ]