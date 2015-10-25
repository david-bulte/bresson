# bresson

Does the world need another date picker? Probably not. We have all used [JQuery][jquery]'s' and
if you're operating in angular territory, chances are you're familiar with the ones from
[angular ui][ui] or [angularstrap][strap].

Nothing's wrong with those, but lately, I tend to use HTML5's date input. It's simple to
use, looks good (also on mobile) and frankly, gives me a lot less configuration troubles than some of the 
other options (working with dates can be such a pain in webland). Unfortunately not all browsers 
support this element. 

Using one of the aforementioned date pickers as a fallback could be an option, but then I have to do
the extra configuration, styling etc... anyway, and also I don't like it when my fallback solution is 
looking fancier then my default sollution.

Hence this simple, minimalistic date input, using vanilla select elements to pick days, months and years. 

Here's what it looks like:

![screenshot](./bresson-screenshot.png)

I told you it was simple :)

## Getting Started

Download the [production version][min] or the [development version][max].

In your index.html:

```html
<script src="angular.js"></script>
<script src="dist/bresson.min.js"></script>
```
In your template page:

```html
<bresson-datepicker model-date="ctrl.currentDate"/>
```

Done.

## Documentation

In its simplest form, you use it like so:

```html
<bresson-datepicker model-date="ctrl.currentDate"/>
```

By default, the 'years' select will offer 100 years, 50 before and 50 after the given modelDate. You can change this
by specifying a 'fromYear' and 'toYear' attribute:

```html
<bresson-datepicker model-date="ctrl.currentDate" 
                    from-year="2000" 
                    to-year="2100"/>
```

Note that it's not possible to specify only 1 of these attributes. If you specify one, you have to specify the 
other as well.

The order of the select boxes, i.e. of the day and month selects, is defined by the locale dateformat settings. If 
you'd like to override this, you can pass the 'dayBeforeMonth' attribute:

```html
<bresson-datepicker model-date="ctrl.currentDate" 
                    day-before-month="true"/>
```

## Examples

<p data-height="213" data-theme-id="0" data-slug-hash="WQzRaa" data-default-tab="result" data-user="david_bulte" class='codepen'>See the Pen <a href='http://codepen.io/david_bulte/pen/WQzRaa/'>Using bresson datepicker</a> by David (<a href='http://codepen.io/david_bulte'>@david_bulte</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Robert Bresson

![Robert Bresson](https://upload.wikimedia.org/wikipedia/commons/1/19/Robertbressonportrait.png)

[Robert Bresson][bresson] was a French film maker, a most notic member of the Nouvelle Vague. His master piece,
[Pickpocket][pickpocket] is a minimalistic account of 
Ken Loach, Dogma

[min]: https://rawgit.com/david-bulte/bresson/master/dist/bresson.min.js
[max]: https://rawgit.com/david-bulte/bresson/master/dist/bresson.js
[jquery]:https://jqueryui.com/datepicker/
[ui]:https://github.com/angular-ui/bootstrap/tree/master/src/datepicker
[strap]:http://mgcrea.github.io/angular-strap/#/datepickers
[bresson]:https://upload.wikimedia.org/wikipedia/commons/1/19/Robertbressonportrait.png
[pickpocket]:https://en.wikipedia.org/wiki/Pickpocket_(film)
