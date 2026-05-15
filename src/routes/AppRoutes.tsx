import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import Login from "../pages/login/login";

interface Props {
    darkMode: boolean;

    setDarkMode: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

function AppRouter({
    darkMode,
    setDarkMode,
}: Props) {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />}></Route>

                <Route path="*" element={<NotFound />}></Route>
                <Route
                    path="/login"
                    element={
                        <Login
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRouter;