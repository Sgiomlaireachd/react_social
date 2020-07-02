import React from "react";

const Pagination = (props) => {
  const pagesCount = Math.ceil(props.totalInstancesCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const pagination = pages.map((p) => {
    return (
      <span
        key={p}
        className={
          p === props.currentPage
            ? "pagination__item active"
            : "pagination__item"
        }
        onClick={() => {
          props.getInstances(p);
        }}
      >
        {p}
      </span>
    );
  });

  let end_pagination;
  if (props.currentPage > 5 && props.currentPage < pagesCount - 4) {
    end_pagination = [
      pagination[0],
      "...",
      pagination.slice(props.currentPage - 3, props.currentPage + 2),
      "...",
      pagination[pagesCount - 1],
    ];
  } else if (props.currentPage <= 5) {
    end_pagination = [
      pagination.slice(0, 6),
      "...",
      pagination[pagesCount - 1],
    ];
  } else {
    end_pagination = [pagination[0], "...", pagination.splice(pagesCount - 6)];
  }

  return <div className="pagination">{end_pagination}</div>;
};

export default Pagination;
