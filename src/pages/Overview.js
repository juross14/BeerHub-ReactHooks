import React from 'react'
import { Row, Col } from 'antd'
import Tablegrid from '../components/Tblbeer'
import Tablelist from '../components/Tblistreview'
const Overview = () => {
  return (
    <section className="sec-root content-holder">
      <h2>Beer Bookmark</h2>
      <div className="page-block">
        <Row>
          <Col span={6}>
            <div className="code-box">
              <Tablelist />
            </div>
          </Col>
          <Col span={18}>
            <div className="code-box">
              <Tablegrid />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Overview
