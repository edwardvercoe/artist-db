import React from 'react'

export const Pagination = ({postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <div onClick={() => paginate(number)} >
                  {number}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      );
    };
    
    export default Pagination;