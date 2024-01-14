declare const require: {
    context(
        path: string,
        deep?: boolean,
        filter?: RegExp
    ): {
        keys(): string[];
        <T>(id: string): T;
    };
};

const imageContext = require.context(
    '../../../public/assets/img',
    false,
    /\.(png|jpe?g)$/
);
const imageKeys = imageContext.keys();

const ImportImages = imageKeys.reduce((acc, key) => {
    const imageKey = key.replace('./', '');
    acc[imageKey] = imageContext(key);
    return acc;
}, {} as Record<string, string>);

export default ImportImages;
