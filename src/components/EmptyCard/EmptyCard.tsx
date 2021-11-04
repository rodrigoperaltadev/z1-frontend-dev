import React from 'react'
import './emptyCard.css'

function EmptyCard() {
  return (
    <div className='empty-card'>
      <div className='user-avatar'>
        <div className='user-header'></div>
        <div className='user-body'></div>
      </div>
      <div className='user-data'>
        <div className='skeleton-row' />
        <div className='skeleton-row' />
        <div className='skeleton-row' />
        <div className='skeleton-row' />
      </div>

    </div>
  )
}

export default EmptyCard
