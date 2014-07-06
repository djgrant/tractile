## Tractile
### A Sass generated CSS3 slider

Tractile is a powerful Sass plugin that produces lightweight custom CSS keeping your projects bloat free!

[Go to the project page â†’](http://danielgrant.im/tractile/)


### Quick starts


---


**HTML**

    <div class="tractile">
        <div class="tractile-slide">[img1]</div>
        <div class="tractile-slide">[img2]</div>
        <div class="tractile-slide">[img3]</div>
    </div>
    
**Sass** 

*tractile-config.sass*
```
$tractile-type: fade
$tractile-duration: 0.5s
$tractile-transition: ease
```

*tractile-theme.sass*
```
.tractile
  width: 500px
  border: 3px solid pink
```

**jQuery**

    Tractile($('.tractile'), {
      interval: 5000
    });
  
  
### Config options

 * **$tractile-type**: `none, all, fade, slideLeft, slideRight, slideUp, slideDown`

    Use the `all` option when you have multiple sliders that require different animations. Simply add a class with the name of the desired transition to each slider: 

    `<div class="tractile slideLeft"></div>`

    When using `all`, if you don't include an animation class, fade will be used.


 * **$tractile-duration**: `X.Ys, Zms`

    Specifies the duration of the transition.

 * **$tractile-transition**: `ease, ease-in, ease-in-out, linear, etc.`

    Specifies the transition timing function to be used.



  
### Starting the slider

Although Tractile is a Sass plugin we still need a small bit of JavaScript to keep the slider ticking over by applying state classes to the slides.


```
Tractile($('.tractile'), {
  interval: 5000
});
```

Tractile also works without jQuery. Instantiating multiple Tractile sliders:
  
    Tractile(document.querySelectorAll('.tractile'), {
      interval: 5000
    });
  

Or, we can just pass one element in, and use the default slide interval of 2 seconds.

    Tractile(document.querySelector('.tractile'));
    
    
### Dependencies

Sass is used to generate the plugin CSS.

If you're new to Sass head over to the [http://sass-lang.com/install](Sass install guide).


### Prefix free?

Tractile does not include any vendor prefixes in source. Possible ways to add vendor prefixes include:

 * prefixfree.js (included in package)
 * [Auto Prefixer](https://github.com/ai/autoprefixer)
 
 
### Authors

Tractile was made by [Daniel Grant](https://twitter.com/danieljohngrant) (Sass) and [Ben Howdle](https://twitter.com/benhowdle) (JavaScript)
