import Vue from 'vue'

window.vm1 = new Vue({
  el: '#app1',
  data: {
    message: '안녕하세요',
    ok: false
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
});

// 1. 태그의 속성에 if 문을 넣을 수 있다는 특징.
// 블록 형태로 사용하기 위해서는 template 태그르 사용해야 함.

// 2. if문으로 분기되는 내부 구조가 궁금.
// 아마 동일한 타입의 태그라면 재사용하는 것 같음. remove and insert하지 않는듯. 그냥 업데이트 정도?
// 그래서 고유 key를 넣어야만 재사용하지 않는 것 같음
// 솔직히 좋은 방법은 아닌거 같음. 개발할 때 혼란을 야기할 수 있음.
