import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root')!);

root.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<GlobalStyles />
			<Pages />
		</React.StrictMode>
	</ApolloProvider>
);
