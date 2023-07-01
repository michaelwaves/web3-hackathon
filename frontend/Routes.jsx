import Home from "./Home"
import App from "./App"
import Upload from "./pages/Upload"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Trade from "./pages/Trade"
import Buy from "./pages/Buy"
import Sell from "./pages/Sell"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function Routes({ isSignedIn, contractId, wallet }) {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home wallet={wallet} isSignedIn={isSignedIn} contractId={contractId} />,
            children: [
                {
                    path: "/",
                    element: <App isSignedIn={isSignedIn} contractId={contractId} wallet={wallet} />
                },
                {
                    path: "/upload",
                    element: <Upload />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/trade",
                    element: <Trade />,
                },
                {
                    path: "/buy",
                    element: <Buy />
                },
                {
                    path: "/sell",
                    element: <Sell />
                }

            ]
        },

    ]

    )
    return (
        <RouterProvider router={router} />
    )
}

export default Routes
