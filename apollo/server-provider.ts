import {
	NextSSRApolloClient,
	NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { httpLink } from "./config";

/** Returns Apollo Client for SSR */
export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: httpLink,
	});
});
