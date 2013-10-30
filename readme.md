## JavaScript

Tractile is built, first and foremost, as a Sass plugin. However as much awesome as Sass posesses, we still need a small bit of JavaScript to kick it off.

Tractile works with or without jQuery, to make it as easy as possible for you to integrate.


### Quick start

You need to pass the parent element into Tractile and it will use each child as a slide. Simple. 

**Example HTML**

    <div class="Tractile"> <!-- Pass this in! -->
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
