# quickToggle

![npm bundle size](https://img.shields.io/bundlephobia/minzip/quicktoggle)
![npm version](https://img.shields.io/npm/v/quicktoggle)

A quick and easy way to toggle things!

## Details

As my first npm package, I wanted to create a quick and easy solution to a common task we all have, togglin stuff.

## Install

From CDN: Add the following script to the end of your `<head>` section.
```<script src="https://cdn.jsdelivr.net/npm/quicktoggle" defer></script>```

From npm: Run the following command.
```npm install quicktoggle```

Include it in your script.
```import quickToggle from “quickToggle”;```

## How to use

There are two types of quickToggles at this time. Menu and accordion.

### quickToggle.Menu()

You can use the ID’s on any element but just make sure that both of them exist or you might see a console.log error.

```
<button id="togglemenu">Click me</button>
<div id="main-menu">...</div>
```

Include the following in your JS.
```quickToggle.Menu()```

### quickToggle.Accordion()

You can have an infinite amount of elements using `.accordion` in the DOM but you’ll want to make sure that only one `.toggle` exists inside in order for this to work.

```
<div class="accordion">
    <h2 class="toggle">Click me</h2>
    <div class="content">...</div>
</div>
```

Include the following in your JS.
```quickToggle.Accordion()```
