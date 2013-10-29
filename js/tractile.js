(function() {

  function Tractile(node, options) {

    // doing this allows the developer to omit the `new` keyword from their calls to Tractile
    if (!(this instanceof Tractile)) {
      if (node.length) {
        Array.prototype.forEach.call(node, function(n) {
          return new Tractile(n, options);
        });
      } else {
        return new Tractile(node, options);
      }
    }

    if (this === window) {
      return;
    }

    node = (node instanceof jQuery) ? node[0] : node;

    if (!node.children || node.children.length < 2) {
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

    this.elements = node.children;

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