import React from 'react'

const Pagination = ({ ...props }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className='default-pagination lab-ul'>
            <li>
                <a href="#" onClick={() => {
                    if (props.activePage < pageNumbers.length) {
                        props.paginate(props.activePage - 1)
                    }
                }}>
                    <i className='icofont-rounded-left'></i>
                </a>
            </li>
            {
                pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === props.activePage ? "bg-warning" : ""}`}>
                        <button onClick={() => props.paginate(number)} className='bg-transparent'>{number}</button>
                    </li>
                ))

            }
            <li>
                <a href="#" onClick={() => {
                    if (props.activePage < pageNumbers.length) {
                        props.paginate(props.activePage + 1)
                    }
                }}>
                    <i className='icofont-rounded-right'></i>
                </a>
            </li>
        </ul>
    )
}

export default Pagination