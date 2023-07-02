import Home from "./Home"
import App from "./App"
import Upload from "./pages/Upload"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Trade from "./pages/Trade"
import Buy from "./pages/Buy"
import Sell from "./pages/Sell"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Manage from "./pages/Manage"
import UploadConfirmation from "./pages/UploadConfirmation"
import Remove from "./pages/Remove"
import RemoveConfirmation from "./pages/RemoveConfirmation"
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
                    element: <Upload wallet={wallet} contractId={contractId} />
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
                },
                {
                    path: "/portfolio",
                    element: <Manage wallet={wallet} contractId={contractId} />
                },
                {
                    path: "/upload-confirmation",
                    element: <UploadConfirmation />
                },
                {
                    path: "/remove",
                    element: <Remove wallet={wallet} contractId={contractId} />
                },
                {
                    path: "/remove-confirmation",
                    elememt: <RemoveConfirmation />
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
