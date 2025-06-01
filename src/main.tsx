import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./pages/Root";

console.log("root found");
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Root />
	</StrictMode>
);
