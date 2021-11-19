import { Container, Label } from 'reactstrap';
import Button from '@mui/material/Button';

const HeaderChooseSpells = (props) => {
  return (
    <Container fluid>
      <div className="header-body">
        <h1 className="pt-2">Choose Spells to Prepare</h1>
        <Label for="spellsPreparable">
          {!props.table ? (
            props.spellsPreparable === 0 ? (
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={props.onPrepareClick}
                sx={{
                  top: '-35px',
                  left: '485px',
                  color: 'white',
                }}
              >
                Prepare!
              </Button>
            ) : (
              <h2 className="secondaryText">
                Preparable: {props.spellsPreparable}
              </h2>
            )
          ) : (
            ''
          )}
        </Label>
      </div>
    </Container>
  );
};

export default HeaderChooseSpells;
