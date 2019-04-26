from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Post


class PostSaveForm(forms.ModelForm):
        model = Post
        fields = ['title', 'text']
