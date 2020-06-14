import React from 'react'
import Rootquery from '../components/Rootquery'
import { Row, Col, Collapse, Alert } from 'antd'

const { Panel } = Collapse

const Root = () => {
  return (
    <section className="sec-root content-holder">
      <h2> Beer Hub</h2>
      <div className="page-block">
        <Row>
          <Col span={24}>
            <div className="code-box">
              <Rootquery />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="code-box">
              <h3>Beer Hacks</h3>
              <Collapse accordion>
                <Panel header="Beer can help protect your heart." key="1">
                  Studies suggest moderate beer drinking* may make you less
                  likely than those who don't drink to suffer from hearts
                  attacks, strokes or heart disease. In fact, studies evaluating
                  the relative benefits of wine versus beer versus spirits
                  suggest that moderate consumption of any alcoholic beverage is
                  associated with lower rates of cardiovascular disease. New
                  England Journal of Medicine
                </Panel>
                <Panel header="Beer helps prevent kidney stones." key="2">
                  Drinking beer could help reduce your risk of developing kidney
                  stones. According to a recent study, men and women who
                  reported drinking a moderate amount* of beer reduced their
                  risk of developing a stone by 41 percent. Beers that contain a
                  lot of hops -- for example, pale ales -- are rich in kidney
                  health-promoting phytochemicals.
                </Panel>
                <Panel header="Beer lowers bad cholesterol." key="3">
                  Due to its high silicon content, beer may help to build
                  stronger bones. Dietary silicon in the soluble form of
                  orthosilicic acid (OSA) may be important for the growth and
                  development of bone and connective tissue and help reduce the
                  risk of osteoporosis, a bone-thinning disease. National
                  Institutes of Health
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col span={12}>
            <div className="code-box">
              <Alert
                message="Hi, Guest"
                description="Welcome to my Beer Hub you can browse and explore different types of beer"
                type="info"
                showIcon
              />
              <Alert
                message="Explore and Enjoy"
                description="This App will Guide you to the next level beer hopping."
                type="success"
                showIcon
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Root
