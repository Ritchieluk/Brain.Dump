from django.shortcuts import render_to_response
from django.template import RequestContext
from django.shortcuts import render
from django.http import HttpResponse
from .models import Post 
from django.views.generic import ListView, CreateView

def home(request):
    context = {
        'posts':Post.objects.all()
    }
    return render(request, 'journal/home.html',context)

class CreateListView(CreateView):
    model = Post
    template_name ='journal/home.html'
    fields = ['title', 'content']
    # def form_valid(self,form):
    #     form.instance.author = self.user
    #     return 


def handler404(request, *args, **argv):
    response = render_to_response('404.html')
    response.status_code = 404
    return response


def handler500(request, *args, **argv):
    response = render_to_response('500.html')
    response.status_code = 500
    return response