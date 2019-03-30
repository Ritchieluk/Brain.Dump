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