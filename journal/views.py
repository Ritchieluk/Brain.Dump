from django.shortcuts import render_to_response
from django.template import RequestContext
from django.shortcuts import render, redirect, reverse 
from django.http import HttpResponse,HttpResponseRedirect
from .models import Post 
from django.views.generic import ListView, CreateView
import json
from PDapi.journal_analysis import analyze_entry


def home(request):
    context = {
        'posts':Post.objects.all()
    }
    return render(request, 'journal/post_form.html',context)

def draw(request,string):
    return render(request,'journal/draw.html',string)

def testDraw(request):
    with open("drawer/test_jsons/example_0.json") as testfile:
        data = json.loads(testfile)
    testfile.close()
    context = {'colors': json.dumps(analyze_entry(request))}
    return render(None, 'journal/draw.html', context)

class CreateListView(CreateView):
    model = Post
    template_name ='journal/home.html'
    fields = ['title', 'text']

    def form_valid(self,form):
        context = {'colors': json.dumps(analyze_entry(form.instance.text))}
        return render (None,'journal/draw.html',context)
        #form.instance.author = self.user
        #return super().form_valid(form)


def handler404(request, *args, **argv):
    response = render_to_response('404.html')
    response.status_code = 404
    return response


def handler500(request, *args, **argv):
    response = render_to_response('500.html')
    response.status_code = 500
    return response