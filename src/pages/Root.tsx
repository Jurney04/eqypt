import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { router } from "../routes";
import "../App.css";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60,
			gcTime: 1000 * 60 * 60 * 24,
			refetchOnWindowFocus: false,
		},
	},
});

export const Root = () => (
	<QueryClientProvider client={queryClient}>
		<div className="main_background"></div>
		<RouterProvider router={router} />
	</QueryClientProvider>
);
