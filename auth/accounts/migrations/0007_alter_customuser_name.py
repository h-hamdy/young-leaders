# Generated by Django 5.0.2 on 2024-03-24 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_alter_customuser_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='name',
            field=models.CharField(default='', max_length=100, unique=True),
        ),
    ]
