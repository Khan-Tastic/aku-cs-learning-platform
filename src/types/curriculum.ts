/**
 * Curriculum data model for AKU-EB syllabus
 */

import { Grade, Topic, SubTopic, SLO, CognitiveLevel } from './index';

// Grade XI Curriculum
export const GRADE_XI_CURRICULUM: Topic[] = [
  {
    id: 'xi-data-representation',
    title: 'Data Representation',
    description: 'Understanding how data is represented in computers',
    order: 1,
    grade: 'XI',
  },
  {
    id: 'xi-logic',
    title: 'Logic and Boolean Algebra',
    description: 'Logic gates, Boolean identities, and Karnaugh maps',
    order: 2,
    grade: 'XI',
  },
  {
    id: 'xi-algorithms',
    title: 'Algorithms and Computational Thinking',
    description: 'Algorithm design, flowcharts, and pseudocode',
    order: 3,
    grade: 'XI',
  },
  {
    id: 'xi-networking',
    title: 'Networking and Cloud',
    description: 'Network topologies, cloud computing models',
    order: 4,
    grade: 'XI',
  },
  {
    id: 'xi-cybersecurity',
    title: 'Cybersecurity',
    description: 'Threats, vulnerabilities, and security strategies',
    order: 5,
    grade: 'XI',
  },
  {
    id: 'xi-python-basics',
    title: 'Python Programming Basics',
    description: 'Variables, data types, operators, input/output',
    order: 6,
    grade: 'XI',
  },
  {
    id: 'xi-python-control',
    title: 'Python Control Flow',
    description: 'Selection and repetition structures',
    order: 7,
    grade: 'XI',
  },
  {
    id: 'xi-python-advanced',
    title: 'Python Advanced Topics',
    description: 'Turtle graphics, libraries, debugging',
    order: 8,
    grade: 'XI',
  },
  {
    id: 'xi-data-science',
    title: 'Data and Statistics',
    description: 'Data visualization, statistics, experiments',
    order: 9,
    grade: 'XI',
  },
  {
    id: 'xi-iot-ai',
    title: 'IoT, AI, and Emerging Tech',
    description: 'Internet of Things, Artificial Intelligence, Blockchain',
    order: 10,
    grade: 'XI',
  },
];

// Grade XII Curriculum
export const GRADE_XII_CURRICULUM: Topic[] = [
  {
    id: 'xii-data-structures',
    title: 'Data Structures',
    description: 'Arrays, lists, stacks, queues, and trees',
    order: 1,
    grade: 'XII',
  },
  {
    id: 'xii-trees',
    title: 'Trees and Tree Algorithms',
    description: 'Binary trees, traversal, searching',
    order: 2,
    grade: 'XII',
  },
  {
    id: 'xii-searching-sorting',
    title: 'Searching and Sorting',
    description: 'Linear search, binary search, sorting algorithms',
    order: 3,
    grade: 'XII',
  },
  {
    id: 'xii-python-functions',
    title: 'Python Functions',
    description: 'Function definition, parameters, return values',
    order: 4,
    grade: 'XII',
  },
  {
    id: 'xii-python-oop',
    title: 'Object-Oriented Programming',
    description: 'Classes, objects, inheritance, encapsulation',
    order: 5,
    grade: 'XII',
  },
  {
    id: 'xii-file-handling',
    title: 'File Handling',
    description: 'Reading and writing files in Python',
    order: 6,
    grade: 'XII',
  },
  {
    id: 'xii-databases',
    title: 'Database Concepts',
    description: 'Tables, records, normalization, relationships',
    order: 7,
    grade: 'XII',
  },
  {
    id: 'xii-sql',
    title: 'SQL Programming',
    description: 'Creating tables, inserting, querying, filtering data',
    order: 8,
    grade: 'XII',
  },
  {
    id: 'xii-data-science',
    title: 'Data Science and Machine Learning',
    description: 'Datasets, features, training, model evaluation',
    order: 9,
    grade: 'XII',
  },
  {
    id: 'xii-security-privacy',
    title: 'Security, Privacy, and Protocols',
    description: 'Cryptography, data protection, network security',
    order: 10,
    grade: 'XII',
  },
];

// SLO definitions for Grade XI
export const GRADE_XI_SLOS: Record<string, SLO[]> = {
  'xi-python-basics': [
    {
      id: 'xi-pb-001',
      code: '3.1.1',
      text: 'Define variable and data types in Python',
      cognitiveLevel: 'Remember',
    },
    {
      id: 'xi-pb-002',
      code: '3.1.2',
      text: 'Understand different data types and their usage',
      cognitiveLevel: 'Understand',
    },
    {
      id: 'xi-pb-003',
      code: '3.1.3',
      text: 'Use input/output functions correctly',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xi-pb-004',
      code: '3.1.4',
      text: 'Apply operators in mathematical and logical expressions',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xi-pb-005',
      code: '3.1.5',
      text: 'Analyse type conversion and casting',
      cognitiveLevel: 'Analyse',
    },
  ],
  'xi-python-control': [
    {
      id: 'xi-pc-001',
      code: '3.2.1',
      text: 'Understand selection structures (if/else)',
      cognitiveLevel: 'Understand',
    },
    {
      id: 'xi-pc-002',
      code: '3.2.2',
      text: 'Use repetition structures (for/while)',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xi-pc-003',
      code: '3.2.3',
      text: 'Trace the execution of loops',
      cognitiveLevel: 'Analyse',
    },
    {
      id: 'xi-pc-004',
      code: '3.2.4',
      text: 'Debug control flow errors',
      cognitiveLevel: 'Analyse',
    },
    {
      id: 'xi-pc-005',
      code: '3.2.5',
      text: 'Design nested loop structures',
      cognitiveLevel: 'Create',
    },
  ],
};

// SLO definitions for Grade XII
export const GRADE_XII_SLOS: Record<string, SLO[]> = {
  'xii-python-functions': [
    {
      id: 'xii-pf-001',
      code: '5.1.1',
      text: 'Define and call functions with parameters',
      cognitiveLevel: 'Understand',
    },
    {
      id: 'xii-pf-002',
      code: '5.1.2',
      text: 'Understand return values and scope',
      cognitiveLevel: 'Understand',
    },
    {
      id: 'xii-pf-003',
      code: '5.1.3',
      text: 'Apply functions to solve problems',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xii-pf-004',
      code: '5.1.4',
      text: 'Analyse function efficiency and design',
      cognitiveLevel: 'Analyse',
    },
  ],
  'xii-python-oop': [
    {
      id: 'xii-oop-001',
      code: '5.2.1',
      text: 'Define classes and objects',
      cognitiveLevel: 'Remember',
    },
    {
      id: 'xii-oop-002',
      code: '5.2.2',
      text: 'Understand access modifiers (public, private, protected)',
      cognitiveLevel: 'Understand',
    },
    {
      id: 'xii-oop-003',
      code: '5.2.3',
      text: 'Implement inheritance and polymorphism',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xii-oop-004',
      code: '5.2.4',
      text: 'Apply encapsulation principles',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xii-oop-005',
      code: '5.2.5',
      text: 'Analyse OOP design patterns',
      cognitiveLevel: 'Analyse',
    },
  ],
  'xii-sql': [
    {
      id: 'xii-sql-001',
      code: '6.1.1',
      text: 'Create tables with appropriate data types',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xii-sql-002',
      code: '6.1.2',
      text: 'Insert and update records',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xii-sql-003',
      code: '6.1.3',
      text: 'Query data with WHERE and ORDER BY',
      cognitiveLevel: 'Apply',
    },
    {
      id: 'xii-sql-004',
      code: '6.1.4',
      text: 'Understand and apply normalization',
      cognitiveLevel: 'Understand',
    },
  ],
};
