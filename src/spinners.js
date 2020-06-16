import React from 'react';
import { Spinner } from 'react-bootstrap';

export const PSpinner = () => 
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>;

