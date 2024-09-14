import React from 'react'

function Layout({ children, padding, color }) {
  return (
      <div className={`${padding} ${color}`}>{children}</div>
  )
}

export default Layout