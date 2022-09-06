import React from 'react'

function ListRender() {

    let listItems = [
       { item: 1},
       { item: 2},
       { item: 3},
       { item: 4},

    ]
  return (
    <div >{listItems.map((item, index)=>{
        return <li key={index} className={item.item%2? 'listRed': 'listBlue'}>{item.item}</li>
    })}</div>
  )
}

export default ListRender