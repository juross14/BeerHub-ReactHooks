import React from 'react'
import { Row, Col } from 'antd'
import Alcoholhead from '../components/Alchlhead'
import Alcoholright from '../components/Alchright'
import Alcoholleft from '../components/Alchlleft'

const Favorites = () => {
  return (
    <section className="sec-root content-holder">
      <div className="stat-head">
        <h2> Alcohol Rate Up</h2>
      </div>
      <Row>
        <Col span={24}>
          <div className="code-box">
            <Alcoholhead />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="code-box">
            <Alcoholleft />
          </div>
        </Col>
        <Col span={12}>
          <div className="code-box">
            <Alcoholright />
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Favorites
