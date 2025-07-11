import AppRoutes from "./routes/routes";
import BackToTop from "./components/BackToTop";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function App() {
	const clarityProjectId = "sd5uecc7vv";
	useEffect(() => {
		Clarity.init(clarityProjectId);
	}, []);
	return (
		<>
			<AppRoutes />
			<BackToTop />
		</>
	);
}
