# Generated by Django 2.0.4 on 2018-04-21 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_list', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('published_date', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='recipes',
            name='user',
        ),
        migrations.DeleteModel(
            name='Recipes',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
