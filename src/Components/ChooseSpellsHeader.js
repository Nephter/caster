import { Container, Col, Label } from 'reactstrap';
import Button from '@mui/material/Button';

const ChooseSpellsHeader = (props) => {
  return (
    <Container fluid>
      <div className="header-body">
        <Col lg="6" xs="7">
          <Label for="spellsPreparable">
            {!props.table ? (
              props.spellsPreparable === 0 ? (
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={props.handleClick}
                >
                  Prepare your spells
                </Button>
              ) : (
                <h1 style={{ color: 'maroon' }}>
                  Preparable: {props.spellsPreparable}
                </h1>
              )
            ) : (
              ''
            )}
          </Label>
        </Col>
      </div>
    </Container>
  );
};

export default ChooseSpellsHeader;
