## Tractile
### A Sass generated CSS3 slider

Tractile is a powerful Sass plugin that produces lightweight custom CSS keeping your projects bloat free!

[Go to the project page →](http://danielgrant.im/tractile/)


### Quick start

**HTML**

    <div class="Tractile">
        <div class="Tractile-slide">[img1]</div>
        <div class="Tractile-slide">[img2]</div>
        <div class="Tractile-slide">[img3]</div>
    </div>
    
**Sass** 

*Tractile-config.sass*
```
$Tractile-type: fade
$Tractile-duration: 0.5s
$Tractile-transition: ease
```

*Tractile-theme.sass*
```
.Tractile
  width: 500px
  border: 3px solid pink
```

**jQuery**

    Tractile($('.Tractile'), {
      interval: 5000
    });
  
  
### Config options

 * **$Tractile-type**: `none, all, fade, slideLeft, slideRight, slideUp, slideDown`

    Use the `all` option when you have multiple sliders that require different animations. Simply add a class with the name of the desired transition to each slider: 

    `<div class="Tractile slideLeft"></div>`

    When using `all`, if you don't include an animation class, fade will be used.


 * **$Tractile-duration**: `X.Ys, Zms`

    Specifies the duration of the transition.

 * **$Tractile-transition**: `ease, ease-in, ease-in-out, linear, etc.`

    Specifies the transition timing function to be used.



  
### Starting the slider

Although Tractile is a Sass plugin we still need a small bit of JavaScript to keep the slider ticking over by applying state classes to the slides.


```
Tractile($('.Tractile'), {
  interval: 5000
});
```

Tractile also works without jQuery. Instantiating multiple Tractile sliders:
  
    Tractile(document.querySelectorAll('.Tractile'), {
      interval: 5000
    });
  

Or, we can just pass one element in, and use the default slide interval of 2 seconds.

    Tractile(document.querySelector('.Tractile'));
    
    
### Dependencies

Sass is used to generate the plugin CSS.

If you're new to Sass head over to the [http://sass-lang.com/install](Sass install guide).


### Prefix free?

Tractile does not include any vendor prefixes in source. Possible ways to add vendor prefixes include:

 * prefixfree.js (included in package)
 * [Auto Prefixer](https://github.com/ai/autoprefixer)
 
 
### Authors

Tractile was made by [Daniel Grant](https://twitter.com/danieljohngrant) (Sass) and [Ben Howdle](https://twitter.com/benhowdle) (JavaScript)
