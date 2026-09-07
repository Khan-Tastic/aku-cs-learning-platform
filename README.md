# AKU-EB Computer Science Learning Platform

An AI-powered, interactive learning platform designed to teach Computer Science to Pakistani Grade 11 and 12 students following the AKU-EB curriculum.

## Vision

Transform confused beginners into independent critical thinkers capable of understanding, designing, implementing, testing, and evaluating solutions.

## Key Features

### 🎓 Curriculum Engine
- Complete AKU-EB Grade XI and XII syllabus coverage
- Structured curriculum data model
- SLO tracking and mastery measurement
- Progressive difficulty levels

### 🧠 Thinking Engine
- Problem-solving methodology
- Computational thinking development
- Debugging and critical analysis
- Transfer of knowledge to new contexts

### 🎨 Visual Learning
- Algorithm visualizer
- Tree/data structure visualizer
- Binary search visualization
- Network topology simulator
- Logic gate demonstrations

### 💻 Programming Lab
- Interactive Python editor (Monaco)
- Code execution animation
- Variable visualization
- Trace table generator
- Output prediction mode
- Debugging laboratory

### 🗄️ Database Lab
- SQL editor with visual feedback
- Query builder
- Interactive table visualization
- Record manipulation

### 🤖 AI Teacher
- Context-aware explanations
- Progressive hint ladder
- Misconception detection
- Question generation
- Adaptive learning paths

### 📋 Practical Exam Simulator
- Grade XI practical environment
- Grade XII practical environment
- Timed examination mode
- Question variants generation
- Examiner evaluation

## Project Structure

```
src/
├── pages/              # Next.js pages
├── components/         # React components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── store/              # State management (Zustand)
├── content/            # Curriculum and lesson data
│   ├── curriculum/     # Syllabus structure
│   ├── lessons/        # Lesson definitions
│   ├── questions/      # Question bank
│   └── practical/      # Practical exam templates
└── services/           # API and external services
```

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Code Editor**: Monaco Editor
- **Python Execution**: Pyodide (WebAssembly)
- **State Management**: Zustand
- **Database**: PostgreSQL (future)
- **AI**: Provider-agnostic abstraction layer

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev

# Open http://localhost:3000
```

## Development Phases

### Phase 1: Foundation ✓
- Project architecture
- Routing and authentication
- Curriculum data model
- Dashboard and layout

### Phase 2: Learning Engine
- Lesson system
- Explanation levels
- Progress tracking

### Phase 3: Programming Lab
- Python editor
- Execution and animation
- Debugging

### Phase 4: Visual Labs
- Algorithm visualizer
- Tree visualizer
- Network simulator

### Phase 5: Database Lab
- SQL editor
- Query visualization

### Phase 6: AI Teacher
- Contextual assistance
- Hint generation
- Question generation

### Phase 7: Practical Exams
- Grade XI practical
- Grade XII practical
- Examiner evaluation

### Phase 8: Full Exam Engine
- Mock exams
- Adaptive testing
- Analytics

## Learning Philosophy

Every concept is teachable at multiple levels:

1. **Zero Knowledge**: Assume nothing
2. **Intuition**: Analogies and stories
3. **Visual**: Graphical representations
4. **Interactive**: Student manipulation
5. **Formal**: CS terminology
6. **Implementation**: Python/SQL code
7. **Problem Solving**: Real challenges
8. **Analysis**: Reasoning and evaluation
9. **Examination**: AKU-EB style questions
10. **Transfer**: Apply to new contexts

## Core Principles

- ✅ Question-first teaching, not definition-first
- ✅ "Why" engine for every major concept
- ✅ No answer leaking between learning and exam modes
- ✅ Grade level ≠ knowledge level
- ✅ Multi-dimensional mastery tracking
- ✅ Optimize for student thinking, not answer speed
- ✅ Every feature must have educational purpose

## Contributing

This is an educational platform. Contributions should focus on:
- Curriculum alignment
- Educational effectiveness
- Interactive visualizations
- Student thinking support
- Assessment quality

## License

MIT License - See LICENSE file

## Contact

For questions or suggestions, please open an issue.
