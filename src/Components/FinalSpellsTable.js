import { useState } from 'react';
import {
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from 'reactstrap';
import MyButton from './MyButton.js';
import FinalSpellsHeader from './FinalSpellsHeader.js';

const FinalSpellsTable = (props) => {
  const [available, setAvailable] = useState(props.spellsPrepared);
  return (
    <div>
      <CardHeader className="border-0">
        <FinalSpellsHeader
          loadingTable={props.loadingTable}
          setLoadingTable={props.setLoadingTable}
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
              School Level
            </th>
            <th className="sort" data-sort="budget" scope="col">
              Name Casting Time
            </th>
            <th className="sort" data-sort="status" scope="col">
              Duration Range
            </th>
            <th scope="col">Cast It!</th>
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
              <h6>Duration</h6>
              <h6>Range</h6>
            </td>
            <th scope="row">
              <MyButton
                small
                spellSlots={props.spellSlots}
                setSpellSlots={props.setSpellSlots}
                available={available}
                setAvailable={setAvailable}
                index={props.index}
                spell={props.spell}
                spellsPreparable={props.spellsPreparable}
                onPopoverHandler={props.onPopoverHandler}
              />
            </th>
          </tr>
        </tbody>
      </Table>

      <CardFooter className="py-4">
        <nav aria-label="...">
          <Pagination
            className="pagination justify-content-end mb-0"
            listClassName="justify-content-end mb-0"
          >
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
          </Pagination>
        </nav>
      </CardFooter>
    </div>
  );
};

export default FinalSpellsTable;
