# Generated by Django 5.0.2 on 2024-03-28 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_rename_name_customuser_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='name',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='username',
            field=models.CharField(default='', max_length=100, null=True, unique=True),
        ),
    ]