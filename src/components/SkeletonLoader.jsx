import React from 'react';
import styled from 'styled-components';

const SkeletonLoader = () => {
  return (
    <StyledWrapper>
      <div className="skeleton-card" />
      <div className="skeleton-card" />
      <div className="skeleton-card" />
      <div className="skeleton-card" />
      <div className="skeleton-card" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
background-color: #2d3748; /* bg-gray-800 */
  height: 300px;
  border-radius: 8px;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes pulse {
    0% {
      background-color: #2d3748; /* bg-gray-800 */
    }
    50% {
      background-color: #4a5568; /* bg-gray-700 */
    }
    100% {
      background-color: #2d3748; /* bg-gray-800 */
    }
  }
`;

export default SkeletonLoader;