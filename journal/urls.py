from django.urls import path
from .views import CreateListView
from . import views

urlpatterns = [
    path('', CreateListView.as_view() , name='journal-home'),
]