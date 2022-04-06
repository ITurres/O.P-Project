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

IMPORTANT!: when adding flexbox to .header .container2. Only my main text, h2 and the button will flex, cause i forgot to open a <div> between "class="container2" and class "h1". close it before img element.