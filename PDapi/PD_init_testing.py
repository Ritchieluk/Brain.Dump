import paralleldots

paralleldots.set_api_key("AfHOCgHb46FanBBmFWRsYgiZVdkn9jAES69sGXiQ6dA")


# for single sentence
text="Come on, lets play together"
lang_code="en"
response=paralleldots.sentiment(text,lang_code)
print(response)

# for multiple sentence as array
text=["Come on,lets play together","Team performed well overall.", "Mr. Burns ate a large mammoth for lunch."]
response=paralleldots.batch_sentiment(text)
print(response)
