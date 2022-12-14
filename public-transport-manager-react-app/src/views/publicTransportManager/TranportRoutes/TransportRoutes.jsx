import React from 'react'
import { useEffect, useState } from 'react'
import Moment from 'moment'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import { TimeTableModal } from '../../../components'

// import { axiosInstance, apiRequest } from "../../../services/core/axios";
import './allPickReq.scoped.css'

export default function TransportRoutes(props) {
  const [trasportRoutes, setTrasportRoutes] = useState([])
  const [allTrasportRoutes, setAllTrasportRoutes] = useState([])

  const [viewDetils, setViewDetils] = useState([])

  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [show, setShow] = useState(false)

  const DATA = [
    {
      routeId: '216',
      startFrom: 'Delgoda',
      endsAt: 'Kadawatha',
      date: '2022/11/02',
      expectedCrowd: 34,
      todayCrowd: 68,
      timeTable: {
        timeTableId: 'Ttid-001',
        tableRows: [
          {
            startLocation: 'Kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
        ],
      },
    },
    {
      routeId: '138',
      startFrom: 'Delgoda',
      endsAt: 'Kadawatha',
      date: '2022/11/02',
      expectedCrowd: 45,
      todayCrowd: 78,
      timeTable: {
        timeTableId: 'Ttid-001',
        tableRows: [
          {
            startLocation: 'Kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
        ],
      },
    },
    {
      routeId: '200',
      startFrom: 'Delgoda',
      endsAt: 'Kadawatha',
      date: '2022/11/02',
      expectedCrowd: 23,
      todayCrowd: 87,
      timeTable: {
        timeTableId: 'Ttid-001',
        tableRows: [
          {
            startLocation: 'Kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'kadawatha',
            startTime: '08:30 A.M',
            endLocation: 'Delgoda',
            endTime: '10:30 A.M',
          },
          {
            startLocation: 'Delgoda',
            startTime: '08:30 A.M',
            endLocation: 'Kadawatha',
            endTime: '10:30 A.M',
          },
        ],
      },
    },
  ]

  const detilsModalClose = () => {
    setShow(false)
  }
  const detilsModalShow = (d) => {
    setViewDetils(d)
    setShow(true)
  }

  useEffect(() => {
     getTransportRoute()
  }, [])

  const getTransportRoute = () => {
    axios
      .get('http://localhost:3001/api/traportRoute')
      .then((res) => {
        setTrasportRoutes(res.data)
        setAllTrasportRoutes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % trasportRoutes.length
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
    setItemOffset(newOffset)
  }

  return (
    <>
      <div className="row pt-3">
        {DATA.length > 0 ? (
          DATA.map((i) => {
            return (
              <div key={i._id} className="card p-4 mb-3">
                <div className="d-flex justify-content-between card-heder">
                  {/* <button className={'status-btn ' + i.requestStatus}>{i.requestStatus}</button> */}
                  <div className="header-r ">
                    <h5>
                      Route ID: <strong>{i.routeId}</strong>
                    </h5>
                    <p>Date: {Moment(i.date).format('DD-MM-YYYY hh:mm:ss')}</p>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between">
                  <div>
                    {/* <h5>{i.requestReceivedBy?.name}</h5> */}
                    <p>Expected Crowd : {i.expectedCrowd}</p>
                    <p>Today Crowd : {i.todayCrowd}</p>
                    <p>
                      <i className="fas fa-thumbtack"></i> Start Loaction : {i.startFrom}
                    </p>
                    <p>
                      <i className="fas fa-thumbtack"></i> End Loaction : {i.endsAt}
                    </p>
                  </div>
                  <div className="d-flex align-items-end">
                    <button className="btn btn-info me-2" onClick={(e) => detilsModalShow(i)}>
                      {' '}
                      Expences
                    </button>
                    <button className="btn btn-info" onClick={(e) => detilsModalShow(i)}>
                      {' '}
                      TimeTable
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="card p-4 mb-3">
            <div className="d-flex justify-content-between">
              <div>
                <p>No Record found</p>
              </div>
            </div>
          </div>
        )}
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
        <TimeTableModal
          show={show}
          viewDetils={viewDetils}
          detilsModalShow={detilsModalShow}
          detilsModalClose={detilsModalClose}
          getTransportRoute={getTransportRoute}
        />
      </div>
    </>
  )
}
