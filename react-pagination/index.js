import { Pagination } from "catify-pagination";
import { useState, useEffect, useRef } from "react";


export const PaginationComponent = ({ data, itemsPerPage }) => {
    const [currentPageData, setCurrentPageData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const paginationRef = useRef(null);

    const renderCallback = (data, page, totalPages) => {
        setCurrentPageData(data);
        setCurrentPage(page);
        setTotalPages(totalPages);
    };

    useEffect(() => {
        if (paginationRef.current) {
            paginationRef.current.data = data;
            paginationRef.current.itemsPerPage = itemsPerPage;
            paginationRef.current.render();
        }
    }, [data, itemsPerPage]);

    useEffect(() => {
        // Initialize pagination
        paginationRef.current = new Pagination(data, itemsPerPage, renderCallback);

        // Initial render
        paginationRef.current.render();
    }, [data, itemsPerPage]);

    return (
        <div>
            {currentPageData.map((item, index) => (
                <div id={index}>{item}</div>
            ))}
            <div id="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        className={`pagination-link${currentPage === index + 1 ? " active" : ""
                            }`}
                        tabIndex={0}
                        onClick={() => paginationRef.current.goToPage(index + 1)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                paginationRef.current.goToPage(index + 1, false);
                            }
                        }}
                    >
                        {index + 1}
                    </span>
                ))}
            </div>
        </div>
    );
};