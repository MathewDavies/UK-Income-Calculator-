# UK-Income-Calculator-
UK income calculator Vanilla JS using chart.js

This is UK Income tax calculator, using vanilla Javascript and a library from chartjs.org.

I'll start this readme with a self-critique then go on to talk about some of the positive aspects later. 

I used several classes with project, which was a mistake as it made the coding more more confusing than it needed to be and as the variables of each class could be called from anywhere, it provided less privacy in functionality than just a set of functions. 

As the task is so specific, it is unlikely that any of these classes would get reused to another project. This is in contrast to the PHP class I made which can be plugged into any login system to validate inputs. 

I also realise that there are huge swaths of code that repeat the same or similar themes. For example, I have a yearly to monthy conversion of data on 9 different fields so it would have been nice to incorporate these into a loop somehow. 

I have put some responsiveness into this with one media query, which creates a good looking site down to about 700px wide but below this, I would need to rearrange the whole layout, which I haven't done. In future I might consider either using css grid for the layout, which will make it much easier to swap objects and I will possibly design with mobile first in mind. 

The calculations themselves were relatively complex, so I was pleased that these were correct and considering my aesthetic abilities at the moment, I was pleased by the look of the site. I was tempted to do my own chart, which might be something useful to do in the future, but Chart.js provided a useful library for creating an easy to use chart. 
