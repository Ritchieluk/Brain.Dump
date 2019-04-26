import paralleldots
import nltk
import json
from nltk.tokenize import sent_tokenize, word_tokenize

paralleldots.set_api_key("a7RV80hn6h7p1ZeDr5kd25amcQBRutrLs2sP5MlSzJQ")

test = [
    """I went to an Ivey league university in Ontario Canada right after high school. My marks weren't great but they were good enough to squeeze me in. I spent most of my time in University partying rather than studying but still managed to pass all of my first year classes. In my second year I skipped a lot of classes and was very lazy with the course work. My marks were terrible and I failed a couple of my courses. In my third year about half way through I dropped out and got a job landscaping.
​

I did that for a year when I realized it really sucked and I began to regret not trying harder while I was in school. I figured I would apply to jobs that would normally require the degree that I would have gotten. I had spent the few years in school I was easy enough to make the timeline on my resume make sense and although I dropped out I had a decent knowledge of the area.

​

The field I was attempting to enter is difficult start out in and it took a few months of sending applications to get an interview. The company I got an interview with (my now current employer) is an internationally recognized name in the energy sector. I was extremely surprised to get my interview. One of the documentation requirements was university transcripts and with an hour or two in photoshop I had my proof of graduation. I sent in the papers with the other required information and never heard anything back describing any problems with my records. I ended up going through three interviews in the process and received a position.

​

I have have now been working with this company for almost 5 years. They provided all the necessary job training and nobody has ever questioned my education. I entered with a starting salary of $72,500 CDN and received annual raises. Upon hiring me I was told that the management staff was quite impressed with me through the hiring process and that they usually only hire applicants with minimum requirement of a Masters Degree.

​

I basically shit my pants everyday while in the interview/training process but now I don't really think about it ever. I didn't tell me university friends I faked having my degree. The only people that know I did this are my parents.

​

Thanks for reading !""",
    """This was about four years ago in high school. Now I am from Poland and we had a test of English idioms. I considered myself quite good at English so I never really paid attention to when the exams were scheduled as I managed to get good marks without studying at all.

The idiom one, however, caught me off guard. I knew about two out of ten examples and I just wasn't okay with the mark that I was gonna get. I quickly wrote down the idioms on a separate paper and never handed in the original one. The teacher then proceeded to mark the tests at his desk and that's when I wrote my answers on that separate sheet of paper with the help of my notebook.

As I finished I approached my teacher and asked him some typical questions about my marks and etc. that required him to look at his computer screen. At that very moment I dropped my perfectly written paper under his chair and returned to my own desk. About 15 minutes later I watched him pick it up with slight confusion and eventually he assumed that he had dropped it before, exactly as I had planned.

I ended up getting the best mark and honestly am still proud of myself for handling it like that. I've learned the idioms too.""",
    """Short story. I was academically dismissed from University in 2008 for poor performance. It was my third year of a Chemical Engineering degree. I failed like 5 out of 6 of my classes. Fast forward 10 years and multiple meaningless jobs later I decided it was time to finish what I started.

This winter term was my first term back to school in 10 years! I will say it was terrifying at first but I somehow managed to get all A's with even one A+ in my favorite class. Never in my life did I think I was capable of an A+.

To anyone reading this... Don't underestimate yourself like I did for so long. I was doubting myself right up until the moment I saw my marks and that really is no way to live. You don't have to be a genius or gifted or anything to succeed in academics, you just need to be motivated. Just because you failed in the past doesn't mean you will always fail.

Cheers, I'll make another post when I graduate!""",
    """When i was 13, i was in love with a boy who was 17, or as close as a 13 year old can get to being in love. He was a tweaker (meth user). He basically told me “if you wanna be with me, you have to know what it’s like.”
    So wanting him to like me, i tried it. And i liked it. I liked it too much. I started using it more and more until eventually i was using it every day. By the time i was 15 i had started shooting up. I thought i was addicted when i was smoking it but slamming is a whole other ball game.
    Anyway, after 2 trips to rehab, and countless relapses, i finally got clean. My best friend passed away from an overdose while i was in rehab the 2nd time, and i think that kinda helped snap me out of it a bit. Seeing what addiction can really do.
    I got news the other day that the guy who got me started on meth, my first love, had overdosed.
    I’m still kinda in shock about it. I know it comes with the territory but it’s just so awful. Addiction is evil. It’s a killer. It’s insidious and spiteful. But i am so fucking grateful to be alive. I’m an anomaly and I honestly feel like me not using for this long is miraculous.
    I’m so appreciative to my support system and just so glad to be alive. Just having a roof over my head and food to eat is so much better than how it used to be. I’m so grateful <33""",
    """Ever since I've become physically disabled, I feel like a huge burden on everyone in my life. If I weren't married, I'd just kill myself. My family wouldn't have to support me, and i wouldn't have to be in constant pain, missing my functioning body and ability to work. I literally miss being able to work retail, and retail is a special hell of its own lol.

I'm still in my 20s and can barely walk even with my cane some days. I spent 23 years of my life in constant movement- doing physical jobs, hobbies, everything. And now I have to relearn life without that. Oh and in its place crippling pain.

Plus, you lose so many people. At first people are nice and even supportive, but then they see you aren't improving. You're a bummer to hang out with, and it's a pain to have to plan around stairs and standing too long, and seating options. People talk to you in a weirdly condescending way, like you're a slightly dumb child everyone pities. I can't support myself and help my family like I used to, my old life is as gone as my shitty body. I hate my body so much sometimes it feels like an iron maiden around me. I just want 1 day without pain, but it won't happen.

The only way to escape this pain would be to die, but then I'd be passing that pain to my spouse and family, and that's shitty too. So I'm stuck. I'm trying to find something in the ashes of my life to start anew, but it's so hard when I'm already physically weak and mentally fucked. I just don't know what to do anymore.""",
    """I'm going to use this to write. I don't know why though I really don't have anything to talk about. It's not like I do anyting. Even though I really need to. Even though there really isn't much to do around where I live. Maybe I should go up to the library and start checking out books again. I guess I couldn't start getting rid of a lot of stuff too. I do have a lot of stuff that I need to get rid of. I'm sorry that I'm all over the place. I told you I don't really have anything to write about. I just wanted to write just because I'm bored I guess. I really don't know what to do. I'm just going to do stuff on my own I guess""",
    """I need to just accept the fact that I’m a flirt and quit feeling guilty about it. I’ve been a flirt since I was old enough to know what flirting is (and maybe even prior). I don’t completely know why, I have theories, but ultimately it doesn’t matter. My husband knew I was a flirt before we dated (poor guy got frustrated because I’d give him false hope at times) so he probably isn’t surprised now. I think he and I need to revisit what is okay and what isn’t. When I started to become flirtatious with co-workers, I asked my husband where the line was just so I knew for sure because at that point, we hadn’t discussed it for years. Then not long ago we were talking about an upcoming camping trip with friends during which we know there might be some alcohol and intimacy amongst others. He actually asked me where my comfort level was regarding him kissing someone else, which caught me a bit off guard because he never would’ve gone there in the past. I really don’t know how I feel about that; I’ll have to think on it some more. Anyway, I’m rambling a bit, but my initial point was that yeah, I feel guilty at times that I’ll flirt at work in particular. It finally dawned on me, though, that I don’t have to feel guilty. If I knew he was flirting with other women then I wouldn’t care because at the end of the day, I know we’re very much in love and very committed to each other and won’t fool around on each other. So why should he be any different, especially knowing that’s in my nature anyway? He probably doesn’t, especially if he’s asking what I think of him kissing other women. So screw it, I’m going to try to let myself just be myself and not feel badly about it. I’m still a loyal partner, which is a hell of a lot more than a LOT of people can claim, so what do I really have to feel sorry for? """,
    """Samson and I had our second fight today, and it ended with me hanging up on him. You see, the problem is that he tells me he loves me every single day. Normally, that wouldn't be a problem, but it's a problem now because his actions don't align with his words. I asked him today how he knew that he loved me, and he gave me an awesome list of feelings such as stomach butterflies, constant thoughts, warm emotions, etc. That's wonderful but it isn't love.

You see, love is much more than a feeling or two. It's the kind of shit that lasts long after the butterflies cease. It's that thing that makes you want to stick by a mofo even though you know that he or she is raggedy as phuck and completely undeserving of that love. It's the thing that makes you ignore the smelly farts and the morning breath and the peculiar cooter and imperfect haircuts and weird quirks. It's that thing that makes people still come home to each other after 50 years of being around that same motherlover all that time.

Do we have that? I don't know. Our mouths say that we do, but our actions don't back it up. If he loves me, why is our relationship a secret? Why would I need to wait ANY TIME WHATSOEVER before I report a name change to my job? Why can't I borrow his car to go to work rather than drive a donut around? These are the things that pissed me off today. He keeps telling me how much he loves me, but his actions say that he doesn't even respect me. You can't love someone you don't respect. At all. The nigga was smoking weed outside my front door. Aside from that, he had his sh!t in my kitchen drawer. That's what pissed me off earlier today. He isn't even on the lease yet!!! So I'm responsible for the behaviors of ALL GUESTS in my home. Right now, he's just a guest. He can say whatever he wants, but he's still a guest in their eyes until he completes a background check and signs himself onto the lease. My contract says that I'm responsible for anything that my guests do, including criminal activities such as possessing drugs.

Now mind you, I was in the wrong here because I smoked with him a few times. So I guess he thought it was okay, but I really didn't like the idea of doing it out in the open like that. I don't want to be known as a smoker because I'm not really a smoker. That was just a random thing that I never would have done if I wasn't around someone who had it all the time. So yeah, I know I have to take responsibility for my part, but at that same time, he was wrong for bringing that crap up in my house. He likes to smoke, fine, but keep it in HIS car. That way, HE will be the one to catch a possession charge, not me. I can lose my home for having that crap up in here, and I worked too hard and came too far for that. I was mad because he didn't consider what could happen to me if they found it in my home.

So yeah, I went in on him a little bit about that this morning, but I also went in on him later about caring more about what other people thought than he cared about me getting to work safely. I thought that was really effed up, and it showed me where his loyalties lied. He says it's all about money and trying to get several thousand dollars worth of income taxes back. Well, guess what? That doesn't make him look like a better person. It makes him look like an even worse douchebag because he cares more about money than he does me.

He's a very selfish individual, and he doesn't think about other people or how his actions may affect other people. I don't like that about him at all, and I told him. He always has excuse after excuse after excuse, and he fires them off like gunshots. I hate that crap.

I hung up on him, and he went to sleep on me. Whatever. That's fine. I'd rather he go to sleep than to tell me one more fake I love you today.

No, I'm not going to kick him out. Maybe we can be roommates or some sh!t. If I happen to be pregnant, then maybe we can be roomie coparents or something. I have no idea. Right now, my heart hurts though.

I was late for work because of a traffic jam. My boss hooked me up, though, lol. He is so funny because he always brags about his power. He said he was going to start giving me three days off back to back once every month so I could explore different areas and take pilgrimages and whatnot, lol. "I have the power to do that," he said. Yeah. He really gets off on his manager power. Shoot... I'll take three days off any time, though. Bring it on, brother. Bring it on. I have to get my new rim for my car first, though. """,
    """Great day at the gym today. I didn't go since Sunday so that's 3 freaking days off. Gym was closed so I didn't have a choice. So today, not much of me was in pain so we rocked it. Burpee into plank jacks. Arnold presses, Speed step ups, TRX shit that burned our core, reverse lunges, squats with 50 lb kettle bells. We went round and round for an hour.

My gym rat friend and I have a great time there. We kid around a lot when we work out. Always egging each other to do more, faster, etc, etc. We laugh so much while working out. Next thing you know, the hour is up when it feels like only 10 min went by. Now that's the kind of workout I like. The kind where we are having fun.

My gym rat is actually a very pretty woman. She has blond hair and blue eyes. About 5'2:". But we're just friends. I don't poop where I eat. We've become close over the past year and she knows about my breakup with my ex gf. She knew I was there at the gym classes but my head wasn't into it like normal. She helped me out and now I'm having fun at the gym again.

I got her some Christmas presents and she like them a lot. All junk food really. One was a one pound dark chocolate. A big ceramic jar of chocolate covered cookies, and a little stuffed animal that I won back in Reno awhile ago. She like it. She gave me a tin of candy too. Haha. Gym peeps exchanging the worse kind of gifts for gym going peeps.

Anyway, besides work and the gym, that was my day.

One small confession. I did email my ex gf. First time in almost two months. I just emailed her saying I wish her and her family a Merry Christmas. End of quote. No response needed and expected. Also, I think I'm now strong enough to uncheck the unfollow button on Facebook. I now am strong enough to see whatever she posts and I think I'm strong enough now to be able to be the better man and move on without freaking out on any of her posts. She too should go out in this world and seek the happiness she as we all are looking for. So no hard feelings. At least that's where I stand right now anyway. Should I feel different and weak, then unfollowing her is just a click away. I may even unfriend her but some youtube vids indicate that this is a show of weakness on my part and only proves I can't suck it up yet. So that's why I haven't unfriended her yet.

That's enough of her. I'm guessing tomorrow, my body will be feeling the love that I put myself through tonight. That's just fine with me. Great indicator that I am alive in this world and I like it :)
"""
]

mini_test = [
    """I didn't want to wake up today. I just wanted to sleep or die. Living is hell. God please take me away""",
    """I'm getting married today. This will be the best day of my entire life and I can't wait to see what else is yet to come.""",
    """My dog died. I am severely depressed. I will be evicted soon without anywhere to go. My insides are pure sadness.""",
    """I am so bored with my life. Existence is dull. All I want is some kind of stimulus."""
]

def analyze_entry(raw_text):
    sent_detector = nltk.data.load('tokenizers/punkt/english.pickle')
    text_sentences = sent_detector.tokenize(raw_text.strip())
    emotions_overall = paralleldots.emotion(raw_text)
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
    data = {'Overall' : overall, 'Sentences':sentences, 'Source Text':raw_text}
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
for i in range(3,len(mini_test)):
    # print(test[i])
    # ret = analyze_entry(test[i])
    ret = analyze_entry(mini_test[i])
    # # # print("Emotions Overall: ", ret['Overall'])
    # print(ret)
    with open('april_26_extreme_example_' + str(i) + '.json', 'w') as fp:
        json.dump(ret, fp)
    #
    # # print(analyze_entry(text))