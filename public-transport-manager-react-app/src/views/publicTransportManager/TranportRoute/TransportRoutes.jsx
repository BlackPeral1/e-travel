import React from 'react'
import { useEffect, useState } from 'react'
import Moment from 'moment'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import { TimeTableModal } from '../../../components'

// import { axiosInstance, apiRequest } from "../../../services/core/axios";
import './timeTable.scoped.css'

export default function TransportRoutes(props) {
  const [trasportRoutes, setTrasportRoutes] = useState([])
  const [allTrasportRoutes, setAllTrasportRoutes] = useState([])

  const [viewDetils, setViewDetils] = useState({
  })

  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [show, setShow] = useState(false)


  const detilsModalClose = () => {
    setShow(false)
  }
  const detilsModalShow = async (d) => {
   
    await setViewDetils(d)
    setShow(true)
  }

  useEffect(() => {
    getTransportRoute()
  }, [])

  const getTransportRoute = () => {
    axios
      .get('http://localhost:3001/api/transportRoute')
      .then((res) => {
        console.log(res.data.data)
        setTrasportRoutes(res.data.data)
        setAllTrasportRoutes(res.data.data)
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
        {allTrasportRoutes.length > 0 ? (
          allTrasportRoutes.map((i) => {
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
