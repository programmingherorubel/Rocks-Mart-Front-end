import React from 'react';

const Pagination = ({ totalPost, postPerPage, setCurrentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }
    return (

        <ul style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}} className='mt-3 mb-3'>
            {
                pages.map((item, index) => <li
                style={{
                    listStyle: 'none',
                    cursor: 'pointer',
                    background: 'tomato',
                    width: '10px',
                    height: '10px',
                    margin: '5px',
                    padding: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    borderRadius: '50%', // Corrected typo here
                    wordWrap: 'normal',
                  }}
                className="mt-4 page-item"
                onClick={() => setCurrentPage(item )}
                key={index}
              >
                {item}
              </li>
                )
            }
        </ul>
    );
};

export default Pagination;