import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

  test('debe mostrar <GifExpertApp /> correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();

  });

  test('debe de mostrar una lista de categorias', () => {
    // si tenemos 2 categorias deberiamos tener dos GifGrid
    // no es posible añadir valores al useState directamente, por medio de defaultCategories por ahora

    const categories = ['Goku', 'Rick y Morty'];

    const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  })

})