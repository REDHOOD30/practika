import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss'
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation('notFound');
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};