# Elrond Angular DApp

**WIP** Elrond DApp with Angular

Trying to re-create https://github.com/ElrondNetwork/dapp-template that is based on react

## Run
  
    npm install
    ng serve

## Todo

- try to clear console errors for dependencies
- show account details
- add login, logout buttons and some basic styling with bootstrap
- split into components
- implement more login methods

## Steps that where needed to make it run

Added the following to polyfills.ts

    (window as any).global = window;
    global.Buffer = global.Buffer || require('buffer').Buffer;

Added the following dependencies

    npm install @elrondnetwork/erdjs-wallet-connect-provider @elrondnetwork/erdjs-web-wallet-provider
    npm install qrcode @types/qrcode

