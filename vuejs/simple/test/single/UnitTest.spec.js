import Vue from 'vue';
import UnitTest from '../../src/single/UnitTest.vue'

// 참고 : https://vue-loader-v14.vuejs.org/kr/workflow/testing.html
// Jasmine 2.0 테스트는 다음과 같습니다.
// 원하는 테스트 러너 / 테스트 라이브러리를 사용하십시오
describe('MyComponent', () => {
    // 원시 컴포넌트 옵션을 검사합니다.
    it('has a created hook', () => {
        expect(typeof UnitTest.created).toBe('function')
    })

    // 원시 컴포넌트 옵션에서 함수 결과를 테스트합니다.
    it('sets the correct default data', () => {
        expect(typeof UnitTest.data).toBe('function')
        const defaultData = UnitTest.data()
        expect(defaultData.message).toBe('hello!')
    })

    // 마운트 할 때 컴포넌트 인스턴스를 검사합니다.
    it('correctly sets the message when created', () => {
        const vm = new Vue(UnitTest).$mount()
        expect(vm.message).toBe('bye!')
    })

    // 인스턴스를 마운트하고 출력된 결과를 검사합니다.
    it('renders the correct message', () => {
        const Constructor = Vue.extend(UnitTest)
        const vm = new Constructor().$mount()
        expect(vm.$el.textContent).toBe('bye!')
    })
})