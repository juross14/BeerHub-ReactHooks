import React, { useState, useContext } from 'react'
import { Beercontext } from './Statemng'
import { List, Avatar, Button, Modal, message, Rate } from 'antd'

const Tablelist = () => {
  const [beerslist, setBeerlist] = useContext(Beercontext)
  const [currentbeerslist, setcurrentBeerlist] = useState([])
  //const [favbeerslist, setfavBeerlist] = useState([])

  //console.log(beerslist)
  const data = beerslist

  const delBeer = id => {
    setBeerlist(beerslist.filter(gulp => gulp.id !== id))
  }

  // const addBeer = item => {
  //   item.beer = 'this will be on Table'
  //   setfavBeerlist([...favbeerslist, item])
  //   console.log(favbeerslist)
  // }

  const updateBeer = (id, updatedBeer) => {
    updatedBeer.beer_comment = ratedata.comment
    updatedBeer.beer_rate = ratedata.value
    if (ratedata.category) {
      updatedBeer.beer_category = ratedata.category
    } else {
      updatedBeer.beer_category = 'neutral'
    }

    setBeerlist(beerslist.map(beer => (beer.id === id ? updatedBeer : beer)))
    setRatedata({ value: 0, comment: '' })
    //console.log(beerslist)
  }

  //retrieve information
  const editBeer = item => {
    setcurrentBeerlist({
      id: item.id,
      name: item.name,
      description: item.description,
      brewer_tips: item.brewer_tips,
      image_url: item.image_url,
      alcohol_dosage: item.alcohol_dosage
    })
  }

  const warning = () => {
    message.warning('Remove Beers !!!')
  }

  const [modaldata, setModaldata] = useState(false)

  const key = 'updatable'

  const openMessage = () => {
    message.loading({ content: 'Loading...', key })
    setTimeout(() => {
      message.success({ content: 'Done Rated Beers', key, duration: 2 })
    }, 1000)
  }

  const showModal = () => {
    setModaldata(true)
  }

  const handleCancel = e => {
    setModaldata(false)
  }

  const handleOk = e => {
    setModaldata(false)
    openMessage(updateBeer(currentbeerslist.id, currentbeerslist))
  }

  const [ratedata, setRatedata] = useState({
    value: 0,
    comment: '',
    category: 'neutral'
  })
  const handleChange = value => {
    setRatedata({ value })
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setRatedata({ ...ratedata, [name]: value })
    console.log(ratedata)
  }

  return (
    <div className="tablebeer-list">
      <Modal
        title="Beer Habits"
        visible={modaldata}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <span className="img-holder">
          <img src={currentbeerslist.image_url} alt="img holder" />
        </span>
        <strong>{currentbeerslist.name}</strong>
        <p>{currentbeerslist.description}</p>
        <p>
          <Rate onChange={handleChange} value={ratedata.value} />
        </p>
        <div className="select-type">
          <select
            name="category"
            value={ratedata.category}
            onChange={e =>
              setRatedata({ ...ratedata, category: e.target.value })
            }
          >
            <option value="neutral"> No Label Drinks</option>
            <option value="cd"> Common Drinks</option>
            <option value="ocd"> Occasional Drinks</option>
          </select>
        </div>
        <div className="textcomment">
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={ratedata.comment}
            onChange={handleInputChange}
          />
        </div>
      </Modal>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image_url} />}
              title={item.name}
              description={`Alcohol Dosage: ${item.alcohol_dosage}`}
            />
            <Rate disabled value={item.beer_rate} />
            <div className="listbtn">
              <Button
                type="primary"
                className="button muted-button"
                onClick={() => showModal(editBeer(item))}
              >
                Rate It..
              </Button>

              <Button
                danger
                className="del-btn button muted-button"
                onClick={() => warning(delBeer(item.id))}
              >
                Remove
              </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default Tablelist
