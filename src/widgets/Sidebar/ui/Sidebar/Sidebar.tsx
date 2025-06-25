import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitch";
import {LangSwitch} from "shared/ui/LangSwitch/LangSwitch";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button data-testid="sidebar-toggle" onClick={onToggle}>toggle</button>
            <div className={cls.switch}>
                <ThemeSwitcher/>
                <LangSwitch className={cls.lang}/>
            </div>
        </div>
    );
};