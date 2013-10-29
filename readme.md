## JavaScript

Tractile is built, as foremost, a Sass plugin. However as much awesome as Sass posesses, we still need a small bit of JavaScript to kick it off.

Tractile works with or without jQuery, to make it as easy as possible for you to integrate.

You need to pass the parent element into Tractile and it will each child as a slide. Simple.

So we can use jQuery:

    Tractile($('.Tractile'), {
      interval: 5000
    });
  
Or pass it multiple elements with `document.querySelectorAll` which will instantiate multiple Tractile sliders.
  
    Tractile(document.querySelectorAll('.Tractile'), {
      interval: 5000
    });
  

Or, we can just pass on element in, and use the default slide interval as 2 seconds...

    Tractile(document.querySelector('.Tractile'));
