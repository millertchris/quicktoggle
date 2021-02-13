# quickToggle

A quick and easy way to toggle things!

## Details

As my first npm package, I wanted to created a quick and easy solution to a common task we’ve all had to tackle, togglin shtuff.

Here’s how this work.

First you’ll want to run `npm install quicktoggle` and import it.

`import quickToggle from “quickToggle”;`

## quickToggle.Menu()

Requires the following:

```
<button id="togglemenu">Click me</button>
<div id="main-menu">...</div>
```

You can use the ID’s on any element but just make sure that both of them exist or you might see a console.log error.

## quickToggle.Accordion()

Requires the following:

```
<div class="accordion">
    <h2 class="toggle">Click me</h2>
    <div class="content">...</div>
</div>
```

You can have an infinite amount of elements using `.accordion` in the DOM but you’ll want to make sure that only one `.toggle` exists inside in order for this to work.
