
# Welcome to Jasna JS
Jasna JS is a JavaScript framework with which you can make your HTML documents more structured and clearer.
The best thing about it: the minified JS version is only 469 bytes!

## Problem
When building a website the HTML file can get heavily nested quite fast. I wanted to split up the website into multiple HTML files, so I could work on each component separately without the file getting too confusing to look at. Then I would simply put every component together in one clearly structured HTML file.

But as I didn't want to learn a complex JS framework with tons of features that would slow down my website, I decided to make my own lightweight and robust framework. In its current version, the minified version is not even half a kilobyte!

## Usage
### Script Tag
Include the script at the bottom of your HTML document.

    <script src="https://cdn.remboldt.eu/jasna.min.js"></script>

### component
This will pull the contents of `URL` and place them inside the `<component>` Tag.

    <component src="URL"></component>

### live component
These components will check the source every `MS` milliseconds. If the content has changed, the component will be updated. If `MS` is not set, it will get a standard value of 2000.

    <component src="URL" class="refresh MS"></component>
