import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'

import axios from 'axios'
import Moment from 'moment'
import { Table, Form, Input } from 'antd'
import Swal from 'sweetalert2'

import './timeTableModal.scoped.css'
import Item from 'antd/lib/list/Item'

export default function CusPickupReqModal(props) {

  const [validated, setValidated] = useState(false)
  const [tdata, setTdata] = useState({ ...props.viewDetils.timeTable })
  const [dataSource, setDataSource] = useState([])
  const [editingRow, setEditingRow] = useState(null)
  const [antform] = Form.useForm()

  useEffect(() => {
    // props.getTransportRoute()
    setDataSource(props.viewDetils?.timeTable?.tableRows)
    console.log(props)
    console.log(props.viewDetils?.timeTable?.tableRows)
  }, [props])

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios
      .patch(`http://localhost:3001/api/timeTable/${props.viewDetils.timeTable._id}`, dataSource)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Request successfully updated',
          showConfirmButton: false,
          timer: 2000,
        })

        props.getTransportRoute()
        props.detilsModalClose()
        setValidated(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleCancel = async (e) => {
    Swal.fire({
      title: 'Are you sure cancel?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cansel it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        props.detilsModalClose()
      }
    })
  }
  const columns = [
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      render: (text, record) => {
        if (editingRow == record._id) {
          return (
            <Form.Item name="startTime">
              <Input />
            </Form.Item>
          )
        } else {
          return <p>{text}</p>
        }
      },
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      render: (text, record) => {
        if (editingRow == record._id) {
          return (
            <Form.Item name="endTime">
              <Input />
            </Form.Item>
          )
        } else {
          return <p>{text}</p>
        }
      },
    },
    {
      title: 'Start Location',
      dataIndex: 'startLocation',
      render: (text, record) => {
        if (editingRow == record._id) {
          return (
            <Form.Item name="startLocation">
              <Input />
            </Form.Item>
          )
        } else {
          return <p>{text}</p>
        }
      },
    },
    {
      title: 'End Location',
      dataIndex: 'endLocation',
      render: (text, record) => {
        if (editingRow == record._id) {
          return (
            <Form.Item name="endLocation">
              <Input />
            </Form.Item>
          )
        } else {
          return <p>{text}</p>
        }
      },
    },
    {
      title: 'Actions',
      render: (_, record) => {
        return (
          <>
            <Button
              tyoe="link"
              className="me-2"
              onClick={() => {
                setEditingRow(record._id)
                antform.setFieldsValue({
                  startTime: record.startTime,
                  endTime: record.endTime,
                  startLocation: record.startLocation,
                  endLocation: record.endLocation,
                })
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        )
      },
    },
  ]

  const onFinish = (values) => {
    console.log(values)
    const updatedDataSource = [...dataSource]
    console.log(editingRow)
    const newDataSet=updatedDataSource.filter((row) => row._id !== editingRow)
    newDataSet.push({ ...values, _id: editingRow })
    console.log(newDataSet)
    setDataSource(newDataSet)
    setEditingRow(null)
  }
  return (
    <>
      <Modal show={props.show} onHide={props.detilsModalClose} size="lg">
        <Modal.Header closeButton className="position-relative">
          <strong>
            <h5>
              #{props.viewDetils.routeId} , {props.viewDetils?.startLocation} ,
              {props.viewDetils?.endsAt}
            </h5>
          </strong>
          <p className="r-date">
            {Moment(props.viewDetils.createdAt).format('DD-MM-YYYY hh:mm:ss')}
          </p>
        </Modal.Header>
        <Modal.Body>
          <Form form={antform} onFinish={onFinish}>
            {' '}
            <Table columns={columns} dataSource={dataSource}></Table>
          </Form>
          <Row>
            {' '}
            <Col md="12" className="d-flex justify-content-end">
              <Button type="button" onClick={handleCancel} variant="danger" className="mx-2">
                Cancel
              </Button>
              <Button type="submit" className="me-5" onClick={handleSubmit}>
                Update
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}
