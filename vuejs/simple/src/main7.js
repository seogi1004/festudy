import Vue from 'vue'

window.vm1 = new Vue({
  el: '#app1',
  data: {
    message: "hihi"
  }
})

window.vm2 = new Vue({
    el: '#app2',
    data: {
        message: "hihi"
    }
})

window.vm3 = new Vue({
    el: '#app3',
    data: {
        checked: true
    }
})

// 체크박스: value 속성 값에 매핑 된다. (배열)
window.vm4 = new Vue({
    el: '#app4',
    data: {
        checkedNames: [ "Jack", "Mike" ]
    }
})


// 라디오박스: value 속성 값에 매핑 된다.
window.vm5 = new Vue({
    el: '#app5',
    data: {
        picked: "Two"
    }
})

// 셀렉트박스, value 또는 innerText에 매핑 된다.
window.vm6 = new Vue({
    el: '#app6',
    data: {
        selected: "C"
    }
})

// 셀렉트박스_멀티, value 또는 innerText에 매핑 된다.
window.vm7 = new Vue({
    el: '#app7',
    data: {
        selected: [ "cc" ]
    }
})

// 셀렉트박스(멀티), value 또는 innerText에 매핑 된다.
window.vm8 = new Vue({
    el: '#app8',
    data: {
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ],
        selected: "B"
    }
})

// 수식어: lazy
window.vm9 = new Vue({
    el: '#app9',
    data: {
        msg: "HIHIHB"
    }
})

// 수식어: lazy
window.vm10 = new Vue({
    el: '#app10',
    data: {
        age: 33
    }
})

// 수식어: trim
window.vm11 = new Vue({
    el: '#app11',
    data: {
        msg: "HI       HIHB"
    }
})