import {
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from 'reactstrap';
import Header from './Header.js';

const MyNewTable = (props) => {
  return (
    <div>
      <CardHeader className="border-0">
        {' '}
        <Header
          // name="Tables"
          // parentName="Tables"
          spellSlots={props.spellSlots}
          setSpellSlots={props.setSpellSlots}
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
        />
      </CardHeader>
      <Table className="align-items-center " responsive>
        <thead className="thead-light">
          <tr>
            <th className="sort" data-sort="name" scope="col">
              School + Level
            </th>
            <th className="sort" data-sort="budget" scope="col">
              Name
            </th>
            <th className="sort" data-sort="status" scope="col">
              Casting Time Duration Range/Area
            </th>
            <th scope="col">Cast</th>
          </tr>
        </thead>
        <tbody className="list">
          <tr>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require('../assets/img/theme/bootstrap.jpg').default}
                  />
                </a>
                <Media>
                  <span className="">2</span>
                </Media>
              </Media>
            </th>
            <th scope="row">
              <h4>Spell Name Spell Name Spell Name</h4>
              <h6>V,S,M </h6>
            </th>
            <td>
              <h6>Casting Time</h6>
              <h6>Duration</h6>
              <h6>Range/Area</h6>
            </td>
            <td>
              <button>Cast</button>
            </td>
          </tr>
        </tbody>
      </Table>

      <CardFooter className="py-4">
        <nav aria-label="...">
          <Pagination
            className="pagination justify-content-end mb-0"
            listClassName="justify-content-end mb-0"
          >
            <PaginationItem className="disabled">
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tabIndex="-1"
              >
                <i className="fas fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
              <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                2 <span className="sr-only">(current)</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="fas fa-angle-right" />
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </CardFooter>
    </div>
  );
};

export default MyNewTable;
