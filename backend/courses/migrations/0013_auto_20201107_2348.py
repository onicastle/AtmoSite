# Generated by Django 3.1.2 on 2020-11-07 23:48

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0012_course_curriculum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='curriculum',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=8), size=None),
        ),
    ]
