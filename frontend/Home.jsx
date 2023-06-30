import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home({ wallet, isSignedIn, contractId}) {
    return (
        <div>
            <Header wallet={wallet} isSignedIn={isSignedIn} />
            <Outlet />
            <Footer />
        </div>
    )
}