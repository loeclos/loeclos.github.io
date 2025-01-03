import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";

const Home = lazy(() => import("./pages/Home"));
const Page404 = lazy(() => import("./pages/404"));
const ProjectSection = lazy(() => import("./pages/projects"));
const ContactCard = lazy(() => import("./pages/Contact"));
import Spinner from "./components/spinner/spinner";

import "./App.css";

function App() {
    return (
        <>
            <NavBar />

            <Suspense fallback={<Spinner />}>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectSection />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/contact" element={<ContactCard />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
}

export default App;
