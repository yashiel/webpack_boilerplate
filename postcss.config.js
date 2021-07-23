let COMPATIBILITY = [
  "> 5%",
  "last 2 versions",
  "ie >= 10",
  "ie 6-8",
  "last 2 Android versions",
  "Firefox ESR"
];

module.exports = {
  parser: 'postcss-scss',
  plugins: {

    'postcss-import': {},
    'postcss-preset-env': {},
    'postcss-short': {},
    'postcss-font-magician': {
      foundries: 'custom bootstrap google',
      custom: {
        'mihcm': {
          variants: {
            normal: {
              100: {
                url: {
                  woff2: '~fonts/avertastd-thin-webfont.woff2',
                  woff: '~fonts/avertastd-thin-webfont.woff',
                }
              },
              300: {
                url: {
                  woff2: '~fonts/avertastd-light-webfont.woff2',
                  woff: '~fonts/avertastd-light-webfont.woff',
                  ttf: '~fonts/avertastd-light-webfont.ttf',
                }
              },
              400: {
                url: {
                  woff2: '~fonts/avertastd-regular-webfont.woff2',
                  woff: '~fonts/avertastd-regular-webfont.woff',
                  ttf: '~fonts/avertastd-regular-webfont.ttf'
                }
              },
              600: {
                url: {
                  woff2: '~fonts/avertastd-semibold-webfont.woff2',
                  woff: '~fonts/avertastd-semibold-webfont.woff',
                }
              },
              700: {
                url: {
                  woff2: '~fonts/avertastd-bold-webfont.woff2',
                  woff: '~fonts/avertastd-bold-webfont.woff'
                }
              },
              800: {
                url: {
                  woff2: '~fonts/avertastd-extrabold-webfont.woff2',
                  woff: '~fonts/avertastd-extrabold-webfont.woff'
                }
              },
              900: {
                url: {
                  woff2: '~fonts/avertastd-black-webfont.woff2',
                  woff: '~fonts/avertastd-black-webfont.woff',
                  ttf: '~fonts/avertastd-black-webfont.ttf'
                }
              },
            },
            italic: {
              100: {
                url: {
                  woff2: '~fonts/avertastd-thinitalic-webfont.woff2',
                  woff: '~fonts/avertastd-thinitalic-webfont.woff',
                }
              },
              300: {
                url: {
                  woff2: '~fonts/avertastd-lightitalic-webfont.woff2',
                  woff: '~fonts/avertastd-lightitalic-webfont.woff',
                  ttf: '~fonts/avertastd-lightitalic-webfont.ttf',
                }
              },
              400: {
                url: {
                  woff2: '~fonts/avertastd-regularitalic-webfont.woff2',
                  woff: '~fonts/avertastd-regularitalic-webfont.woff',
                }
              },
              600: {
                url: {
                  woff2: '~fonts/avertastd-semibolditalic-webfont.woff2',
                  woff: '~fonts/avertastd-semibolditalic-webfont.woff',
                }
              },
              700: {
                url: {
                  woff2: '~fonts/avertastd-bolditalic-webfont.woff2',
                  woff: '~fonts/avertastd-bolditalic-webfont.woff',
                }
              },
              800: {
                url: {
                  woff2: '~fonts/avertastd-extrabolditalic-webfont.woff2',
                  woff: '~fonts/avertastd-extrabolditalic-webfont.woff',
                  ttf: '~fonts/avertastd-extrabolditalic-webfont.ttf'
                }
              },
              900: {
                url: {
                  woff2: '~fonts/avertastd-blackitalic-webfont.woff2',
                  woff: '~fonts/avertastd-blackitalic-webfont.woff',
                  ttf: '~fonts/avertastd-blackitalic-webfont.ttf'
                }
              },
            }
          }
        }
      }
    },
    'autoprefixer': {
      remove: false,
      grid: true,
      flexbox: true,
      supports: true
    },
    

  }
}