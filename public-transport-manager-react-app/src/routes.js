import React from 'react'




const PublicTranportManagerDashboard = React.lazy(() =>
  import('./views/managerViews/dashboard/PublicTranportManagerDashboard'),
)


const routes = [
  { path: '/', exact: true, name: 'Home' },

  //Company Route

  {
    path: '/Admin',
    name: 'Payment',
    element: PublicTranportManagerDashboard,
    permissions: 'isCompany',
  },

  {
    path: '/Admin',
    name: 'Payment',
    element: PublicTranportManagerDashboard,
    permissions: 'isCompany',
  },
]

export default routes
