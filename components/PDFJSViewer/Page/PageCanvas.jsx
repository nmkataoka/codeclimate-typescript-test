import React from 'react';
import PropTypes from 'prop-types';

const PageCanvas = ({ children, onPageDraw }) => <div />;

PageCanvas.defaultProps = {
  children: null,
  onPageDraw: null,
};

PageCanvas.propTypes = {
  children: PropTypes.node,
  onPageDraw: PropTypes.func,
};

export default PageCanvas;
