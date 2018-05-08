import React, { Component } from 'react';
import { OverlayTrigger, Popover, Table} from 'react-bootstrap';
import '../App.css';

class Menu extends Component {
    
  render() {

    return (
      <div>
        <p>*taxes are included</p>

        <h5>Haircuts</h5>
        <Table className="table borderless" hover responsive>
          <tbody>
            <tr>
              <td class="col-md-6">Women's Haircut</td>
              <td>60~70</td>
            </tr>
            <tr>
              <td>Men's Haircut</td>
              <td>50~60</td>
            </tr>
            <tr>
              <td>Children's Haircut (12 & under)</td>
              <td>30</td>
            </tr>
          </tbody>
        </Table>

        <h5>Color</h5>
        <Table className="table borderless" hover responsive>
          <tbody>
            <tr>
              <td class="col-md-6">Basic Tint</td>
              <td>70~100</td>
            </tr>
            <tr>
              <td>Hi-lights</td>
              <td>80~200</td>
            </tr>
            <tr>
              <td>Color Correction</td>
              <td>160~</td>
            </tr>
          </tbody>
        </Table>

        <h5>Perm</h5>
        <p>*Haircut included with all perms</p>
        <Table className="table borderless" hover responsive>
          <tbody>
            <tr>
              <td class="col-md-6">Perm</td>
              <td>100~180</td>
            </tr>
            <tr>
              <td>Airwave Perm</td>
              <td>170~280</td>
            </tr>
            <tr>
              <td>Relaxer</td>
              <td>250~350</td>
            </tr>
          </tbody>
        </Table>

        <h5>Treatment</h5>
        <Table className="table borderless" hover responsive>
          <tbody>
            <tr>
              <td class="col-md-6">Hair Treatment</td>
              <td>70~90</td>
            </tr>
            <tr>
              <td>Scalp Treatment</td>
              <td>40~60</td>
            </tr>
          </tbody>
        </Table>

        <Table className="table borderless" hover responsive>
          <tbody>
            <tr>
              <td class="col-md-6">Shampoo</td>
              <td>20~30</td>
            </tr>
            <tr>
              <td>Blow dry/Flat iron/Curling iron</td>
              <td>40~50</td>
            </tr>
            <tr>
              <td class="col-md-6">Japanese Hair Straightening TR(Thermal Reconditioning), Rebonding </td>
              <td>450~580</td>
            </tr>
          </tbody>
        </Table>

        <br />
        <p>*dry-off is included with every service</p>
        <p>*Only the  highest quality Japanese products are used for all of the
perms, relaxers, straightenings, treatments and shampoos. 
Colors are from Japan and Europe. </p>
      </div>
    );
  }

}

export default Menu;
