export function classNames(
    cls: string,
    mods: Record<string, boolean> = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .filter(Boolean)
        .join(' ');
}