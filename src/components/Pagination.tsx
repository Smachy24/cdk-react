import React, { useEffect, useState } from 'react';
import "./pagination.css"

function Pagination(props : any) {

    const pageLinks = []

    console.log ('CECI EST LE CURRENT PAGE : ' + props.currentPage)
    // for(let i = 1; i < props.pages; i++) 
    for(let i = props.currentPage - 2; i < props.currentPage + 5; i++) 
    {
        let active = props.currentPage == i ? 'pagination-active' : '';

        if (i <= props.pages && i > 0)
        {
            pageLinks.push(
                <li className={active} key={i} onClick={() => props.nextPage(i)}> <a href='#'>{i}</a> </li>
            )
        }
    
    } 
   
  return (
    <div className="pagination">
        <ul className='pagination-page-list'>
            {props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href='#'>prev</a></li> : ''}
            {pageLinks}
            {props.currentPage < props.pages ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href='#'>next</a></li> : ''}
        </ul>
    </div>
  );
}

export default Pagination;
