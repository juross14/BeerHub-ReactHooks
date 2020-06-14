import React, { useState, useContext, useEffect } from 'react'
import { Beercontext } from './Statemng'
import { Statistic, Row, Col } from 'antd'
import {
  DeleteOutlined,
  UnorderedListOutlined,
  DotChartOutlined,
  TrophyOutlined
} from '@ant-design/icons'

const Alcoholhead = () => {
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
    <div className="alcohol-head">
      <Row>
        <Col span={6}>
          <Statistic
            title="All Beers"
            value={beerslist.length}
            valueStyle={{ color: '#1890ff' }}
            prefix={<DeleteOutlined />}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="No Label Drinks"
            value={beerslist.length}
            valueStyle={{ color: '#12c4a1' }}
            prefix={<UnorderedListOutlined />}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Common Drinks"
            value={beerCat.length}
            valueStyle={{ color: '#1890ff' }}
            prefix={<DotChartOutlined />}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Occasional Drinks"
            value={beerCat2.length}
            valueStyle={{ color: '#12c4a1' }}
            prefix={<TrophyOutlined />}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Alcoholhead
