import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeAluno from './src/pages/HomeAluno.tsx';
import NotFound from './src/pages/NotFound.tsx';
import AppHeader from './src/components/layout/AppHeader.tsx';
import AppFooter from './src/components/layout/AppFooter.tsx';

function AppRoutes() {
    return (
        <Router>
            <AppHeader userType="aluno" />
            <div className="w-full min-h-screen">
                <Routes>
                    <Route path="/" element={<HomeAluno />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <AppFooter />
        </Router>
    );
}

export default AppRoutes;
