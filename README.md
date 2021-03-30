# げんき Study Resources

## Usage

- Online Version: [2nd Edition](https://cis-softwaredesign-s21.github.io/pro-04-study-resources/) | [3rd Edition](https://cis-softwaredesign-s21.github.io/pro-04-study-resources/lessons-3rd/)

- Offline Version: [Download](https://github.com/CIS-SoftwareDesign-S21/pro-04-study-resources/archive/main.zip)
  - After downloading, you can use the offline version by unzipping the files, moving them to the folder of your preference, and opening any of the index.html pages in the brower of your choice (open the index.html page in the outer most folder to go to the app's home page).

## Project Overview

げんき (Genki) Study Resources is an open source web app for studying the Japanese taught in [the げんき textbook](http://genki.japantimes.co.jp/index_en).
It was originally created by [Seth Clydesdale](https://github.com/SethClydesdale) and this is a version being worked on by five Temple University students as part of a final project in one of our classes.
It contains some of the content from each of the lessons in げんき including the vocab and grammar, but not the lessons themselves.
It is strictly a set of different types of practice quizzes (drag & drop, multiple choice, etc.) and other exercises.
Thus, it is merely meant as a supplemental tool for practice alongside the textbook itself, it is not meant to be used as a sole resource for learning Japanese.
Our aim in making this version is to add games and a leaderboard system to the app in order to make it more enjoyable and add an element of competition to studying Japanese!

## Vision

For literally anyone from a young student in university to an older retiree
who is looking to learn Japanese for any reason, whether it is to one day live/work there or simply go on a short vacation there,
げんき Study Resources is a simple web app that not only provides supplementary exercises to help memorize the content from the げんき textbook,
but also provides fun and engaging games that facilitate the memorization of vocab words and kanji.
Unlike other services like Duolingo or Quizlet that do not have much, if any, variation in their modes of study,
our product provides many different and new ways for the user to study what they have learned in the textbook, allowing them to change up how they memorize new vocab.
Learning Japanese is something that takes time, and there is no app that can change that, but by providing these new and exciting modes of study we are keeping the entire learning process fresh and exciting!

## Project Ideas

### Geosafari Clone

There was a learning tool in the late 80s and early 90s that used a two-sided, laminated cards that fit into the front of the machine. The card was designed to have some kind of drawing in the middle with answers to questions lined up along the side corresponding with numbers that can be entered into a number pad. There’s a really great video on this by Technology Connections that describes the entire tool in great detail here. My idea revolves around creating a modern day version of this concept retaining a lot of the elements that it introduced to a web app format. It would consist of some kind of art asset in the middle with drag-and-droppable slots that can receive an answer. The Genki Study Resources website already provides a drag and drop feature that I can use, it would be a matter of designing interesting art assets and programming the arrangement to mimic Geosafari.

### Video Clips

Learning a new language can be hard specially for people who are starting from scratch. Practicing and doing as much exercises/quizzes is a great way to start off, but not the best one. My idea is to include various video clips for people to watch so they can learn through hearing it. These videos will be based on the lessons/category that learners are on. I'm pretty sure there are many videos on Youtube (or else where), but sometimes people don't know where to start off. So, having videos for people to watch is another step of learning Japanese and it is easier for them to watch rather than searching for videos that may result in watching a bad ones (aka clickbait). Also, if looking up on YouTube, it can be a distraction due to recommended videos next to it. Putting a video on the webpage is pretty straightforward by using `<video>` or `<iframe>`. I would also like to include questions for people to answers after watching the videos to see how much they get out of by hearing Japanese.

### Concentration (card game)

Concentration is the famous card game where a deck of cards is shuffled & laid out one by one face down on a table and the player picks up two cards each turn.
If the two cards match, the player "wins" the round and removes the cards from the table. This can be considered as earning a point.
If the two cards do not match, then the player does not win anything that round and the cards must simply be placed face down on the table again, in the same position.
The game can be played with multiple people, but when playing alone the goal of the game is to find every matching pair of cards as quickly as possible.
I think this game is a perfect choice to implement in げんき Study Resources because it is the embodiment of memorization when it comes to games, so much so that it is quite literally referred to as "Memory", or "Memorization" sometimes.
It is also incredibly simple, with a very straightforward set of rules as well as a very easily measurable value of success.
My plan would be to have either a vocab word & its translation be a pair, or have a kanji & its reading be a pair.
This would not be too complicated in terms of implementation and would be great for helping memorize new vocab words and kanji, so I think it would be a great addition to this app.

### Full Feature List

[All features opened in GitHub](https://github.com/CIS-SoftwareDesign-S21/pro-04-study-resources/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)  
[Project Board tracking progress on each feature](https://github.com/CIS-SoftwareDesign-S21/pro-04-study-resources/projects/1)

## Personas

### Jake

Jake, age 20, is a junior computer science student at a university in Philadelphia.
He has always had an interest in Japan, having watched plenty of anime and played video games that were developed in Japan.
Finally a young adult, Jake has become an intern software engineer at a fairly large company with offices around the world, and he was given the oppurtunity to work for that very company in Tokyo for an entire summer, all expenses paid.
Jake is excited to take full advantage of this oppurtunity, but realizes that he has to learn Japanese to some degree in order to survive living and working there for three months.
He has pushed off learning the language seriously for some time, but he is ready to commit to it and needs a place to start so he signs up for a Japanese class at university and starts studying the げんき textbook.  

Jake starts off strong, but after some time the same old quizzes in class and flash cards on Quizlet are getting boring.
He imagines that if he could use a simple game to memorize kanji and vocab, that he might be able to maintain the same enthusiasm and motivation that he had when he first started.
He is also incredibly competitive. If he is not at the top, he will work his hardest to get there. Because of this, he believes if there is also a leaderboard for this game, he will be even more motivated.
Since he is also a computer science student, Jake is incredibly critical of poorly designed apps.
He cannot stand many of the Japanese learning apps that are out there and have attempted doing something like this.
Thus, Jake is extremely interested in using げんき Study Resources' games and other tools to aid in his journey of learning Japanese.

### Gillian - Pleasure/Travel Persona

Gillian, age 28, is a financial accountant taking her first paid vacation off from work since she started to a foriegn country. She decided that Japan is a lovely tourist spot with a lot of cultural aspects that appeal to her like food, customs (clothing, activities, etc.), and the climate around this time is wonderful. She doesn’t have much experience traveling however and she doesn’t want to commit to learning an entire language at an advanced level just to get around for the basic necessities that she needs. She’s also heard word around the office that they may consider sending off an accountant for a client in Japan sometime after her trip and she can use this as an opportunity to prove she’d be a right pick for the job as a scheme to extend her vacation.

Gillian is confident that she can pick up the essentials of a language if she uses some kind of learning tool as a crash course for what she needs to enjoy her time there. She is interested in using the Genki Study Resources website to learn what she needs because it provides a flash card style of learning based off of the most recommended textbook in the country “Genki: An Integrated Course in Elementary Japanese.”

### Saya

Saya, 23, is an american born japanese person. He only learned to speak japanese because that is what his parents spoke at home. Going to school in california has taught Saya how to speak english very fluently but returning home, he feels like an amatuer due to the lack of vocabulary in his own first language. Through his experiences in college he's learned much about the west coast culture and the social norms but lacks deep knowledge about his culture. At some point Saya would also like to go to japan to explore the culture through immersion but his goal right now is to be able to communicate with his family better. Saya's top priority is to be able to speak to his grandparents to learn about the history in their family and how they came to be in America.

Saya intends to practice his japanese and brush up on vocabulary using genki study resources. Through the use of genki study resources and the textbook, he'll be able to practice his japanese, refine his grammar and vocabulary well enough to have a proper conversation with his grandparents. His grandparents don't speak any english so it's important for Saya to learn if he wants to be able to hear about the stories and history of his family. Saya has researched many ways of practicing japanese but settled on using genki study resouces because of the big following and expansive resouces.

### Nicole

Nicole, age 21, is a college student who is majoring in advertising and learned Japanese for 4 years. She got interested in Japanese fashion in high school, so she did research on their fashion, then fell into their cultures. Her dream was to get a job and settle in Tokyo. She started taking Japanese language classes freshman year so she can master it when she gets a job in Japan one day. Being interested in learning Japanese language and culture, she went to study abroad in Japan for a semester to practice her Japanese. She noticed that her experience learning Japanese and speaking it is different since there was a lot of vocabulary that wasn’t in her list. As well as seeing new kanji and kana, she had trouble reading them. 

Nicole does try to practice Japanese outside of class to know more Japanese words. Though she learned Japanese for 4 years, she felt that she didn’t learn enough from school. Using Genki Study Resource, she will master learning Japanese. There’s flashcards and practice exercises that she can use to boost her language skills. Since it is already nicely organized, it’s easier for her to find and get straight into practice.
