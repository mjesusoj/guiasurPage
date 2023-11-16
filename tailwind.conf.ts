import type { Config } from 'tailwindcss'

module.exports = {
  plugins: [require('daisyui')],
};

export default <Partial<Config>>{
  darkMode: 'class',
}
