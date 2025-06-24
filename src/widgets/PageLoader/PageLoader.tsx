import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from'./PageLoader.module.scss'
import {SpinLoad} from "shared/ui/SpinLoad/SpinLoad";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <SpinLoad />
        </div>
    );
};