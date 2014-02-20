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

    setInterval(this.run.bind(this), this.options.interval);

  }

  Tractile.prototype.run = function() {

    var addClass = function(classname, element) {
      var cn = element.className;
      if (cn.indexOf(classname) != -1) {
        return;
      }
      if (cn !== '') {
        classname = ' ' + classname;
      }
      element.className = cn + classname;
    };

    var removeClass = function(classname, element) {
      var cn = element.className;
      var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
      cn = cn.replace(rxp, '');
      element.className = cn;
    };

    var clear = function(klass) {
      if (!klass) {
        return;
      }
      var len = this.total;
      while (len--) {
        removeClass(klass, this.elements[len]);
      }
    }.bind(this);

    if ((this.current - 1) >= 0) {
      removeClass(this.klasses.previous, this.elements[this.current - 1]);
    }
    if ((this.current + 1) < this.total) {
      clear(this.klasses.previous);
      removeClass(this.klasses.active, this.elements[this.current]);
      addClass(this.klasses.previous, this.elements[this.current]);
      addClass(this.klasses.active, this.elements[this.current + 1]);
      this.current++;
    } else {
      this.current = 0;
      clear(this.klasses.active);
      addClass(this.klasses.previous, this.elements[this.total - 1]);
      addClass(this.klasses.active, this.elements[this.current]);
    }

  };

  // expose Tractile
  window.Tractile = Tractile;

})();
