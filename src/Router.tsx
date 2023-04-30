import { createBrowserRouter, Navigate } from "react-router-dom"
import Main from "./pages/Main"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    }
])

export default router