import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs'); // fingir la llamada y simular la data

describe('Pruebas en <GifGrid />', () => {

  const category = 'Goku';

  test('debe mostrar <GifGrid /> correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })
    const wrapper = shallow(<GifGrid category={ category } />)
    expect(wrapper).toMatchSnapshot();
  })

  // simular que ya tengo la información del useFetchGifs
  test('debe de mostrar items cuando se cargan imágenes de useFetchGifs', () => {
    // hacemos un mock
    const gifs = [{
      id: '1234biafsd',
      url: 'https://locahost/anything/cheap.jpg',
      title: 'Love fo my life'
    },
    {
      id: '1123biafsd',
      url: 'https://locahost/anything/cheap.jpg',
      title: 'Love fo my life'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })
    const wrapper = shallow(<GifGrid category={ category } />);
    // no existe el <p> de loading
    // expect(wrapper).toMatchSnapshot(); // util para ver el contenido generado
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length); // cuantos de esos componentes hay

  })



})