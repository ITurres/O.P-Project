# O.P-Project
PROJECT: LANDING PAGE

<05-04-2022>

I will start with adding the boilerplate to the html file, and so i can begin.
next link the css file to the html
 once that is ready, ill start getting all the content ready on the page.
 we will need:
~HEADER (add container and UL list with links)
~MAIN TITLE with some text (i did first add a class named TEXT, but then i decided to change it for a h1, and so i have one class less. add paragraph with "<-p->")
~IMAGE: i chose first a copyrighted image, but after reading the project landing module again, i changed it for one from the website "pexels". Add alt text.

~a SUBTITTLE with 4 images and subtext en each one.
for this one, i do remember an exercise from "flex" on the odin project flexbox module. I need to check how to add text under an image. 

two more containers will hold the boxes, some text and a button.
and finally ill add a footer to the page.

all in all, has gone okay. ill see later how my html file will react with the css styling (might need to do some changes though).
~~~~~~~~~

06/04/2022

Today is the day to start with the Css file, it is already linked to the html file, so lets begin

~ I will first add general properties (*) to the page, such as box sizing - padding and margin.-

~ next add properties to the -body-. ill give it a family font, font size, line height, color and background color.

NAVBAR: After giving some color to the navbar,
 I use display flex to position the items on the main axis, then justify content to put a space between my logo and the bulletpoints items (with space-between)

i will give the logo and the items some padding to left-right so it can separate a bit from the corners.

 now i have to align the items horizontally one next to each other ...i will prefix the ul class to navbar and display flex it so the items (links) will sit horizontally (main axis)<*1>.

 <*1> when i did that my navbar shrank from top and bottom, the solution will be to add a 100% height on the .navbar.
 
 I have to align the LOGO to the center of the container: display flex the class and align the items to the center will do it. (but wont do to the links)

 so:
 
 remove flexbox from .navbar.logo and place them onto .navbar .container that is our general flexbox container, then the logo and links will be centered both together. 

 remove: bulletpoints and underline.

~HEADER:

first style the .header class with background color and a general padding.

then the header main text (h1) and last the img.

IMPORTANT!: when adding flexbox to .header .container2. Only my main text, h2 and the button will flex, cause i forgot  (in HTML file) to open a <div> between "class="container2" and class "h1". close it before img element.

Also, in order to have main text, h2 and button align vertically on the page with the styling (display:flex - alignitems:center), the three elements need to be inside <div>HERE</div>. not separated by individual ones. 

~BUTTON: I played around with it properties. I also added a hover to the button, which makes it look great!.

IMPORTANT (2): I realized after scrolling down the page, that my second button in container5, has all the properties of the one in container2. So, after carefully inspecting the code, I realized that I have to prefix with .header my first button (the one in container2) so the properties will only affect this one. Leaving the other one free of properties. 
~~~~~~~~~
11/04/2022

Today i will style the container3 - that holds a subtitle and four similar items with some text under it.

the aim will be to align the items horizontally, keeping the text below the item with space between them and a large margin between the edges of the page and the so call items. 

1)first: for the subtitle, i will display flex it and justify it to the center, i will also give some top and bottom padding so it can have some space to be itself.

*Regarding subtitle: Erase it from container3 and move it above, and give the class "Subtitle". so we can display flex just the items.

2)Second: For the items, only need to be flex and justify to the center. Add gap.
Regarding the text below the items: Add align text: center.

the images will need a max-width, and regarding the text below the images, I will add some properties to it.

the images and the background of the text will have rounded edges, so i will have to apply the border-radius to the classes.
////////

PROBLEM!>: the max-width of 1200px that I added to all the containers is not working after (including)-container3-.
I inspected it with google and container3 and later have a very large margin. 

My theory: container1 and container2 have grandparents. whereas the rest lack.
somehow the properties apply to the ones with and the ones without suffer the consequences of now having margin...

Likely Solutions: 

1* have the containers unnumbered, therefore the properties will apply to all of them. but in css i will have to prefix each one of them with their respective grandparent, for them to have different attributes. 

2* number two will give a "grandparent class" to the containers without...