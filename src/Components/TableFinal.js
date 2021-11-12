import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import parchment from '../assets/img/TableParchment.svg';
import HeaderFinalSpells from './HeaderFinalSpells';
import TableFinalSpells from './TableFinalSpells';
import HeaderChannelDivinitySpells from './HeaderChannelDivinitySpells';
import TableChannelDivinitySpells from './TableChannelDivinitySpells';

const TableFinal = (props) => {
  const [view, setView] = useState(false);
  const [shortRested, setShortRested] = useState(null);

  const onShortRestClick = () => {
    setShortRested(false);
    console.log('shortrested');
  };

  const switchView = () => {
    setView(!view);
  };

  return view ? (
    <div>
      <button onClick={switchView} style={{ zIndex: '999' }}>
        switch
      </button>
      <Card style={{ background: 'transparent' }}>
        <div
          style={{
            height: '165px',
            background: 'transparent',
            width: 'inherit',
          }}
        >
          <CardHeader
            className="border-0"
            style={{
              background: 'transparent',
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
        <CardBody style={{ paddingTop: 0 }}>
          <Table
            hover
            borderless
            style={{
              height: '600px',
              width: '100%',
            }}
          >
            <div
              className="table spellTableBody"
              style={{
                marginTop: '-80px',
                overflow: 'scroll',
                maxHeight: '65vh',
              }}
            >
              <thead className="thead-light">
                <tr
                  style={{
                    backgroundImage: `url(${parchment})`,
                  }}
                >
                  <th
                    className="sort tableStickyHead pt-0"
                    scope="col"
                    style={{
                      backgroundPosition: '-49px',
                    }}
                  >
                    <h3 className="pl-0 pt-0 ">Lvl</h3>
                  </th>
                  <th
                    className="sort tableStickyHead pl-0 pt-0"
                    scope="col"
                    style={{ backgroundPosition: '-141px' }}
                  >
                    <h3 className="pt-0">Name</h3>
                  </th>
                  <th
                    className="sort tableStickyHead pt-0"
                    scope="col"
                    style={{ backgroundPosition: '-358px' }}
                  >
                    <h3 className="pt-0">Casting Info</h3>
                  </th>
                  <th
                    className="tableStickyHead pt-0"
                    scope="col"
                    style={{
                      backgroundPosition: '-550px',
                    }}
                  >
                    <h3 className="pt-0">Cast it!</h3>
                  </th>
                </tr>
              </thead>
              <tbody
                style={{
                  minWidth: '100%',
                  cursor: 'pointer',
                  transform: 'translateY(-25px)',
                }}
              >
                <tr
                  style={{
                    padding: 0,
                  }}
                >
                  <td
                    style={{
                      padding: 0,
                    }}
                  >
                    <h4
                      style={{
                        color: 'transparent',
                        padding: 0,
                      }}
                    >
                      .
                    </h4>
                  </td>
                  <td
                    style={{
                      padding: 0,
                    }}
                  >
                    <h4
                      style={{
                        color: 'transparent',
                        padding: 0,
                      }}
                    >
                      .......................................................................
                    </h4>
                  </td>
                  <td
                    style={{
                      padding: 0,
                    }}
                  >
                    <h4
                      style={{
                        color: 'transparent',
                        padding: 0,
                      }}
                    >
                      ............................................................
                    </h4>
                  </td>
                  <td
                    style={{
                      padding: 0,
                    }}
                  >
                    <h4
                      style={{
                        color: 'transparent',
                        padding: 0,
                      }}
                    >
                      ..........
                    </h4>
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
                      useChannelDivinity={props.useChannelDivinity}
                      cDCasts={props.cDCasts}
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
    <Card style={{ background: 'transparent' }}>
      <button onClick={switchView} style={{ zIndex: '999', top: '50px' }}>
        switch
      </button>
      <div
        style={{
          height: '165px',
          background: 'transparent',
          width: 'inherit',
        }}
      >
        <CardHeader
          className="border-0 "
          style={{
            background: 'transparent',
            width: 'inherit',
          }}
        >
          <HeaderFinalSpells
            spellSlots={props.spellSlots}
            domainIcon={props.domainIcon}
            domain={props.domain}
            onLongRestClick={props.onLongRestClick}
            onShortRestClick={onShortRestClick}
            setNewSpellPrepped={props.setNewSpellPrepped}
          />
        </CardHeader>
      </div>
      <CardBody style={{ paddingTop: 0 }}>
        <Table
          hover
          borderless
          style={{
            height: '600px',
            width: '100%',
          }}
        >
          <div
            className="table spellTableBody"
            style={{
              marginTop: '-80px',
              overflow: 'scroll',
              maxHeight: '65vh',
            }}
          >
            <thead className="thead-light">
              <tr
                style={{
                  backgroundImage: `url(${parchment})`,
                }}
              >
                <th
                  className="sort tableStickyHead pt-0"
                  scope="col"
                  style={{
                    backgroundPosition: '-49px',
                  }}
                >
                  <h3 className="pl-0 pt-0 ">Lvl</h3>
                </th>
                <th
                  className="sort tableStickyHead pl-0 pt-0"
                  scope="col"
                  style={{ backgroundPosition: '-141px' }}
                >
                  <h3 className="pt-0">Name</h3>
                </th>
                <th
                  className="sort tableStickyHead pt-0"
                  scope="col"
                  style={{ backgroundPosition: '-358px' }}
                >
                  <h3 className="pt-0">Casting Info</h3>
                </th>
                <th
                  className="tableStickyHead pt-0"
                  scope="col"
                  style={{
                    backgroundPosition: '-550px',
                  }}
                >
                  <h3 className="pt-0">Cast it!</h3>
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                minWidth: '100%',
                cursor: 'pointer',
                transform: 'translateY(-25px)',
              }}
            >
              <tr
                style={{
                  padding: 0,
                }}
              >
                <td
                  style={{
                    padding: 0,
                  }}
                >
                  <h4
                    style={{
                      color: 'transparent',
                      padding: 0,
                    }}
                  >
                    .
                  </h4>
                </td>
                <td
                  style={{
                    padding: 0,
                  }}
                >
                  <h4
                    style={{
                      color: 'transparent',
                      padding: 0,
                    }}
                  >
                    .......................................................................
                  </h4>
                </td>
                <td
                  style={{
                    padding: 0,
                  }}
                >
                  <h4
                    style={{
                      color: 'transparent',
                      padding: 0,
                    }}
                  >
                    ............................................................
                  </h4>
                </td>
                <td
                  style={{
                    padding: 0,
                  }}
                >
                  <h4
                    style={{
                      color: 'transparent',
                      padding: 0,
                    }}
                  >
                    ..........
                  </h4>
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
  );
};

export default TableFinal;
