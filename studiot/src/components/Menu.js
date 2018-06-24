import React, { Component } from 'react';
import { OverlayTrigger, Popover, Table} from 'react-bootstrap';
import '../App.css';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {

    return (
      <div>
        { this.props.getLanguage() === "en" ? 
        <div>
          <p><big>*taxes are included</big></p>

          <h3>Haircuts</h3>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>Women's Haircut</p></td>
                <td><p>$60~$70</p></td>
              </tr>
              <tr>
                <td><p>Men's Haircut</p></td>
                <td><p>$50~$60</p></td>
              </tr>
              <tr>
                <td><p>Children's Haircut (12 & under)</p></td>
                <td><p>$30</p></td>
              </tr>
            </tbody>
          </Table>

          <h3>Color</h3>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>Basic Tint</p></td>
                <td><p>$70~$100</p></td>
              </tr>
              <tr>
                <td><p>Hi-lights</p></td>
                <td><p>$80~$200</p></td>
              </tr>
              <tr>
                <td><p>Color Correction</p></td>
                <td><p>$160~</p></td>
              </tr>
            </tbody>
          </Table>

          <h3>Perm</h3>
          <p>*Haircut included with all perms</p>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>Perm</p></td>
                <td><p>$100 ~ $180</p></td>
              </tr>
              <tr>
                <td><p>Airwave Perm</p></td>
                <td><p>$170~$280</p></td>
              </tr>
              <tr>
                <td><p>Relaxer</p></td>
                <td><p>$250~$350</p></td>
              </tr>
            </tbody>
          </Table>

          <h3>Treatment</h3>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>Hair Treatment</p></td>
                <td><p>$70~$90</p></td>
              </tr>
              <tr>
                <td><p>Scalp Treatment</p></td>
                <td><p>$40~$60</p></td>
              </tr>
            </tbody>
          </Table>

          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>Shampoo</p></td>
                <td><p>$20~$30</p></td>
              </tr>
              <tr>
                <td><p>Blow dry/Flat iron/Curling iron</p></td>
                <td><p>$40~$50</p></td>
              </tr>
              <tr>
                <td className="col-md-6"><p>Japanese Hair Straightening TR(Thermal Reconditioning), Rebonding</p></td>
                <td><p>$450~$580</p></td>
              </tr>
            </tbody>
          </Table>

          <br />
          <p>*dry-off is included with every service</p>
          <p>*Only the  highest quality Japanese products are used for all of the
  perms, relaxers, straightenings, treatments and shampoos. 
  Colors are from Japan and Europe. </p>
        </div>
        : 
        <div>
          <p><big>＊税込み＊</big></p>

          <h3>ヘアカット</h3>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>レディース・カット</p></td>
                <td><p>$60~$70</p></td>
              </tr>
              <tr>
                <td><p>メンズ・カット</p></td>
                <td><p>$50~$60</p></td>
              </tr>
              <tr>
                <td><p>お子様カット (12歳以下)</p></td>
                <td><p>$30</p></td>
              </tr>
            </tbody>
          </Table>

          <h3>カラー</h3>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>ベーシック</p></td>
                <td><p>$70~$100</p></td>
              </tr>
              <tr>
                <td><p>ハイライト</p></td>
                <td><p>$80~$200</p></td>
              </tr>
              <tr>
                <td><p>カラーコレクション（ヘアカラーの染めかえ)</p></td>
                <td><p>$160~</p></td>
              </tr>
            </tbody>
          </Table>

          <h3>パーマ</h3>
          <p>＊すべてのパーマにはヘアカットが含まれます。</p>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>パーマ</p></td>
                <td><p>$100 ~ $180</p></td>
              </tr>
              <tr>
                <td><p>エアウエーブパーマ</p></td>
                <td><p>$170~$280</p></td>
              </tr>
              <tr>
                <td><p>ストレートパーマ</p></td>
                <td><p>$250~$350</p></td>
              </tr>
            </tbody>
          </Table>

          <h3>トリートメント</h3>
          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>ヘアー・トリートメント</p></td>
                <td><p>$70~$90</p></td>
              </tr>
              <tr>
                <td><p>頭皮トリートメント</p></td>
                <td><p>$40~$60</p></td>
              </tr>
            </tbody>
          </Table>

          <Table className="table borderless" hover responsive>
            <tbody>
              <tr>
                <td className="col-md-6"><p>シャンプー</p></td>
                <td><p>$20~$30</p></td>
              </tr>
              <tr>
                <td><p>ブロードライ / フラットアイロン / カーリングアイロン</p></td>
                <td><p>$40~$50</p></td>
              </tr>
              <tr>
                <td className="col-md-6"><p>縮毛矯正</p></td>
                <td><p>$450~$580</p></td>
              </tr>
            </tbody>
          </Table>

          <br />
          <p>＊すべてのサービスはドライ仕上げ付きです。</p>
          <p>＊パーマ、ストレートパーマ、縮毛矯正、トリートメント、シャンプーは日本の最高品質の製品のみを使用しています。カラーには日本製とヨーロッパ製の製品を使用しています。</p>
        </div>
        }
      </div>
    );
  }

}

export default Menu;