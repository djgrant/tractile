## Tractile
### A Sass powered responsive slider

[Go to the project page →](http://djgrant.github.io/tractile/)


### Quick start

**Example HTML**

    <div class="Tractile">
        <div class="Tractile-slide">Hi</div>
        <div class="Tractile-slide">there</div>
        <div class="Tractile-slide">Sassy</div>
    </div>

**Example jQuery**

    Tractile($('.Tractile'), {
      interval: 5000
    });
  
  
  
### More examples

Alternatively you can pass in multiple elements with `document.querySelectorAll` which will instantiate multiple Tractile sliders.
  
    Tractile(document.querySelectorAll('.Tractile'), {
      interval: 5000
    });
  

Or, we can just pass the element in, and use the default slide interval of 2 seconds...

    Tractile(document.querySelector('.Tractile'));
    
    
### Under the hood

**Sass**

Tractile is structured as a Sass plugin with a `config` partial for you to pass your settings into and a `theme` partial that allows you to style the slider in whatever way you want. The `plugin` partial, which handles all the animation logic, you don't need to worry about editing!



**JavaScript**

Tractile is built, first and foremost, as a Sass plugin. However as much awesome as Sass posesses, we still need a small bit of JavaScript to keep the slider ticking over by applying state classes to the slides.

Tractile works with or without jQuery, to make it as easy as possible for you to integrate.
