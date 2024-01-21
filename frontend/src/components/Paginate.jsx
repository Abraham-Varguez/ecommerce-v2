import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//Pagination of the Items
const Paginate = ({ pages, currentPage }) => {
  return (
    pages > 1 && (
      <Pagination variant="dark">
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer key={x + 1} to={`/page/${x + 1}`}>
            <Pagination.Item active={x + 1 === currentPage}>
              {x + 1}{" "}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
