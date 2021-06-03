import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      throwCount: 0,
      head: 0,
      tail: 0
    };
  }
  handleClick = (e) => {
    
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.setState({throwCount: ++this.state.throwCount});
    parseInt(Math.random()*10) > 5 ? this.setState({side: "yazi"}) : this.setState({side: "tura"});

    this.state.side === "tura" ? this.setState({head: ++this.state.head}) : this.setState({tail: ++this.state.tail}); 

  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.throwCount} </strong>
          atıştan
          <strong> {this.state.head} </strong>ü tura
          <strong> {this.state.tail} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
