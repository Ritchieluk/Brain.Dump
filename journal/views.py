from django.shortcuts import render_to_response
from django.template import RequestContext
from django.shortcuts import render, redirect, reverse 
from django.http import HttpResponse,HttpResponseRedirect
from .models import Post 
from django.views.generic import ListView, CreateView
import json
from PDapi.journal_analysis import analyze_entry
from .forms import PostSaveForm
from django.utils import timezone

def home(request):
    context = {
        'posts':Post.objects.all()
    }
    return render(request, 'journal/post_form.html',context)

def draw(request,string):
    return render(request,'journal/draw.html',string)

def show(request, string):
    model = Post
    template = 'journal/show.html'
    def get_queryset(self):
        return Post.objects.all()

def testDraw(request):
    with open("drawer/test_jsons/example_0.json") as testfile:
        data = json.loads(testfile)
    testfile.close()
    context = {'colors': json.dumps(analyze_entry(request))}
    return render(None, 'journal/draw.html', context)

def saveJournal(request):
    if request.method == 'POST':
        form = PostSaveForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.author = request.user
            instance.published_date = timezone.now()
            instance.save()
            return HttpResponseRedirect('/')
    else:
        form = PostSaveForm()

    render_to_response('path/to/template.html', {'form': form}, context_instance=RequestContext(request))

class CreateListView(CreateView):
    model = Post
    template_name ='journal/home.html'
    fields = ['title', 'text']

    def form_valid(self,form):
        instance = form.save(commit=False)
        instance.author = self.request.user
        instance.published_date = timezone.now()

        emotes = json.dumps(analyze_entry(form.instance.text))
        instance.emotion_analysis = emotes
        instance.save()
        context = {'colors': emotes}
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