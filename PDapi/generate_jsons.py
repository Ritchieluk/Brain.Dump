import paralleldots
import nltk
import json
from nltk.tokenize import sent_tokenize, word_tokenize

paralleldots.set_api_key("A3t0cQVDYKeeas7gntUVTKYM0kvXDaNNCQhPF9bJRfE")

# Old Testing Data

# text="""After May 1940 the good times were few and far between: first there was the war,
# then the capitulation and then the arrival of the Germans, which is when the trouble
# started for the Jews. Our freedom was severely restricted by a series of anti-Jewish
# decrees: Jews were required to wear a yellow star; Jews were required to turn in
# their bicycles; Jews were forbidden to use street-cars; Jews were forbidden to ride in
# cars, even their own; Jews were required to do their shopping between 3 and 5 P.M.;
# Jews were required to frequent only Jewish-owned barbershops and beauty parlors;
# Jews were forbidden to be out on the streets between 8 P.M. and 6 A.M.; Jews were
# forbidden to attend theaters, movies or any other forms of entertainment; Jews were
# forbidden to use swimming pools, tennis courts, hockey fields or any other athletic
# fields; Jews were forbidden to go rowing; Jews were forbidden to take part in any
# athletic activity in public; Jews were forbidden to sit in their gardens or those of their
# friends after 8 P.M.; Jews were forbidden to visit Christians in their homes; Jews
# were required to attend Jewish schools, etc. You couldn't do this and you couldn't do
# that, but life went on. Jacque always said to me, "I don't dare do anything anymore,
# 'cause I'm afraid it's not allowed."""
# text = """Hi all. Ok so I’m a 23F and last Friday I got the keys to my new apartment along with my boyfriend(25M). On Saturday we moved in and now it’s Tuesday and we have everything packed and put away. I have never had my own place so it feels amazing.
#
# At the end of December I thought my life was falling apart. I had no job, my grandparents were about to lose their house and on top of it I had gotten my first and last dui and had my license suspended and was looking at spending 10 days in jail. Now I’m just looking at doing 30 days house arrest and I got a new job that I love about 3 weeks ago.
#
# I had also just gotten out of an abusive relationship and rekindled things with my ex from 3 years ago.
#
# Him and I are so happy and proud of our new little home.
#
# Just wanted to post this :)"""
# text = """So my wife was diagnosed with pre-diabetes a few months ago. She has always been heavier, but its spiraled out of control ever since an operation a couple years ago. We've changed our diets over the last few months to help, and a couple weeks ago she agreed to start going to the gym with me. I'm just really happy and proud of her for being willing to make life changes for her health. We've gone 3 times a week together for the last three weeks!"""

# text = """So I want to just say this is 100% true and 100% embarrassing.
#
# So I usually have Monday’s off and spend the day doing homework, tidying up, playing video games, and today... jerking off. I don’t usually feel inclined to do this however today I had the urge. It was about an hour before my girlfriend got home so I definitely had time. I go into my room and get into bed and start skimming thru Ol’ Faithful AKA Pornhub.
#
# I finally find a video worth B’ing my L to and get down to business. As I’m about to... ya know... I get an alert on my phone that my girlfriend had just accessed the PetCam we have in our room that’s on our dresser. (We got this PetCube camera for Christmas so we can watch our two dogs while we are at work/school/out.) I immediately stop, now knowing that my girlfriend just witnessed me jerking it mid-Monday so I text her “........” . She doesn’t answer for about 2 minutes and then I see that she’s calling me.
#
# Now we’ve been together 2.5 years so this isn’t like a make or break thing and I honestly thought that although it was slightly embarrassing, it was also pretty funny. So I answer the phone laughing, ready for this to be something we joke about for a long time to come. Unfortunately, I was sadly mistaken to this being “funny”. She tells me that her co-workers had asked about our dogs and she wanted to show them on our awesome PetCam! But instead of two cute dogs on our bed, it was just me with my shorts down at my ankles, going to town on myself! So needless to say I don’t think I’ll be invited to any of her work Christmas parties in the future.
#
# TL;DR : Decided to crank it before my girlfriend got home and forgot my PetCam was faced directly at me. She wanted to show her co-workers our dogs and instead showed them me jerking it in our bed.
#
# Edit: lmao just some clarification... she’s shown coworkers before because they love our dogs and ask to see them because it’s “cute” to see them live and sleeping. Also, in her defense, I told her I was doing homework and what not so the last thing to cross her mind was me yankin it probably. Also the cam is tucked in the corner so I forget it’s even there most the time. (B’ing my L = blowing my load)
#
# Edit 2 (last one) : for everyone saying “why would you have a PetCam facing your bed?” That’s where our dogs are 90% of the time. When we are out of the house, that’s where we leave them. When we are home, that’s mostly where they want to be unless we’re on the couch with them. Don’t you think we put the camera there..... for a reason? Lol and btw, my gf and I are fine! She was freaked out about it at first but now it’s already funny. That’s why I love her so much lol so take it easy on her, we both fucked up!
#
# LAST AND FINAL EDIT:
#
# Not that i need to prove anything but this is for people asking to see them. (It’s a Great Dane and Am-Staff btw)"""

# text = """This happened last saturday, and I'm still walking around with a deformed upper lip. I (21F) got asked on a date, first one in like .. my entire life, but fine hey. I was preparing myself till I saw I had a moustache, and I'm really self conscious so that mouth brow had to go. I've read online that shaving could make it feel like the hairs get thicker and that it could possibly leave marks (yes I'm a moron, I'll judge myself before you can ha) so I figured waxing would be the perfect way to do it. It would have been fine I guess, but I ran out of wax strips and was really stressing out that he would notice and the thought just kept creeping up on me. Frantically I looked around the house if there really weren't left, till I spotted the duct tape in the hallway my brother had used. Me being the idiot I am thought it would be a clever idea to use it to wax my "moustache". So I smashed that little black strip of intense pain above my upper lip and started pulling. After I was done I put some aloe vera oil on it, and checked myself out (I already got dressed and did my hair) and figured it was fine. It was a little red but hey, better than that moustache, right? I arrived at the location and saw everyone looking at my face, and my date was waiting for me at the door. He started laughing his ass off and I couldn't understand why till he asked me to check myself out in de bathroom. My entire upper lip was red, damaged and tiny scabs had formed. So basically I traded my lip fluff for a red moustache. I fixed what I could and wanted to go home, ring the shame bell and stuff my face with chicken wings, but he urged me that it was fine and we should just have fun. We already planned another date so the first person to ever want to date me already feels like a keeper. Oh and I get to go to work with this look, life is fantastic.
#
# Tl:dr I (21F) waxed my lip fluff with duct tape, figured it would be fine but ended up going on a date with a red deformed upper lip because of my insecure ass .
#
# Edit: Wow thank you guys so much for the tips! I'm scrolling the comments and I feel like an absolute fucktard. I do have tweezers, but hell no that it even crossed my mind during my useless panick attack. I came here for getting a laugh out of it (eventually) and I'm leaving with more confidence about myself, some more selflove and wholesomeness. Honestly bless you all!"""

text = """I came home from work early (I'm an OB nurse so my hours are pretty unpredictable) and found female sneakers in the garage that weren't mine. At that point, I sort of already knew what I'd be walking into. My husband has recently become very fit and has been consistently going to the gym, during which he made a female friend who he even brought home for dinner last week. She's beautiful and thin and everything I am not, which instantly made me feel horrible. So, I talked to him about it. He encouraged me to build my confidence and reassured me he loved me and would always be loyal to me.

I walked into the laundry room from the garage and sort of tiptoed around the house before going upstairs. They were having sex. In our bed. With a framed picture from our wedding above the nightstand next to it. I silently left the room and got back in my car with tears streaming down my face and drove to get food and just sat in my car crying since. Its now almost 1am (walked in on them at 7pm) and I've returned to the hospital. He called me asking why I wasn't home and I told him my shift is extended but in reality, I'm laying in one of the on call rooms bawling my eyes out as I type this.

I feel so worthless and ugly and stupid. I don't even know how to proceed. On one hand I want to divorce him and never see him again, but on the other hand, I'm an ugly woman....its not like I can do better. I just want to die. I feel so gross and the self-loathing is getting too much right now. Advice please.

​

Edit: Thank you all for the kind comments and support. Please stop commenting, however. I think I've heard just about everything (including some horrible things about my weight). I don't care about "internet points" or whatever and the notifications are getting crazy. Reading through these comments has been a nice way to keep myself sane these past few hours. I still have no idea what I am going to do and I know everyone wants me to leave, but a marriage is more than can be illustrated with a couple of words on a website. He was a great husband and I can't help but feel at fault for neglecting myself weight-wise. I don't know if I will stay, but that's all I really know right now.

​

Edit: I didn't expect this to blow up as much as it did and while I'm incredibly grateful for all the nice and supportive comments...please please please stop messaging me about how I should stop eating or laugh at me for expecting a faithful husband while being overweight. It is incredibly upsetting and I am already going through a lot. I feel I need to clarify since everyone seems to care that I had food after I found out. I had been working a shift from 7am to 6:30pm during which I had been all over the place. I had lunch at 11am and nothing else until I left. I was starving and hurt and driving around with tears streaming down my face. Please stop harassing me about that."""


def analyze_entry(raw_text):
    sent_detector = nltk.data.load('tokenizers/punkt/english.pickle')
    text_sentences = sent_detector.tokenize(raw_text.strip())
    emotions_overall=paralleldots.emotion(raw_text)
    sentiment_overall = paralleldots.sentiment(raw_text)
    emotions_sentences = paralleldots.batch_emotion(text_sentences)
    sentiment_sentences = paralleldots.batch_sentiment(text_sentences)
    #print("type of emotions_overall: ", type(emotions_overall))
    overall = {}
    overall.update(emotions_overall)
    overall.update(sentiment_overall)
    sentences = {}
    sentences.update(emotions_sentences)
    sentences.update(sentiment_sentences)
    data = {'Overall' : overall, 'Sentences':sentences}
    #print("type of data: ", type(data))
    #data = json.dumps(data)
    #print("type of data: ",type(data))
    # data['Overall'].append(emotions_overall)
    # data['Overall'].append(sentiment_overall)
    # data['Sentences'] = []
    # data['Sentences'].append(emotions_sentences)
    # data['Sentences'].append(sentiment_sentences)
    #print(type(data))
    return data

# check to make sure the json holds the right data
ret = analyze_entry(text)
# print("Emotions Overall: ", ret['Overall'])
print(ret)
with open('example_5.json', 'w') as fp:
    json.dump(ret, fp)

# print(analyze_entry(text))