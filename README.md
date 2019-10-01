# Brain.Dump UI
A Sentiment Analysis tool made to translate journal entries into meaningful representations of the emotion within the entries.

By:
___
- Luke Ritchie
- Oscar Skean
- Morgan Martin

[![Build Status](https://dev.azure.com/ldri225/ldri225/_apis/build/status/Ritchieluk.Brain.Dump%20(1)?branchName=master)](https://dev.azure.com/ldri225/ldri225/_build/latest?definitionId=2&branchName=master)

## Components

Brain.Dump can be split into three major components: a journaling site that can create animate journals, 
a reinforcement-learned algorithm that acts as an interpreter for analyzing the entries, and an api to communicate between the components and database.

### The Journal
___
*The Journal* will be a website allowing you to write and save a journal entry, and then submit once you have
finished writing it. Upon submission it will be sent to the interpreter to be analyzed.
Emotionally charged words will be picked up by the Interpreter. The Interpreter will send back a JSON containing the information required by the Journal to animate it and create an image.

You can find examples of this animation here:
- http://www.cs.uky.edu/~ldri225/braindump/test.php
- http://www.cs.uky.edu/~ldri225/braindump/test1.php
- http://www.cs.uky.edu/~ldri225/braindump/test2.php
- http://www.cs.uky.edu/~ldri225/braindump/test3.php


### The Interpreter
___
*The Interpreter* is a reinforcement-learned sentiment analysis tool that will
read the journal entries and return decimal values for different percentages of 
certain emotions, which will then be passed on to the Drawer.

### The API
___
The API is a Flask application that handles communication between the Journal, the Interpreter, and the Database.

## Future Goals
___
We envision many future applications for such a program.

- The machine learning tool could be reinforced by actual analyzation data from psychologists and psychiatrists, and be used to flag entries potentially indicative of mental illness
- Users could view summaries of their journal entries via most used words, most present emotion, graphs of emotional changes, most common themes, etc.
- This machine learning instance could be used on more than just braindumps, the braindump journaling platform could expand to blogs, message boards, forums, each of which would have icons indicative of the emotional content within. 
- There could be multiple styles of artful icons that users could choose between
- The main site page could be an image of the summarized emotional content of all recent posts, to create a snapshot of the recent mindset of its users
- Users of the site could search through posts and entries via tag words and view user opinions on the site via summarized emotional content of all entries relevant to the tag word(s).
- Users could feed the ML instance pre-written content to be analyzed and represented


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
