import React, { useState, useContext, useEffect } from 'react'
import { Drawer, Collapse, message, Rate, Popover } from 'antd'
import { Beercontext } from './Statemng'

const Beergrid = () => {
  const [modal, setModal] = useState({ visible: false })
  const { Panel } = Collapse
  const key = 'updatable'

  const openMessage = () => {
    message.loading({ content: 'Loading...', key })
    setTimeout(() => {
      message.success({ content: 'Save Beer Lists', key, duration: 2 })
    }, 1000)
  }

  const showDrawer = () => {
    setModal({
      visible: true
    })
  }

  const onClose = () => {
    setModal({
      visible: false
    })
  }

  //const { Search } = Input
  //const MAX_LENGTH = 100
  const [beerslist] = useContext(Beercontext)
  const [search, setSearch] = useState('')
  const [searchCat, setSearchCat] = useState('')
  const [FilteredDrinks, setFilteredDrinks] = useState(beerslist)

  useEffect(() => {
    if (beerslist) {
      setFilteredDrinks(
        beerslist.filter(beerdata =>
          beerdata.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    }
  }, [search, beerslist])

  useEffect(() => {
    if (beerslist) {
      setFilteredDrinks(
        beerslist.filter(beerdata => beerdata.beer_category === searchCat)
      )
    }
  }, [searchCat, beerslist])

  let Swaplist
  if (search.length > 0 || searchCat.length > 0) {
    Swaplist = FilteredDrinks
  } else {
    Swaplist = beerslist
  }

  return (
    <div className="beer-grid-feat">
      <div className="searchbar">
        <input
          className="group"
          type="text"
          placeholder="Search . . . "
          onChange={e => setSearch(e.target.value)}
        />

        <select name="category" onChange={e => setSearchCat(e.target.value)}>
          <option value="" selected>
            All
          </option>
          <option value="neutral">No Label Drinks</option>
          <option value="cd"> Common Drinks</option>
          <option value="ocd"> Occasional Drinks</option>
        </select>
      </div>

      <div className="Parent-grid">
        <Drawer
          title="This Beer is For You"
          width={450}
          visible={modal.visible}
          closable={false}
          onClose={onClose}
        >
          <p> Data Display </p>
        </Drawer>

        {Swaplist.map(gulp => (
          <div className="child-grid colbeer-2">
            <div className="beer-box" key={gulp.id}>
              <div className="img-block-product">
                <Popover
                  content={gulp.beer_comment}
                  title="How it Taste?"
                  trigger="hover"
                >
                  <img src={gulp.image_url} alt="img-beer" />
                </Popover>
              </div>

              <span className="title-beer">{gulp.name}</span>
              <span className="rate-star">
                <strong>Alcohol Ph:{gulp.alcohol_dosage}</strong> <br />
                <Rate disabled defaultValue={gulp.beer_rate} />
              </span>
              <span className="beer-description">{gulp.description}</span>
              <Collapse accordion>
                <Panel header="For Good Beer Taste Tips" key="1">
                  {gulp.brewer_tips}
                </Panel>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Beergrid
