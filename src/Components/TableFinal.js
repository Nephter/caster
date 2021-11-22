import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import parchment from '../assets/img/TableParchment.svg';
import buttonBookmarkWide from '../assets/img/buttonBookmarkWide.svg';
import buttonBookmark from '../assets/img/buttonBookmark.svg';
import HeaderFinalSpells from './HeaderFinalSpells';
import TableFinalSpells from './TableFinalSpells';
import HeaderChannelDivinitySpells from './HeaderChannelDivinitySpells';
import TableChannelDivinitySpells from './TableChannelDivinitySpells';
import Button from '@mui/material/Button';

const TableFinal = (props) => {
  const [view, setView] = useState(false);
  const [shortRested, setShortRested] = useState([]);

  const onShortRestClick = () => {
    setShortRested([]);
    props.setCDCasts(props.ChannelDivinityCasts);
  };

  const spellButton = () => {
    setView(false);
  };

  const cdViewChangeButton = () => {
    setView(true);
  };

  return view ? (
    //  --------------------------CHANNEL DIVINITY--------------------
    <div>
      {/* Spell Banner */}
      <div
        style={{
          backgroundImage: `url(${buttonBookmark})`,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          top: '8px',
          left: '35px',
          padding: '20px',
          height: 0,
        }}
      >
        {/* Spell button */}
        <Button
          onClick={spellButton}
          style={{
            position: 'relative',
            top: '-25px',
            left: '-10px',
            color: '#E5E4E2',
            background: 'transparent',
            border: 0,
            boxShadow: '0 0 0 0',
            outline: 0,
            paddingInline: '10px',
          }}
        >
          Spells
        </Button>
      </div>
      {/* CD banner */}
      <div
        style={{
          backgroundImage: `url(${buttonBookmarkWide})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          position: 'relative',
          top: '-32px',
          left: '118px',
          padding: '2px',
          width: '150px',
        }}
      >
        {/* CD Button  */}
        <Button
          onClick={cdViewChangeButton}
          style={{
            position: 'relative',
            top: '-5px',
            left: '5px',
            color: '#E5E4E2',
            background: 'transparent',
            border: 0,
            boxShadow: '0 0 0 0',
            outline: 0,
          }}
        >
          Channel Divinity
        </Button>
      </div>
      <Card className="b-t">
        <div
          className="b-t"
          style={{
            height: '149px',
            width: 'inherit',
          }}
        >
          <CardHeader
            className="border-0 b-t pt-0"
            style={{
              width: 'inherit',
            }}
          >
            <HeaderChannelDivinitySpells
              setNewSpellPrepped={props.setNewSpellPrepped}
              domain={props.domain}
              onLongRestClick={props.onLongRestClick}
              onShortRestClick={onShortRestClick}
            />
          </CardHeader>
        </div>
        <CardBody>
          <Table hover borderless>
            <div className="table cdTableBody" style={{ marginTop: '-112px' }}>
              <thead className="thead-light">
                <tr
                  style={{
                    backgroundImage: `url(${parchment})`,
                  }}
                >
                  <th
                    className="tableStickyHead pt-0"
                    style={{
                      backgroundPosition: '-49px',
                    }}
                  >
                    <h3 className="pl-0 pt-0 ">Lvl</h3>
                  </th>
                  <th
                    className="tableStickyHead pl-0 pt-0"
                    style={{ backgroundPosition: '-155px' }}
                  >
                    <h3 className="pt-0">Name</h3>
                  </th>
                  <th
                    className="tableStickyHead pt-0"
                    style={{ backgroundPosition: '-358px' }}
                  >
                    <h3 className="pt-0">Casting Info</h3>
                  </th>
                  <th
                    className="tableStickyHead pt-0"
                    style={{
                      backgroundPosition: '-543px',
                    }}
                  >
                    <h3 className="pt-0">Cast it!</h3>
                  </th>
                </tr>
              </thead>
              <tbody className="invisibleTable-body">
                <tr className="invisibleTable-row">
                  <td>
                    <h4>....................................</h4>
                  </td>
                  <td>
                    <h4>
                      .................I.................................................I
                    </h4>
                  </td>
                  <td>
                    <h4>
                      ............................................................
                    </h4>
                  </td>
                  <td>
                    <h4>............I.................</h4>
                  </td>
                </tr>
                {props.channelDivinity.map((spell, index) => {
                  return (
                    <TableChannelDivinitySpells
                      key={index}
                      spell={spell}
                      index={index}
                      longRested={props.longRested}
                      shortRested={shortRested}
                      setShortRested={setShortRested}
                      useChannelDivinity={props.useChannelDivinity}
                      cDCasts={props.cDCasts}
                      setCDCasts={props.setCDCasts}
                      ChannelDivinityCasts={props.ChannelDivinityCasts}
                    />
                  );
                })}
              </tbody>
            </div>
          </Table>
        </CardBody>
      </Card>
    </div>
  ) : (
    //  -----------------------------SPELLS----------------------------
    <div>
      {/* Spell Banner */}
      <div
        style={{
          backgroundImage: `url(${buttonBookmark})`,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          top: '8px',
          left: '35px',
          padding: '20px',
          height: 0,
        }}
      >
        {/* Spell button */}
        <Button
          onClick={spellButton}
          style={{
            position: 'relative',
            top: '-25px',
            left: '-10px',
            color: '#E5E4E2',
            background: 'transparent',
            border: 0,
            boxShadow: '0 0 0 0',
            outline: 0,
            paddingInline: '10px',
          }}
        >
          Spells
        </Button>
      </div>
      {/* CD banner */}
      <div
        style={{
          visibility: `${+props.playerLevel === 1 ? 'hidden' : 'visible'}`,
          backgroundImage: `url(${buttonBookmarkWide})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          position: 'relative',
          top: '-32px',
          left: '118px',
          padding: '2px',
          width: '150px',
        }}
      >
        {/* CD Button  */}
        <Button
          onClick={cdViewChangeButton}
          style={{
            position: 'relative',
            top: '-5px',
            left: '5px',
            color: '#E5E4E2',
            background: 'transparent',
            border: 0,
            boxShadow: '0 0 0 0',
            outline: 0,
          }}
        >
          Channel Divinity
        </Button>
      </div>

      <Card
        className="b-t"
        // style={{ zIndex: '100' }}
      >
        <div
          style={{
            height: '165px',
            width: 'inherit',
          }}
        >
          <CardHeader
            className="border-0 b-t pt-0 pb-0"
            style={{
              width: 'inherit',
            }}
          >
            <HeaderFinalSpells
              onShortRestClick={onShortRestClick}
              spellSlots={props.spellSlots}
              domainIcon={props.domainIcon}
              domain={props.domain}
              onLongRestClick={props.onLongRestClick}
              setNewSpellPrepped={props.setNewSpellPrepped}
            />
          </CardHeader>
        </div>
        <CardBody>
          <Table hover borderless>
            <div
              className="table spellTableBody"
              style={{ marginTop: '-128px' }}
            >
              <thead className="thead-light">
                <tr>
                  <th
                    className="tableStickyHead pt-0"
                    style={{
                      backgroundPosition: '-49px',
                    }}
                  >
                    <h3 className="pl-0 pt-0 ">Lvl</h3>
                  </th>
                  <th
                    className="tableStickyHead pl-0 pt-0"
                    style={{ backgroundPosition: '-155px' }}
                  >
                    <h3 className="pt-0">Name</h3>
                  </th>
                  <th
                    className="tableStickyHead pt-0"
                    style={{ backgroundPosition: '-358px' }}
                  >
                    <h3 className="pt-0">Casting Info</h3>
                  </th>
                  <th
                    className="tableStickyHead pt-0"
                    style={{
                      backgroundPosition: '-543px',
                    }}
                  >
                    <h3 className="pt-0">Cast it!</h3>
                  </th>
                </tr>
              </thead>
              <tbody className="invisibleTable-body">
                <tr className="invisibleTable-row">
                  <td>
                    <h4>..................................</h4>
                  </td>
                  <td>
                    <h4>
                      ......................................................................
                    </h4>
                  </td>
                  <td>
                    <h4>
                      ............................................................
                    </h4>
                  </td>
                  <td>
                    <h4>..........</h4>
                  </td>
                </tr>
                {props.newSpellPrepped.spell.map((spell, index) => {
                  return (
                    <TableFinalSpells
                      key={index}
                      spell={spell}
                      index={index}
                      domainIcon={props.domainIcon}
                      onDropdownClick={props.onDropdownClick}
                      spellSlots={props.spellSlots}
                    />
                  );
                })}
              </tbody>
            </div>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default TableFinal;

// ( {+props.playerLevel === 1 ? (
//       <div
//         style={{
//           visibility: 'hidden',
//           backgroundImage: `url(${buttonBookmarkWide})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'contain',
//           position: 'relative',
//           top: '-32px',
//           left: '118px',
//           padding: '2px',
//           width: '150px',
//         }}
//       >
//         {/* CD Button  */}
//         <Button
//           onClick={cdViewChangeButton}
//           style={{
//             position: 'relative',
//             top: '-5px',
//             left: '5px',
//             color: '#E5E4E2',
//             background: 'transparent',
//             border: 0,
//             boxShadow: '0 0 0 0',
//             outline: 0,
//           }}
//         >
//           Channel Divinity
//         </Button>
//       </div>
//     ) : (
//       <div
//         style={{
//           backgroundImage: `url(${buttonBookmarkWide})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'contain',
//           position: 'relative',
//           top: '-32px',
//           left: '118px',
//           padding: '2px',
//           width: '150px',
//         }}
//       >
//         {/* CD Button  */}
//         <Button
//           onClick={cdViewChangeButton}
//           style={{
//             position: 'relative',
//             top: '-5px',
//             left: '5px',
//             color: '#E5E4E2',
//             background: 'transparent',
//             border: 0,
//             boxShadow: '0 0 0 0',
//             outline: 0,
//           }}
//         >
//           Channel Divinity
//         </Button>
//       </div>
//     )})
