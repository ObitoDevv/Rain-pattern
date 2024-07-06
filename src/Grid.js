import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 20px);
  grid-template-rows: repeat(15, 20px);
  gap: 1px;
  background-color: #000;
`;

const Cell = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color || 'black'};
`;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Grid = () => {
  const [cells, setCells] = useState(Array(15 * 20).fill(null));
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCells(prevCells => {
        const newCells = Array(15 * 20).fill(null);

        // Move existing blocks down
        const newBlocks = blocks.map(block => {
          return { ...block, position: block.position + 20 };
        }).filter(block => block.position < 15 * 20);

        // Add new block
        if (Math.random() > 0.8) {
          const randomColumn = Math.floor(Math.random() * (20 - 6)); // Ensure it fits within the grid
          newBlocks.push({ position: randomColumn, color: getRandomColor() });
        }

        // Update cells with block positions
        newBlocks.forEach(block => {
          for (let i = 0; i < 6; i++) {
            const pos = block.position + i * 20;
            if (pos < 15 * 20) {
              newCells[pos] = block.color;
            }
          }
        });

        setBlocks(newBlocks);
        return newCells;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [blocks]);

  return (
    <GridContainer>
      {cells.map((cellColor, index) => (
        <Cell key={index} color={cellColor} />
      ))}
    </GridContainer>
  );
};

export default Grid;
