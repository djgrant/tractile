(function() {
  'use strict';

  function Tractile(node, options) {

    if (!(this instanceof Tractile)) {
      if (node.length) {
        Array.prototype.forEach.call(node, function(n) {
          new Tractile(n, options);
        });
      } else {
        new Tractile(node, options);
      }
    } else {

      var userOptions = options || {};

      var defaults = {
        interval: 2000,
        progressContainer: false
      };

      this.options = {};

      for (var x in defaults) {
        this.options[x] = userOptions[x] || defaults[x];
      }

      node = (node instanceof jQuery) ? node[0] : node;

      var progressContainer  = this.options.progressContainer;
      this.progressContainer = (progressContainer instanceof jQuery) ? progressContainer[0] : progressContainer;

      if (!node.children || node.children.length < 2) {
        return;
      }

      this.current = 0;

      this.elements = node.children;

      this.total = this.elements.length;

      if (this.progressContainer) {
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var i = 0;
        while(i < this.total) {
          if (i === 0) {
            ul.appendChild(addClass('is-active', li.cloneNode()));
          } else {
            ul.appendChild(li.cloneNode());
          }
          i++;
        }
        this.progressContainer.appendChild(ul);
        this.progressElements = $(this.progressContainer).find('ul')[0].children;
      }

      setInterval(this.run.bind(this), this.options.interval);
    }
  }

  Tractile.prototype.run = function() {

    var incrementClasses = function(elements) {
      removeClasses('is-previous', elements);
      removeClass('is-active', elements[this.current]);
      addClass('is-previous', elements[this.current]);
      addClass('is-active', elements[this.current + 1]);
    }.bind(this);

    var resetClasses = function(elements) {
      removeClasses('is-active', elements);
      addClass('is-previous', elements[this.total - 1]);
      addClass('is-active', elements[this.current]);
    }.bind(this);

    if ((this.current - 1) >= 0) {
      removeClass('is-previous', this.elements[this.current - 1]);
      if(this.progressContainer) {
        removeClass('is-previous', this.progressElements[this.current - 1]);
      }
    }
    if ((this.current + 1) < this.total) {
      incrementClasses(this.elements);
      if(this.progressContainer) {
        incrementClasses(this.progressElements);
      }
      this.current++;
    } else {
      this.current = 0;
      resetClasses(this.elements);
      if(this.progressContainer) {
        resetClasses(this.progressElements);
      }
    }

  };

  var addClass = function(classname, element) {
    var cn = element.className;
    if (cn.indexOf(classname) !== -1) {
      return;
    }
    if (cn !== '') {
      classname = ' ' + classname;
    }
    element.className = cn + classname;
    return element;
  };

  var removeClass = function(classname, element) {
    var cn = element.className;
    var rxp = new RegExp('\\s?\\b' + classname + '\\b', 'g');
    cn = cn.replace(rxp, '');
    element.className = cn;
    return element;
  };

  var removeClasses = function(classname, nodelist) {
    if (!classname) {
      return;
    }
    var len = nodelist.length;
    while (len--) {
      removeClass(classname, nodelist[len]);
    }
    return nodelist;
  };

  window.Tractile = Tractile;

})();
