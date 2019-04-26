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

        #emotes = json.dumps(analyze_entry(form.instance.text))
        string = "{
  "Overall": {
    "emotion": {
      "Angry": 0.066552529,
      "Happy": 0.0936079765,
      "Sad": 0.3236562974,
      "Excited": 0.0913498588,
      "Bored": 0.0258678146,
      "Fear": 0.3989655238
    },
    "sentiment": {
      "negative": 0.448,
      "neutral": 0.292,
      "positive": 0.261
    }
  },
  "Sentences": {
    "emotion": [
      {
        "Angry": 0.1034183071,
        "Happy": 0.1996918714,
        "Sad": 0.1519000277,
        "Excited": 0.2158534842,
        "Bored": 0.0406920546,
        "Fear": 0.288444255
      },
      {
        "Angry": 0.0343426665,
        "Happy": 0.0763401458,
        "Sad": 0.280377235,
        "Excited": 0.0477082565,
        "Bored": 0.0511098657,
        "Fear": 0.5101218306
      },
      {
        "Angry": 0.0666376624,
        "Happy": 0.2333679815,
        "Sad": 0.2263472855,
        "Excited": 0.1309494872,
        "Bored": 0.1023898765,
        "Fear": 0.240307707
      },
      {
        "Angry": 0.0589659151,
        "Happy": 0.2241515866,
        "Sad": 0.1911174802,
        "Excited": 0.1322855144,
        "Bored": 0.1071529562,
        "Fear": 0.2863265474
      },
      {
        "Angry": 0.0899536907,
        "Happy": 0.0875528443,
        "Sad": 0.5211228709,
        "Excited": 0.0520328758,
        "Bored": 0.0664055824,
        "Fear": 0.182932136
      }
    ],
    "sentiment": [
      {
        "negative": 0.024,
        "neutral": 0.282,
        "positive": 0.694
      },
      {
        "negative": 0.243,
        "neutral": 0.7,
        "positive": 0.057
      },
      {
        "negative": 0.019,
        "neutral": 0.933,
        "positive": 0.049
      },
      {
        "negative": 0.106,
        "neutral": 0.302,
        "positive": 0.592
      },
      {
        "negative": 0.511,
        "neutral": 0.131,
        "positive": 0.359
      }
    ]
  },
  "Source Text": "I need to write an example journal for the symposium. Gotta be honest, that makes me anxious. If I had to guess, the affect values for this piece will be anxiety-caused fear. I'm upset I'm not watching Avengers Endgame, but happy because this project is a passion of mine. If anyone spoils the movie for I will be thoroughly angry. Only 3 more days of class is causing my anticipation for the summer to rise. Paris is going to be so much fun! I'm disappointed we won't be singing in Notre Dame, but nevertheless I know it will be a memorable trip. Okay I think this is a sufficient length. I wonder if anyone will be able to read this far? Maybe. Hope this works. I'd be sad if it didn't."
}
"
        emotes = string
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