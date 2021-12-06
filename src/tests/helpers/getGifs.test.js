

import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

  test('debe de traer 10 elementos', (done) => {

    getGifs('cate')
    .then(gifs => {
      expect(gifs.length).toBe(10);
      done();
    })
  })

  test('debe de regresar un arreglo vacio', async () => {
    const gifs = await getGifs(''); // []
    expect(gifs.length).toBe(0);
  })

})