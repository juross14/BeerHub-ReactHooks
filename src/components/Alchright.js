import React, { useState, useContext, useEffect } from 'react'
import { Beercontext } from './Statemng'
import { Carousel, Rate } from 'antd'

const Alcoholright = () => {
  //BeerState
  const [beerslist] = useContext(Beercontext)

  return (
    <div className="alcohol-right-carousel">
      <h3>Recent Beers</h3>
      <Carousel autoplay effect="fade">
        {beerslist.map(gulp => (
          <div>
            <div className="beer-box" key={gulp.id}>
              <div className="img-block-product">
                <img src={gulp.image_url} alt="img-beer" />
              </div>
              <span className="title-beer">{gulp.name}</span>
              <span className="rate-star">
                <strong>Alcohol Ph:{gulp.alcohol_dosage}</strong> <br />
                <Rate disabled defaultValue={gulp.beer_rate} />
              </span>
              <span className="Brewer-tips">
                <strong>Brewer Tips:</strong> {gulp.brewer_tips}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Alcoholright
