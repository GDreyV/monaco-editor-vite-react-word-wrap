import React from 'react';
import ReactDOM from 'react-dom';
import './userWorker';
import EditorProvider from './components/EditorProvider';

ReactDOM.render(
	<React.StrictMode>
		<EditorProvider />
	</React.StrictMode>,
	document.getElementById('root')
);
