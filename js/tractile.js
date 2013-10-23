(function() {

  function Tractile(elements, options) {

    // doing this allows the developer to omit the `new` keyword from their calls to Tractile
    if (!(this instanceof Tractile)) {
      return new Tractile(elements, options);
    }

    if (!elements) {
      throw new Error('No DOM elements passed into Tractile');
    }

    if (elements.length < 2) {
      return;
    }

    var userOptions = options || {};

    var defaults = {
      interval: 2000
    };

    this.options = {};

    for (var x in defaults) {
      this.options[x] = userOptions[x] || defaults[x];
    }

    this.current = 0;

    this.elements = elements;

    this.total = this.elements.length;

    this.klasses = {
      active: 'is-active',
      previous: 'is-previous'
    };

    this.elements[0].classList.add(this.klasses.active);

    setInterval(this.run.bind(this), this.options.interval);

  }

  Tractile.prototype.run = function() {

    var clear = function(klass) {
      if (!klass) {
        return;
      }
      var len = this.total;
      while (len--) {
        this.elements[len].classList.remove(klass);
      }
    }.bind(this);

    if ((this.current - 1) >= 0) {
      this.elements[this.current - 1].classList.remove(this.klasses.previous);
    }
    if ((this.current + 1) < this.total) {
      clear(this.klasses.previous);
      this.elements[this.current].classList.remove(this.klasses.active);
      this.elements[this.current].classList.add(this.klasses.previous);
      this.elements[this.current + 1].classList.add(this.klasses.active);
      this.current++;
    } else {
      this.current = 0;
      clear(this.klasses.active);
      this.elements[this.total - 1].classList.add(this.klasses.previous);
      this.elements[this.current].classList.add(this.klasses.active);
    }

  };

  // expose Tractile
  window.Tractile = Tractile;

})();