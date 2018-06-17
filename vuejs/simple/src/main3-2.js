import Vue from 'vue'

// 1.
new Vue({
  el: '#example1',
  data: {
    ok: true
  }
});

// 2.
new Vue({
  el: '#example2',
  data: {
    type: "C"
  }
});

// 2.
var vm3 = new Vue({
  el: '#example3',
  data: {
    loginType: "username"
  }
});
window.run = function() {
  if(vm3.loginType == "username") {
    vm3.loginType = "email";
  } else {
    vm3.loginType = "username";
  }
}

var vm3 = new Vue({
  el: '#example4',
  data: {
    active: true
  }
});
