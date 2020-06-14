import React, { useState, useContext, useEffect } from 'react'
import { Beercontext } from './Statemng'
import { Timeline } from 'antd'

const Alcoholleft = () => {
  //BeerState
  const [beerslist] = useContext(Beercontext)
  const [beerCat, setBeercat] = useState('')
  const [beerCat2, setBeercat2] = useState('')

  useEffect(() => {
    if (beerslist) {
      setBeercat(beerslist.filter(beerdata => beerdata.beer_category === 'cd'))
      setBeercat2(
        beerslist.filter(beerdata => beerdata.beer_category === 'ocd')
      )
    }
  }, [beerslist])

  return (
    <div className="alcohol-left-list">
      <h3>Common Drinks</h3>
      <Timeline>
        {beerCat.length > 0 ? (
          beerCat.map(gulp => (
            <Timeline.Item>
              <div className="beer-box-v2" key={gulp.id}>
                <div className="img-block-product">
                  <img src={gulp.image_url} alt="img-beer" />
                </div>
                <div className="desc-box">
                  <span className="title-beer-v2">{gulp.name}</span>
                  <span className="Brewer-tips">
                    <strong>Brewer Tips:</strong> {gulp.brewer_tips}
                  </span>
                </div>
              </div>
            </Timeline.Item>
          ))
        ) : (
          <div className="notify-box">
            <h5> No Datalist please fill in the Drinks Category </h5>
          </div>
        )}
      </Timeline>
      <h3>Occasional Drinks</h3>
      <Timeline>
        {beerCat2.length > 0 ? (
          beerCat2.map(gulp => (
            <Timeline.Item>
              <div className="beer-box-v2" key={gulp.id}>
                <div className="img-block-product">
                  <img src={gulp.image_url} alt="img-beer" />
                </div>
                <div className="desc-box">
                  <span className="title-beer-v2">{gulp.name}</span>
                  <span className="Brewer-tips">
                    <strong>Brewer Tips:</strong> {gulp.brewer_tips}
                  </span>
                </div>
              </div>
            </Timeline.Item>
          ))
        ) : (
          <div className="notify-box">
            <h5> No Datalist please fill in the Drinks Category </h5>
          </div>
        )}
      </Timeline>
    </div>
  )
}

export default Alcoholleft
