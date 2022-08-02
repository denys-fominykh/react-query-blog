import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	ul {
		list-style: none;
	}

	p {
		margin: 10px 0;
	}
`;
