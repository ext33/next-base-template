
const devPlugins = [ '@babel/plugin-transform-react-jsx-source' ];
const prodPlugins = [ 'transform-remove-console' ];

const isProduction = process.env.NODE_ENV === 'production';

const plugins = isProduction ? prodPlugins : devPlugins;

const customPlugins = {
    '@babel/plugin-proposal-decorators': { legacy: true },
    'styled-components': { ssr: true },
};

module.exports = {
    ignore: [ '**/*.less.d.ts' ],
    plugins: [ ...plugins ],
    presets: [ [ 'next/babel', customPlugins ] ],
};
