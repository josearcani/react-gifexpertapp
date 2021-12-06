import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  let wrapper;

  const img = {
    url: 'https://localhost/lago.jpg',
    title: 'Dragon ball',
    id: 'moaen123ojger1',
  }

  beforeEach( () => {
    wrapper = shallow(<GifGridItem key={ img.id } { ...img } />);
  })

  test('debe mostrar <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe title en el parrafo <p>', () => {
    const p = wrapper.find('p').text().trim();
    expect(p).toBe(img.title);
  })

  test('debe de tener la imgaen igual al url y alt de los props', () => {
    const imgTag = wrapper.find('img').props();
    // console.log(imgTag.html()); // <img src="https://localhost/lago.jpg" alt="Dragon ball"/>
    // console.log(imgTag.props()); // { src: 'https://localhost/lago.jpg', alt: 'Dragon ball' }
    // console.log(imgTag.prop('src')); // 'https://localhost/lago.jpg'
    expect(imgTag.src).toBe(img.url);
    expect(imgTag.alt).toBe(img.title);

  })

  test('debe de tener animate__fadeIn', () => {
    const divClass = wrapper.find('div').prop('className'); // classnames and its children
    // console.log(divClass); // card animate__animated animate__fadeIn
    expect(divClass.includes('animate__fadeIn')).toBe(true);
  })

})