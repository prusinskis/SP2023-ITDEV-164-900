import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export const BaseContainer = ({ children, flex = false, ... rest}) => {
    let component = flex ? Flex : Box
    return <Component {...rest}> { children} </Component>
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    as : PropTypes.string,
    children : PropTypes.node.isRequired
}