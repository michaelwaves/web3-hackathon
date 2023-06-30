import Home from "./Home"
import App from "./App"
import Upload from "./pages/Upload"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function Routes({ isSignedIn, contractId, wallet }) {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home wallet={wallet} isSignedIn={isSignedIn} contractId={contractId}/>,
            children: [
                {
                    path: "/",
                    element: <App isSignedIn={isSignedIn} contractId={contractId} wallet={wallet} />
                },
                {
                    path: "/upload",
                    element: <Upload wallet={wallet} isSignedIn={isSignedIn} contractId={contractId}/>
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
