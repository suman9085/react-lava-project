import React from 'react'
import User from './User'

export default function Users(props) {
  return (
    <div>

      <button disabled={props.hashData} onClick={props.da} className='btn btn-danger'>delete all</button>

      {
        props.udata.map((ldata) =>
          <User key={ldata} data={ldata}/>
        )
      }

    </div>
  )
}