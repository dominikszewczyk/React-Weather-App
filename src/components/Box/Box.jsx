import { PropTypes } from 'prop-types'

import './Box.style.scss'

function Box({ className, children }) {
    return (
        <div className={`weather__box ${className}`}>
            {children}
        </div>
    )
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Box.defaultProps = {
    className: '',
};

export default Box;