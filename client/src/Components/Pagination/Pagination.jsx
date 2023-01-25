import React from 'react'

function Pagination({usersPerPage,totalUsers,setPage}) {
    console.log(Math.ceil(totalUsers/usersPerPage));
    const pageNumber =[];
    for(let i=1;i<=Math.ceil(totalUsers/usersPerPage);i++){
        pageNumber.push(i)
    }
    console.log(pageNumber);
  return (
    
    <div>
      <ul className='pagination'>
        {
            pageNumber.map((n)=>{
               return(
                <li key={n} className="page-item">
                <a onClick={()=>setPage(n)} className='page-link'>{n}</a>
            </li>
               )
            })
        }
      </ul>
    </div>
  )
}

export default Pagination
