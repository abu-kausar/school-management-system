const { createBrowserRouter } = require("react-router-dom");
const { default: Portal } = require("../../Layout/Portal");
const { default: LandingPages } = require("../../Pages/LandingPages/LandingPages");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Portal></Portal>,
        children: [
            {
                path: '/',
                element: <LandingPages></LandingPages>
            }
        ]
    }
])

export default router;