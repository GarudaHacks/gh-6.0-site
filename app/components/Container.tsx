import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

function Container({ children }:ContainerProps) {
  return (
    <div className="p-6 md:p-12 min-h-[90vh] flex items-center justify-content">
        {children}
    </div>
  )
}

export default Container