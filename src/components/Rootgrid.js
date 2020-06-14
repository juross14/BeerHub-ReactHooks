import React, { useState } from 'react'
import { Drawer, Button, Divider, message } from 'antd'

const Rootgrid = props => {
  const [modal, setModal] = useState({ visible: false })

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

  //inividual data
  const beerone = props.beersinfo
  //console.log(beerone)

  const MAX_LENGTH = 100
  const beerlist = props.beersprop

  return (
    <div className="Parent-grid">
      <Drawer
        title="This Beer is For You"
        width={450}
        visible={modal.visible}
        closable={false}
        onClose={onClose}
      >
        <div className="imgdrawer">
          <img src={beerone.image_url} alt="img-beer" />
        </div>
        <h3>{beerone.name}</h3>
        <p>{beerone.description}</p>
        <Divider orientation="left" plain>
          Brewer Tips
        </Divider>
        <p className="beerTips">{beerone.brewer_tips}</p>
        <Button
          className="button muted-button"
          type="primary"
          onClick={() => openMessage(props.addBeerprops(beerone))}
        >
          Bookmark
        </Button>
      </Drawer>

      {beerlist.map(gulp => (
        <div className="child-grid">
          <div className="beer-box" key={gulp.id}>
            <div className="img-block-product">
              <img src={gulp.image_url} alt="img-beer" />
            </div>
            <span className="title-beer">{gulp.name}</span>
            <span className="beer-description">
              {`${gulp.description.substring(0, MAX_LENGTH)}...`}
              <strong>Alcohol Ph:{gulp.ph}</strong>
              <Button
                className="button muted-button"
                //onClick={() => props.editprop(gulp)}
                onClick={() => showDrawer(props.editprop(gulp))}
              >
                {' '}
                Read More{' '}
              </Button>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Rootgrid
