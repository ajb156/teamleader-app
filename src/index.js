import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import reportWebVitals from './reportWebVitals';
import { TeamLeader } from './TeamLeader';

ReactDOM.render(
	<React.StrictMode>
		<TeamLeader />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
