import React, {useEffect, useState} from 'react';
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

// тест
export const BugButton = () => {

    const [error, setError] = useState(false)

    const {t} = useTranslation('translation');

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error])

    return (
        <Button
            onClick={onThrow}
        >
            {t('Error')}
        </Button>
    );
};