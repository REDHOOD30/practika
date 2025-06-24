import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './SpinLoad.module.scss'

interface SpinLoadProps {
    className?: string;
}

export const SpinLoad = ({className}: SpinLoadProps) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};