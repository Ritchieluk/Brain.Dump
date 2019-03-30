# Brain.Dump
A Sentiment Analysis tool made to translate journal entries into meaningful representations of the emotion within the entries.

By:
___
- John Howes
- Morgan Martin
- Sam Oates
- Luke Ritchie
- Oscar Skean
- Robert Wheaton


## Components

Brain.Dump can be split into three major components: a journaling site, 
a reinforcement-learned algorithm that acts as an interpreter for analyzing the entries, and a 
drawing mechanism for turning the algorithm's output into a meaningful image.

### The Journal
___
*The Journal* will be a website allowing you to write and save a journal entry, and then submit once you have
finished writing it. Upon submission it will be sent to the interpreter to be analyzed.
Emotionally charged words will be picked up by the Interpreter. 

In future iterations of the project, users will be able to save multiple entries, and view
their entries in a chronological order.

### The Interpreter
___
*The Interpreter* is a reinforcement-learned sentiment analysis tool that will
read the journal entries and return decimal values for different percentages of 
certain emotions, which will then be passed on to the Drawer.

### The Drawer
___
*The Drawer* will be an image creation tool making use of parametric trig equations to generate
a spirograph-like image. It can also make use of a multi-axis chart of percentages of different emotions
for a less abstract representation.

## Future Goals
___
We envision many future applications for such a device.

- The machine learning tool could be reinforced by actual analyzation data from psychologists and psychiatrists, and be used to flag entries potentially indicative of mental illness
- Users could view summaries of their journal entries via most used words, most present emotion, graphs of emotional changes, most common themes, etc.
- This machine learning instance could be used on more than just braindumps, the braindump journaling platform could expand to blogs, message boards, forums, each of which would have icons indicative of the emotional content within. 
- There could be multiple styles of artful icons that users could choose between
- The main site page could be an image of the summarized emotional content of all recent posts, to create a snapshot of the recent mindset of its users
- Users of the site could search through posts and entries via tag words and view user opinions on the site via summarized emotional content of all entries relevant to the tag word(s).
- Users could feed the ML instance pre-written content to be analyzed and represented

