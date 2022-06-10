import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DarkModeContextProvider } from "./context/darkModeContext";
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
