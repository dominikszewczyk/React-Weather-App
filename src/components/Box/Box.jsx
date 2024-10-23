import { PropTypes } from 'prop-types'

import './Box.style.scss'

export default function Box({ className = "", children }) {
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