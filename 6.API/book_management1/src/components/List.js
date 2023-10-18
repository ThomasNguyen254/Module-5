import {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import ReactPaginate from 'react-paginate';

export function ShowList() {
    const navigate = useNavigate();
    const [bookList, setBookList] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Số mục trên mỗi trang
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected + 1);
    };


    useEffect(() => {

        fetchAPI();
    }, [bookList])
    const fetchAPI = async () => {
        try {
            const result = await bookService.getAll();
            setBookList(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        const search = () => {
            const results = bookList.filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.quantity.includes(searchTerm)
            );
            setSearchResults(results);
        };

        search();
    }, [searchTerm, bookList]);

    const del = async (id) => {
        const result = await bookService.del(id);
        navigate("/");
    }
    const search = () => {
        const results = bookList.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    const filteredBooks = bookList.filter(book => book.title.includes(searchTerm));

    return (
        <>
            <h1>Library</h1>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={search}>Search</button>

            <table className='table'>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink to={`/update/${book.id}`} className="btn btn-primary">Edit</NavLink>
                            <button onClick={() => del(book.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }).map((_, index) => (
                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === Math.ceil(filteredBooks.length / itemsPerPage) ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

