# Generated by Django 3.1.5 on 2022-03-09 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0006_auto_20220309_0906'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='trailer',
            field=models.CharField(default='youtube.com', max_length=200),
        ),
    ]