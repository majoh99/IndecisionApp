import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

  let wrapper;

  beforeEach(()  =>{
    wrapper = shallowMount( Counter )
  })

  /* test('debe hacer match con el snapshot', () => {

    const wrapper = shallowMount( Counter )
    expect( wrapper.html() ).toMatchSnapshot()

  }) */

  test('H2 debe tener el valor por defecto "Counter"', () => {
    
    expect( wrapper.find('h2').exists() ).toBeTruthy()

    const h2Value = wrapper.find('h2').text()
    expect( h2Value ).toBe('Counter')
  })

  test('El valor por defecto debe ser 100 en el p', async() => {
    // pTags
    // const pTags = wrapper.findAll('p')
    const value = wrapper.find('[data-testid="counter"]').text()

    // expect segundo p === 100
    // expect( pTags[1].text() ).toBe('100')
    expect( value ).toBe('100')
  })

  test('Debe incrementar y decrementar el contador', async() => {
    
    const [ increaseBtn, decreaseBtn] = wrapper.findAll('button')

    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find('[data-testid="counter"]').text()

    expect( value ).toBe('101')

  })

  test('Debe establecer el valor por defecto', () => {

    const { start } = wrapper.props()

    const value = wrapper.find('[data-testid="counter"]').text()

    expect( Number(value) ).toBe( start )

  })

  test('Debe mostrar la prop title', () => {

    const title = 'Hola Mundo!!!!'

    const wrapper = shallowMount( Counter, {
      props:{
        title,
        // start: '5'
      }
    } )

    expect( wrapper.find( 'h2' ).text() ).toBe(title)
  })

})