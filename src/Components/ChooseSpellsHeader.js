import { Container, Col, Label } from 'reactstrap';
import Button from '@mui/material/Button';
import bannerButton from '../assets/img/bannerButton.png';

const ChooseSpellsHeader = (props) => {
  return (
    <Container fluid>
      <div className="header-body ">
        <Label for="spellsPreparable">
          {!props.table ? (
            props.spellsPreparable === 0 ? (
              <Button
                size="small"
                onClick={props.handleClick}
                style={{
                  backgroundImage: `url(${bannerButton})`,
                  backgroundSize: '100% 100%',
                  backgroundColor: 'transparent',
                  color: 'maroon',
                  fontSize: '1rem',
                  fontFamily: 'Patrick Hand SC, cursive',
                  top: '1rem',
                }}
              >
                <div className="px-5">Prepare!</div>
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
      </div>
    </Container>
  );
};

export default ChooseSpellsHeader;
