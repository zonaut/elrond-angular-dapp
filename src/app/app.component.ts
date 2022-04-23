import {Component, OnInit} from '@angular/core';
import {WalletConnectProvider} from "@elrondnetwork/erdjs-wallet-connect-provider/out";
import {toString as QRCodeToString} from "qrcode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'elrond-angular-dapp';

  constructor() {
  }

  async ngOnInit() {
    let provider = new WalletConnectProvider(
      "https://bridge.walletconnect.org/",
      {
        onClientLogin: () => window.alert('Logged in'),
        onClientLogout: () => window.alert('Logged out')
      }
    );
    await provider.init();

    let uri = await provider.login();

    QRCodeToString(uri, {type: "terminal"}, function (err: any, url: any) {
      let node = document.createElement("div");
      node.setAttribute('style', 'display: inline-block; height: 300px; width: 300px;')
      node.innerHTML = url;
      document.body.appendChild(node);
    });
  }

}
