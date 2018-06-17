import $ from 'jquery'

var Vue = function(obj) {
  let self = this;
  let $el = this.$el = $(obj.el);

  let keys = Object.keys(obj.data);
  let tpl = this.$el.html();

  // 초기 데이터 세팅
  for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    this[key] = obj.data[key];
  }

  this.$compute = function() {
    let names = Object.keys(obj.computed);

    for(let i = 0; i < names.length; i++) {
      let name = names[i];
      let func = obj.computed[name];

      if(typeof(func) == "function") {
        self[name] = func.call(self);
        keys.push(name);
      }
    }
  }

  this.$render = function() {
    let newTpl = "" + tpl;

    for(let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = self[key];

      newTpl = newTpl.replace("{"+key+"}", value);
    }

    $el.html(newTpl)
  }

  this.$compute();
  this.$render();

  return new Proxy(this, {
    set: function (target, key, value, receiver) {
      target[key] = value;

      target.$compute();
      target.$render();

      return Reflect.set(target, key, value, receiver);
    }
  });
}

$(function() {
  window.app = new Vue({
    el: '#app',
    data: {
      message: 'Hello',
      abc: 'hihi'
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    }
  })

  $("#btn_app").on("click", function(e) {
    window.app.message = "안녕하세요"
  });
});
