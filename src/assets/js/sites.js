let sites = [
    {
        name: "Little Alchemy",
        URL: "https://littlealchemy.com/",
        description: "This one is a fun little time killer. As its name suggests, the website deals with the process of transformation you achieve when you start mixing different things. You start with Earth, Fire, Water, and Air. The goal is to create as many different materials or objects as possible. For example, earth and air will form dust.",
        logo: ""
    },
    {
        name: "Little Alchemy 2",
        URL: "https://littlealchemy2.com/",
        description: "This one is a fun little time killer. As its name suggests, the website deals with the process of transformation you achieve when you start mixing different things. You start with Earth, Fire, Water, and Air. The goal is to create as many different materials or objects as possible. For example, earth and air will form dust.",
        logo: ""
    },
    {
        name: "Mental Floss",
        URL: "http://mentalfloss.com/",
        description: "Mental Floss is a cool website which tells you the hidden stories behind the popular happenings around the world. They cover everything from science to history to technology to pop culture. Prepare your mind to blown away by learning fascinating facts and hidden elements behind things which you thought you already know of.",
        logo: ""
    },
    {
        name: "Vieuus",
        URL: "http://www.vieuus.com/",
        description: "If you are sick of watching cat videos on YouTube and YouTube’s trending page is delivering the similar content to you, go visit the Vieuus. This is a website which curates content uploaded on YouTube to provide you with quality videos.",
        logo: ""
    },
    {
        name: "A Good Movie to Watch",
        URL: "https://agoodmovietowatch.com/",
        description: "We all know how difficult finding a good movie to watch can be. It happens with me all the time and I always have to watch the same few movies over and over again. This website is a boon to people like me. They have a highly curated list of movies which you can select based on genre, mood, or just randomly.",
        logo: ""
    },
    {
        name: "MUBI",
        URL: "https://mubi.com/showing",
        description: "Continuing on the topic of movies, if you are someone who is overwhelmed by the sheer number of movies in any catalog, and cannot decide what to watch, this one if for you. The website only hosts 30 movies at a time, with a single movie added and removed daily. This gives you a highly curated and small list of the option you can easily choose from.",
        logo: ""
    },
    {
        name: "The Moth",
        URL: "https://www.themoth.org/",
        description: "If you love the art of storytelling, you are going to love this website. The website houses real life stories told by the people themselves. It also has a podcast which features all the stories told across the world on Moth stages. These are literally stories for your ears.",
        logo: ""
    },
    {
        name: "XKCD",
        URL: "https://xkcd.com/",
        description: "The website contains original satirical comic strips relating to romance, math, and language. You will laugh so hard that tears will come out of eyes. If you love maths you are especially going to enjoy this one.",
        logo: ""
    },
    {
        name: "The Odd 1s Out",
        URL: "http://theodd1sout.com/comic/",
        description: "Another comic strip website which is really hilarious. The comics are a satirical take on everyday life questions and just funny stuff. They also have a corresponding YouTube channel if you are interested.",
        logo: ""
    },
    {
        name: "BoredPanda",
        URL: "http://www.boredpanda.com/",
        description: "The website deals with everything funny in the world of internet. The site mainly focuses on photo heavy listicle contents. The articles are really fun to read. The panda might be bored but you will never be.",
        logo: ""
    },
    {
        name: "Cracked",
        URL: "http://www.cracked.com/",
        description: "Another similar website which deals heavily in listicle funny content. The site uses a lot of freelance writers making sure that you will never run out of funny content. This will surely crack you up.",
        logo: ""
    },
    {
        name: "Don't Even Reply",
        URL: "http://www.dontevenreply.com/",
        description: "One must have a lot of free time on his hand if he replies to every classified ad posted on Craigslist. Well, the website owner seems to have that time and the email exchange is hilarious. You will love it.",
        logo: ""
    },
    {
        name: "Cool Interesting Stuff",
        URL: "http://coolinterestingstuff.com/",
        description: "As the name suggests the website is the bank of interesting stuffs which are mostly mysteries. You should not take the content on its face value, but you can use it as a cool time killer.",
        logo: ""
    },
    {
        name: "Wait But Why",
        URL: "https://waitbutwhy.com/",
        description: "The website is pretty cool and deals with normal news and other content related to life. Some simple stick figures are used to explain the topics in a funny way. The website surely seems eccentric and funny.",
        logo: ""
    },
    {
        name: "This Is My Website Now",
        URL: "http://www.thisismywebsitenow.com/",
        description: "The website truly kills your time. It is just a collection of small games which you can play on your browser. Effective for less than 10 minutes of usage, it’s good for a short break.",
        logo: ""
    },
    {
        name: "The Oatmeal",
        URL: "http://theoatmeal.com/",
        description: "Of all the comic strip websites I have visited, this is the funniest. You never guess what the ending or the punch line of the comics will be. One thing is sure, however, that you will laugh every few second.",
        logo: ""
    },
    {
        name: "The Onion",
        URL: "http://www.theonion.com",
        description: "Considered as the pioneer of satirical news coverage, the Onion is still the best among its class. The Onion inspired a generation of writers to deliver even the hardest of news in the funniest way possible. Check them out for your daily dose.",
        logo: ""
    },
    {
        name: "GIPHY",
        URL: "https://giphy.com/",
        description: "GIPHY houses the most popular GIFs which are circulated over million times on the internet. They are a way of expressing yourself in a funny and inoffensive manner. Use some GIFs to make your Twitter game strong.",
        logo: ""
    },
    {
        name: "Oddee",
        URL: "http://www.oddee.com/",
        description: "The Website Focuses on the odd, bizarre and strange things of the world and brings you unique article which is different from those on BuzzFeed. Although the format is same, the content is fairly different. A good alternative to BuzzFeed and a great time killer.",
        logo: ""
    },
    {
        name: "ZergNet",
        URL: "http://www.zergnet.com",
        description: "ZergNet does not offer its original content but hosts the content from the best publishers around the world. The content mainly focuses on movies, tv-series and other entertainment related stuff. A good place to discover quality articles.",
        logo: ""
    },
    {
        name: "This Is Why I Am Broke",
        URL: "https://www.thisiswhyimbroke.com/",
        description: "This is a great website for discovering new gift ideas which are distinct. The products range from a few dollars to a few thousand. There&#8217;s something for everyone here.",
        logo: ""
    },
    {
        name: "Forgetify",
        URL: "http://forgotify.com/",
        description: "No body can deny that Spotify is one of the best places to discover music. Still, the vast catalog favors popular artist. Fogetify helps you discover artists who are not that popular but produce great music. A great place to discover new music and artists.",
        logo: ""
    },
    {
        name: "Attack Of the Cute",
        URL: "http://attackofthecute.com/",
        description: "Attack of the Cute is a simple website Which shows you the cute pictures of different animals. A great place to hangout for people who like to go “awwww”.",
        logo: ""
    },
    {
        name: "Akinator",
        URL: "http://en.akinator.com/",
        description: "The website is magic or rather feels like one. You can think of any character in this entire world and through a series of question, it will deduce the name. Don’t believe me, go try for yourself.",
        logo: ""
    },
    {
        name: "Flight Radar 24",
        URL: "https://www.flightradar24.com/",
        description: "This a flight tracker website that shows air traffic in real time.The yellow plane icons that you see are the planes flying currently. Not only this website shows the airplanes but it also tells you the details about each and every plane.",
        logo: ""
    },
    {
        name: "The Internet Map",
        URL: "http://internet-map.net/",
        description: "This website shows the most popular website on the internet. The blue circles that you see in the centre of the image denotes google as google is the most poplar website on the internet. Next to it is Facebook and very next is YouTube. You can figure it out by clicking on the particular circle.",
        logo: ""
    },
    {
        name: "Pointer Pointer",
        URL: "http://www.pointerpointer.com/",
        description: "It will tell you to click your mouse cursor or touch anywhere within the area provided. After you click on the desired point it will show message like locating your cursor. Within a couple of seconds a random image will appear on the screen like this.",
        logo: ""
    },
    {
        name: "Zoomquilt",
        URL: "http://zoomquilt.org/",
        description: "This website is really amazing. When you visit this website you will see an image and when you stay there for a couple of seconds the image gets zoomed in. The best part is that the image keeps on zooming. It is endless. The moment you think this is the end you get a twist. Try it out. You will love it.",
        logo: ""
    },
    {
        name: "Pixel Thoughts",
        URL: "http://www.pixelthoughts.co/",
        description: "This website is really amazing. When you visit this website you will see an image and when you stay there for a couple of seconds the image gets zoomed in. The best part is that the image keeps on zooming. It is endless. The moment you think this is the end you get a twist. Try it out. You will love it.",
        logo: ""
    },
    {
        name: "Zoomquilt",
        URL: "http://zoomquilt.org/",
        description: "This website is really amazing. When you visit this website you will see an image and when you stay there for a couple of seconds the image gets zoomed in. The best part is that the image keeps on zooming. It is endless. The moment you think this is the end you get a twist. Try it out. You will love it.",
        logo: ""
    },
    {
        name: "Big Think",
        URL: "http://bigthink.com/",
        description: "It’s a place which shares ideas and insights from the most successful people around the world. You won’t get life-hacks here, but you will get real information. You will learn from the mistakes of the others and their successes too. A good place to get the content from people who know what they are talking about.",
        logo: ""
    },
    {
        name: "Nautilus",
        URL: "http://nautil.us/",
        description: "A great place to read informative and impeccably written articles dealing with a multitude of topics which can be broadly divided into science, history, psychology, and autobiography. If you are looking to learn while passing time, there’s no better place.",
        logo: ""
    },
    {
        name: "Vsauce",
        URL: "http://www.vsauce.com/",
        description: "Vsauce is an incredibly popular and successful YouTube channel (with several spinoff channels) that has attracted over 10 million subscribers. Videos focus on interesting educational content where channel creator Michael Stevens teaches viewers about all sorts of amazing topics, almost resembling a modern day Bill Nye the Science Guy.",
        logo: ""
    }
    ];
export default sites;