const React = require('react')
const fs = require('fs')

exports.onRenderBody = ({ setHeadComponents }) => {

  const files = getFilesFromPath("./", ".woff2")
  const preload = [
      'Writer400',
      'Writer700'
    ]

  setHeadComponents([
    files.map((file, i) => {
      return preload.map((font, key) => {
        const fileBeginning = file.split('-').slice(0,-1).join('-')
        if (fileBeginning === font) {
          return(
            <link
      				key={key}
      				rel='preload'
      				as='font'
      				type='font/woff2'
      				crossOrigin='anonymous'
      				href={`${file}`}
      			/>
          )
        }
      })
    })
  ])
}

function getFilesFromPath(path, extension) {
  let dir = fs.readdirSync( path );
  return dir.filter( elm => elm.match(new RegExp(`.*\.(${extension})`, 'ig')));
}