import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from '~/app';

const appElements = document.querySelectorAll('#smartplaylist-root');
const appElement = appElements[appElements.length - 1];

if (appElement) {
    const root = createRoot(appElement);
    root.render(<App appId={appElement.getAttribute('data-app-id')} />);
}

if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-var-requires
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
}
