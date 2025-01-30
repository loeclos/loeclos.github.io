import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import NavBar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';

const Home = lazy(() => import('./pages/Home'));
const Page404 = lazy(() => import('./pages/404'));
const ProjectSection = lazy(() => import('./pages/projects'));
const ContactCard = lazy(() => import('./pages/Contact'));
import Spinner from './components/spinner/spinner';
import './App.css';

function App() {
    return (
        <>
            <NavBar />

            <Suspense fallback={<Spinner />}>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectSection />} />
                    <Route path="/contact" element={<ContactCard />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
}

function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();

    return (
        /mobile/i.test(userAgent) ||
        /android/i.test(userAgent) ||
        /iphone/i.test(userAgent) ||
        /ipad/i.test(userAgent)
    );
}


window.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.center');
    const Outer = document.querySelector('.outerCircle');

    if (isMobile()) {
        circle.style.display = 'none';
        Outer.style.display = 'none';
    }

    let mouseX = 0,
        mouseY = 0;
    let cursorX = 0,
        cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        circle.style.top = `${e.clientY}px`;
        circle.style.left = `${e.clientX}px`;
        Outer.style.top = `${e.clientY}px`;
        Outer.style.left = `${e.clientX}px`;
    });

    document.addEventListener('click', () => {
        Outer.classList.add('click');
        setTimeout(() => {
            Outer.classList.remove('click');
        }, 300);
    });
    const Elements = [
        "BUTTON",
        "A",
        "INPUT",
        "SELECT"
      ]
      document.addEventListener('mouseover',(e) => {
         if(Elements.includes(e.target.tagName)){
              Outer.classList.add('hover');
         }else{
           Outer.classList.remove('hover');
         }
      });
});
export default App;
