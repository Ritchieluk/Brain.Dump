import paralleldots
#import PyMySQL
import nltk
import json
from nltk.tokenize import sent_tokenize, word_tokenize

# db = PyMySQL.connect("localhost","testuser","test123","TESTDB" )
# cursor = db.cursor()
# cursor.execute("SELECT VERSION()")
# data = cursor.fetchone()
# print ("Database version : %s " % data)


paralleldots.set_api_key("uMiH4j8JafqX16goSjZuvI93PPMaBqQq2N8EBPzrMvQ")

# for multiple sentence as array
text="""After May 1940 the good times were few and far between: first there was the war,
then the capitulation and then the arrival of the Germans, which is when the trouble
started for the Jews. Our freedom was severely restricted by a series of anti-Jewish
decrees: Jews were required to wear a yellow star; Jews were required to turn in
their bicycles; Jews were forbidden to use street-cars; Jews were forbidden to ride in
cars, even their own; Jews were required to do their shopping between 3 and 5 P.M.;
Jews were required to frequent only Jewish-owned barbershops and beauty parlors;
Jews were forbidden to be out on the streets between 8 P.M. and 6 A.M.; Jews were
forbidden to attend theaters, movies or any other forms of entertainment; Jews were
forbidden to use swimming pools, tennis courts, hockey fields or any other athletic
fields; Jews were forbidden to go rowing; Jews were forbidden to take part in any
athletic activity in public; Jews were forbidden to sit in their gardens or those of their
friends after 8 P.M.; Jews were forbidden to visit Christians in their homes; Jews
were required to attend Jewish schools, etc. You couldn't do this and you couldn't do
that, but life went on. Jacque always said to me, "I don't dare do anything anymore,
'cause I'm afraid it's not allowed."""

sent_detector = nltk.data.load('tokenizers/punkt/english.pickle')
text_sentences = sent_detector.tokenize(text.strip())
emotions_overall=paralleldots.emotion(text)
sentiment_overall = paralleldots.sentiment(text)
emotions_sentences = paralleldots.batch_emotion(text_sentences)
sentiment_sentences = paralleldots.batch_sentiment(text_sentences)
# print("Emotions Overall: ", emotions_overall)
# print("Sentiment Overall: ", sentiment_overall)
# print("Emotions Sentences: ", emotions_sentences)
# print("Sentiment Sentences: ", sentiment_overall)


data = {}
data['Overall'] = []
data['Overall'].append(emotions_overall)
data['Overall'].append(sentiment_overall)
data['Sentences'] = []
data['Sentences'].append(emotions_sentences)
data['Sentences'].append(sentiment_sentences)
# with open('data.txt','w') as outfile:
#     json.dump(data,outfile)
