import React, { useState, useEffect, useContext } from 'react'
import { Beercontext } from './Statemng'
import Rootgrid from '../components/Rootgrid'

const Rootquery = () => {
  const [beerslist, setBeerlist] = useContext(Beercontext)

  const [beers, setBeers] = useState([])
  const [currentdata, setCurrentdata] = useState([])
  const randomcount = Math.floor(Math.random() * 10) + 1

  //retrieve information
  const editRow = gulp => {
    setCurrentdata({
      id: gulp.id,
      name: gulp.name,
      description: gulp.description,
      image_url: gulp.image_url,
      brewer_tips: gulp.brewers_tips,
      alcohol_dosage: gulp.ph
    })
  }

  const addBeer = gulp => {
    gulp.beer_rate = 0
    gulp.beer_comment = ''
    gulp.beer_category = 'neutral'
    setBeerlist([...beerslist, gulp])
    console.log(beerslist)
  }

  const reloadPage = () => {
    window.location.reload()
  }

  useEffect(() => {
    const getBeers = async () => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${randomcount}&per_page=6`
      )
      const data = await response.json()
      setBeers(data)
    }
    getBeers()
  }, [beerslist])

  return (
    <section className="component-block search-beer">
      <button className="button-reload-data" onClick={() => reloadPage()}>
        refresh
      </button>
      <Rootgrid
        beersprop={beers}
        editprop={editRow}
        beersinfo={currentdata}
        addBeerprops={addBeer}
      />
    </section>
  )
}

export default Rootquery
