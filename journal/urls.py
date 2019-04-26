from django.urls import path
from .views import CreateListView
from . import views

handler404 = 'journal.views.handler404'
handler500 = 'journal.views.handler500'

urlpatterns = [
    path('', CreateListView.as_view() , name='journal-home'),
    path('draw/',views.draw),
    path('testDraw/', views.testDraw),
    path('show/', views.show)
]