import { shallowMount } from '@vue/test-utils'
import Hello from '../Hello.vue'

describe('Hello.vue', () => {
    test('renders props.name when passed', () => {
        const text = 'Hello World!!!!!'
        const wrapper = shallowMount(Hello, {
            propsData: {
                name: 'World',
                initialEnthusiasm: 5
            }
        })
        expect(wrapper.text()).toMatch(text)
    })
})