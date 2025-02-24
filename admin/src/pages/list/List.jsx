import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import { toast } from "react-toastify"

const List = ({url}) => {
  
  const [list, setlist] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setlist(response.data.data)
    }
    else {
      toast.error("ERROR")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  const removeFood= async (foodId)=>{
    const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  return (
    <div className='list add flex-col'>
      <p>All Food list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>name</b>
          <b>category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/`+item.image} alt='' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
