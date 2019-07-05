/**
 *
 * GridItem
 *
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import is from 'styled-is';
const GridItem = styled.div`
  ${is('column')`grid-column: ${props => props.column}`}
  ${is('row')`grid-row: ${props => props.row}`}
  ${is('area')`grid-area: ${props => props.area}`}`;

GridItem.propTypes = {
  column: PropTypes.string,
  row: PropTypes.string,
  area: PropTypes.string,
};

export default GridItem;
