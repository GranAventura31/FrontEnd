import React from 'react'
import { Link }  from 'react-router-dom'

export const UiCardLugar = ({content, to}) => {
  return (
    <div >
        <Link className='Cardslog' to={to}>{content}</Link>
    </div>
  )
}
