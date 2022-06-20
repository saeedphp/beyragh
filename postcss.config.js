module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
      ? {
           '@fullhuman/postcss-purgecss': {
              // Added Sections Folder And Changed Extension To Jsx
              Content: ['./components/**/*.jsx', './pages/**/*.js', './sections/**/**/*.jsx'],
              DefaultExtractor: Content =>
                 Content.match(/[\w-/:]+(?<!:)/g) || [],
           },
        }
      : {}),
    },
  }