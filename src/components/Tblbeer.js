import React, { useContext } from 'react'
import { Table } from 'antd'
import { Beercontext } from './Statemng'

const Tablebeer = () => {
  const [beerslist] = useContext(Beercontext)
  console.log(beerslist)

  const data = beerslist
  const columns = [
    {
      title: 'Beer Name',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left'
    },
    { title: 'Beer Description', dataIndex: 'description', key: '1' },
    { title: 'Brew Tips', dataIndex: 'brewer_tips', key: '2' }
  ]

  return (
    <div className="tablebeer-section">
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </div>
  )
}

export default Tablebeer
