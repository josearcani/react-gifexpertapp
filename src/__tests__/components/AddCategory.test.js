import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  const func = jest.fn();
  let wrapper;
  beforeEach( () => {
    jest.clearAllMocks(); // limpia para las funciones en jest
    wrapper = shallow(<AddCategory setCategories={ func } />);
  })

  test('debe mostrar <AddCategory /> correctamente', () => {
    // const wrapper = shallow(<AddCategory />);
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de cambiar la caja de texto', () => {
    const inputTag = wrapper.find('input');
    const value = 'Hola mundo';
    // simulamos onchage
    inputTag.simulate('change', { target: { value }});
    // vemos que el el handleInputValue actualizo el inputValue en <p>
    expect(wrapper.find('p').text().trim()).toBe(value);
  })

  test('No debe de postear la información en submit', () => {
    const formTag = wrapper.find('form');
    formTag.simulate('submit', { preventDefault(){} });
    expect( func ).not.toHaveBeenCalled();
  })

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {

    const value = 'pokemon rojo';
    // simulamos un input
    wrapper.find('input').simulate('change', { target: { value }});
    // simulamos un submit, pasara la condicion de handleSubmit
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect(func).toHaveBeenCalledTimes(1); // setCategories ejecutado
    expect(func).toHaveBeenCalledWith( expect.any(Function) ); // setCategories ejecutado con una funcion
    expect(wrapper.find('input').prop('value')).toBe('');
  })

})