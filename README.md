# Welcome to Jasna JS
Jasna JS ist eine JavaScript Framework, welches deine HTML Dokumente übersichtlicher und deine Webseite schneller macht.

## Problem
When building a website the HTML file can get heavily nested quite fast. I wanted to split up the website into multiple HTML files, so I could work on each component separately without the file getting too confusing to look at. Then I would simply put every component together in one clearly structured HTML file.

But as I didn't want to learn a complex JS framework with tons of features that would slow down my website, I decided to make my own lightweight and robust framework. And in its current version, the minified version is not even half a kilobyte!

## Usage

### component
    <component src="URL"></component>

### live component
These components will check the source every MS milliseconds. If the content has changed, the component will be updated.

    <component src="URL" class="refresh MS"></component>

### component priority

Every component without the priority attribute will be assigned a priority of 0. Components will get loaded after their assigned priority. This way you can load the GUI before different background Scripts.

    <component src="URL" priority="X"></component>
