import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

// react-hooks-testing-library.com

describe('Pruebas en el hook useFetchGifs', () => {

  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Goku'));
    const { data, loading } = result.current;
    await waitForNextUpdate(); // leer la documentación
    // const { data, loading } =  useFetchGifs(category);
    // console.log(data, loading)
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })

  test('debe de retornar un arreglo de img y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Goku'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })

})