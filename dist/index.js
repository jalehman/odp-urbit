const _jsxFileName = "/Users/josh/Projects/odp-urbit/src/index.js";import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '/components/root';
import { api } from '/api';
import { store } from '/store';
import { subscription } from "/subscription";

api.setAuthTokens({
  ship: window.ship
});

subscription.start();


ReactDOM.render((
  React.createElement(Root, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}} )
), document.querySelectorAll("#root")[0]);
