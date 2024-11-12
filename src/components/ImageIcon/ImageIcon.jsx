import PropTypes from 'prop-types'

import { darkThemeName, lightThemeName } from '../../utils/constants'

export default function ImageIcon({ className, src, alt, theme, onClick }) {
    const finalSrc = theme === darkThemeName ? src.light : src.dark;
  return (
    <img 
        className={className}
        src={finalSrc} 
        alt={alt}
        onClick={onClick}
    /> 
  )
}

ImageIcon.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
    theme: PropTypes.oneOf([darkThemeName, lightThemeName]).isRequired,
    onClick: PropTypes.func
}; 