import React from 'react';
import Skills from './Skills';
import { skills, categories } from './skillsdata';
const Resume = () => (
      <Skills skills={skills} categories={categories} />
);

export default Resume;