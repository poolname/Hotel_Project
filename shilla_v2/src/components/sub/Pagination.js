import React from "react";
import "../../scss/Pagination.scss";

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    pagesPerGroup = 5,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentGroup = Math.ceil(currentPage / pagesPerGroup);
    const totalGroups = Math.ceil(totalPages / pagesPerGroup);

    const startPage = (currentGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    // 페이지 번호를 눌렀을 때만 최상단 이동
    const handleDirectPageChange = (page) => {
        onPageChange(page);
        window.scrollTo(0, 0); 
    };

    // 처음/이전/다음/마지막 버튼을 눌렀을 때는 스크롤 유지
    const handleNavigationPageChange = (page) => {
        onPageChange(page);
    };

    return (
        <div className="pagination">
            <button
                className="first"
                onClick={() => handleNavigationPageChange(1)}
                disabled={currentPage === 1}
            >
                처음
            </button>
            <button
                className="prev"
                onClick={() => handleNavigationPageChange(startPage - 1)}
                disabled={currentGroup === 1}
            >
                이전
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`page ${page === currentPage ? "active" : ""}`}
                    onClick={() => handleDirectPageChange(page)} 
                >
                    {page}
                </button>
            ))}
            <button
                className="next"
                onClick={() => handleNavigationPageChange(endPage + 1)}
                disabled={currentGroup === totalGroups}
            >
                다음
            </button>
            <button
                className="last"
                onClick={() => handleNavigationPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                마지막
            </button>
        </div>
    );
};

export default Pagination;
