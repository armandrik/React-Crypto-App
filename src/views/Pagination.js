import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate , currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className={number === currentPage ? 'active' : ''}>
                    <a href='#' className='pagination-link' onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;