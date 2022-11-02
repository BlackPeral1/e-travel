import React from 'react'



const AllPickupReq = React.lazy(() => import('./views/pickupReq/allPickupReq/AllPickupReq'))

const Payment = React.lazy(() => import('./views/company-payment/payment/Payment'))
const AddPaymentMethod = React.lazy(() =>
  import('./views/company-payment/addPaymentMethod/AddPaymentMethod'),
)


const routes = [
  { path: '/', exact: true, name: 'Home' },

  //Company Route

  { path: '/Admin', name: 'Payment', element: Payment, permissions: 'isCompany' },

  {
    path: '/Admin',
    name: 'Payment',
    element: Payment,
    permissions: 'isCompany',
  },

  {
    path: '/payment/update-payment/:id',
    name: 'Update Payment Method',
    element: AddPaymentMethod,
    permissions: 'isCompany',
  },
  {
    path: '/payment/add-payment-method',
    name: 'Add Payment Method',
    element: AddPaymentMethod,
    permissions: 'isCompany',
  },



  //Customer Route

  {
    path: '/my-request',
    name: 'My Pickup Request',
    element: AllPickupReq,
    permissions: 'isCustomer',
  },

  //Admin Route

]

export default routes
