// @flow

import React, { type Node } from 'react';

import { difficultyLevels } from '../../../redux/actions';

import styles from './DifficultySelect.css';

type DifficultySelectPropsType = {
  difficulty: string,
  handleChange: () => mixed,
};

const DifficultySelect = ({ difficulty, handleChange }: DifficultySelectPropsType): Node => (
  <div className={styles.difficultySelect}>
    <div className={styles.horizontalSpace}>
      Change Difficulty:
    </div>
    <div className={styles.horizontalSpace}>
      <select value={difficulty} onChange={handleChange}>
        {Object.keys(difficultyLevels).map(level => <option value={level}>{level}</option>)}
      </select>
    </div>
  </div>
);

export default DifficultySelect;
