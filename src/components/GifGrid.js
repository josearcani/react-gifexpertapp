import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="card-grid animate__animated animate__fadeInDown">{ category }</h3>
      { loading && <p className="animate__animated animate__pulse animate__infinite">Cargando...</p> }
      <div className="card-grid animate__animated animate__fadeIn">
        { images.map( img  => (
            <GifGridItem
              key={ img.id }
              { ...img } />
          ))
        } 
      </div>
    </>
  )
}

export default GifGrid;