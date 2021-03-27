import "../styles/globals.css";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthProvider } from "../hooks/useAuth";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	);
}

export default MyApp;
