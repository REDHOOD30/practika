export function buildTsLoaders() {
    return {
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node_modules/,
    }
}