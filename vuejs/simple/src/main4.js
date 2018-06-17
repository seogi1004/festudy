import Vue from 'vue'

window.vm1 = new Vue({
  el: '#app1',
  data: {
    message: '안녕하세요',
    ok: true
  }
});

window.vm2 = new Vue({
  el: '#app2',
  data: {
    type: 'B'
  }
});

window.vm3 = new Vue({
  el: '#app3',
  data: {
    loginType: 'username'
  }
});

window.vm4 = new Vue({
  el: "#app4",
  data: {
    ok: true
  }
})
