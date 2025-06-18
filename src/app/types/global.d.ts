declare module '*module.scss' {
    interface IClassName {
        [className: string]: string;
    }
    const classNames: IClassName;
    export = classNames;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare const __IS_DEV__: boolean;