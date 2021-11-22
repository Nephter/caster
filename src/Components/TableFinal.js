import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import HeaderFinalSpells from './HeaderFinalSpells';
import TableFinalSpells from './TableFinalSpells';
import HeaderChannelDivinitySpells from './HeaderChannelDivinitySpells';
import TableChannelDivinitySpells from './TableChannelDivinitySpells';
import Button from '@mui/material/Button';

const TableFinal = (props) => {
  const [view, setView] = useState(false);
  const [shortRested, setShortRested] = useState([]);

  // resets state of shortRested and Channel Divinity Casts
  const onShortRestClick = () => {
    setShortRested([]);
    props.setCDCasts(props.ChannelDivinityCasts);
  };

  // swaps view to TableFinalSpells
  const spellButton = () => {
    setView(false);
  };

  // swaps view to TableChannelDivinitySpells
  const cdViewChangeButton = () => {
    setView(true);
  };

  return view ? (
    <div>
      <div className="buttonBookmark">
        <Button onClick={spellButton}>Spells</Button>
      </div>
      <div className="buttonBookmarkWide">
        <Button onClick={cdViewChangeButton}>Channel Divinity</Button>
      </div>
      <Card className="b-t">
        <div
          style={{
            height: '149px',
            width: 'inherit',
          }}
        >
          <CardHeader className="finalCard-header">
            <HeaderChannelDivinitySpells
              {...props}
              onShortRestClick={onShortRestClick}
            />
          </CardHeader>
        </div>
        <CardBody className="finalCard-body" style={{ marginTop: '-112px' }}>
          <Table hover borderless>
            <thead>
              <tr className="finalTable-row">
                <th>
                  <h3>Lvl</h3>
                </th>
                <th>
                  <h3>Name</h3>
                </th>
                <th>
                  <h3>Casting Info</h3>
                </th>
                <th>
                  <h3>Cast it!</h3>
                </th>
              </tr>
            </thead>
            <tbody className="invisibleFinalTable-body">
              <tr className="invisibleFinalTable-row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {props.channelDivinity.map((spell, index) => {
                return (
                  <TableChannelDivinitySpells
                    key={index}
                    spell={spell}
                    index={index}
                    {...props}
                    shortRested={shortRested}
                    setShortRested={setShortRested}
                  />
                );
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  ) : (
    <div>
      <div className="buttonBookmark">
        <Button onClick={spellButton}>Spells</Button>
      </div>
      <div
        className="buttonBookmarkWide"
        style={{
          visibility: `${+props.playerLevel === 1 ? 'hidden' : 'visible'}`,
        }}
      >
        <Button onClick={cdViewChangeButton}>Channel Divinity</Button>
      </div>
      <Card className="b-t">
        <div
          style={{
            height: '165px',
            width: 'inherit',
          }}
        >
          <CardHeader className="finalCard-header">
            <HeaderFinalSpells onShortRestClick={onShortRestClick} {...props} />
          </CardHeader>
        </div>
        <CardBody className="finalCard-body" style={{ marginTop: '-128px' }}>
          <Table hover borderless>
            <thead>
              <tr className="finalTable-row">
                <th>
                  <h3>Lvl</h3>
                </th>
                <th>
                  <h3>Name</h3>
                </th>
                <th>
                  <h3>Casting Info</h3>
                </th>
                <th>
                  <h3>Cast it!</h3>
                </th>
              </tr>
            </thead>
            <tbody
              className="invisibleFinalTable-body"
              style={{ filter: 'brightness(.9)' }}
            >
              <tr className="invisibleFinalTable-row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {props.newSpellPrepped.spell.map((spell, index) => {
                return (
                  <TableFinalSpells
                    key={index}
                    spell={spell}
                    index={index}
                    {...props}
                  />
                );
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default TableFinal;
