# Generated by Django 3.1.2 on 2020-10-13 01:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_mycourse_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='department',
            field=models.CharField(default='', max_length=1),
            preserve_default=False,
        ),
    ]