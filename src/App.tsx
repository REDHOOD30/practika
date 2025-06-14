import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {useTheme} from "./Theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {

    const{theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>На главную</Link>
            <Link to={'/about'}>О сайте</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/about" element={<AboutPageAsync />} />
                        <Route path="/" element={<MainPageAsync />} />
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;