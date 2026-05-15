import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/login/login";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home";

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

                <Route path="/" element={
                    <ProtectedRoute>
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    </ProtectedRoute>
                }></Route>

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