const skills = [
  {
    title: 'React',
    competency: 3,
    category: ['Computer Science'],
  },
  {
    title: 'Bootstrap',
    competency: 3,
    category: ['Computer Science'],
  },
   {
      title: 'Javascript',
      competency: 3,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'Scala',
      competency: 2,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'HTML',
      competency: 3,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'CSS',
      competency: 3,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'C++',
      competency: 5,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'C',
      competency: 4,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'Java',
      competency: 3,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'MySQL/SQL',
      competency: 4,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'php',
      competency: 2,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'Git',
      competency: 3,
      category: ['Computer Science', 'Programming Languages'],
    },
    {
      title: 'Python',
      competency: 5,
      category: ['Computer Science', 'Programming Languages','Data Engineering'],
    },
    {
      title: 'Scikit-Learn',
      competency: 4,
      category: ['Data Engineering'],
    },
    {
      title: 'Matplotlib',
      competency: 3,
      category: ['Data Engineering'],
    },
    {
      title: 'Numpy',
      competency: 3,
      category: ['Data Engineering'],
    },
    {
      title: 'Pandas',
      competency: 4,
      category: ['Data Engineering'],
    },
    {
      title: 'Pytorch',
      competency: 3,
      category: ['Data Engineering'],
    },
    {
      title: 'Tensorflow',
      competency: 3,
      category: ['Data Engineering'],
    },
    {
      title: 'Solidworks',
      competency: 4,
      category: ['Mechanical Engineering'],
    },
    {
      title: 'Solidworks Simulation',
      competency: 3,
      category: ['Mechanical Engineering'],
    },
    {
      title: 'CES Material Selector',
      competency: 2,
      category: ['Mechanical Engineering'],
    },
    {
      title: 'Design for Manufacturing',
      competency: 2,
      category: ['Mechanical Engineering'],
    },
    {
      title: 'Design for Assembly',
      competency: 2,
      category: ['Mechanical Engineering'],
    },
    {
      title: 'MATLAB',
      competency: 4,
      category: ['Computer Science','Electrical Engineering'],
    },
    {
      title: 'Simulink',
      competency: 4,
      category: ['Electrical Engineering'],
    },
    {
      title: 'Intel Quartus Prime FPGA',
      competency: 2,
      category: ['Electrical Engineering'],
    },
    {
      title: 'LabView',
      competency: 2,
      category: ['Electrical Engineering'],
    },
    {
      title: 'SIEMENS PLC',
      competency: 3,
      category: ['Electrical Engineering'],
    },
    {
      title: 'EAGLE',
      competency: 1,
      category: ['Electrical Engineering'],
    },

  ].map((skill) => ({ ...skill, category: skill.category.sort() }));
  
  // this is a list of colors that I like. The length should be == to the
  // number of categories. Re-arrange this list until you find a pattern you like.
  const colors = [
    '#6968b3',
    '#40494e',
    '#515dd4',
    '#e47272',
    '#d75858',
    '#747fff',
    '#64cb7b',
  ];
  
  const categories = [
    ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
  ]
    .sort()
    .map((category, index) => ({
      name: category,
      color: colors[index],
    }));
  
  export { categories, skills };