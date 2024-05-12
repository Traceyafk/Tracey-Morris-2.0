import React from 'raect'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-componenets'
import { IconButton } from './IconButton'

export const SearchButton = props => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Search} {...Props} />}
    </ThemeConsumer>
)

SearchButton.propTypes = {
    variant: PropTypes.string
}