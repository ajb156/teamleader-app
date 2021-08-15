import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { TeamLeader } from './TeamLeader';

ReactDOM.render(
	<React.StrictMode>
		<TeamLeader />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
