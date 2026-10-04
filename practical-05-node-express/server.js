const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory students store
let students = [
  { id: 1, name: 'Harsh Pansuriya', course: 'Computer Engg.', semester: 5, marks: 92, email: 'harsh@example.com' },
  { id: 2, name: 'Riya Sharma',     course: 'Computer Engg.', semester: 5, marks: 85, email: 'riya@example.com' },
  { id: 3, name: 'Arjun Patel',     course: 'Information Tech.', semester: 5, marks: 78, email: 'arjun@example.com' },
  { id: 4, name: 'Priya Desai',     course: 'Electronics',    semester: 3, marks: 71, email: 'priya@example.com' },
  { id: 5, name: 'Karan Shah',      course: 'Computer Engg.', semester: 7, marks: 88, email: 'karan@example.com' },
];

// GET /api/students
app.get('/api/students', (req, res) => {
  res.json({ success: true, count: students.length, data: students });
});

// GET /api/students/:id
app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
  res.json({ success: true, data: student });
});

// POST /api/students
app.post('/api/students', (req, res) => {
  const { name, course, semester, marks, email } = req.body;
  if (!name || !email) return res.status(400).json({ success: false, message: 'Name and email are required' });
  const newStudent = { id: Date.now(), name, course: course || '', semester: semester || 1, marks: marks || 0, email };
  students.push(newStudent);
  res.status(201).json({ success: true, message: 'Student created', data: newStudent });
});

// PUT /api/students/:id
app.put('/api/students/:id', (req, res) => {
  const idx = students.findIndex(s => s.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success: false, message: 'Student not found' });
  students[idx] = { ...students[idx], ...req.body, id: students[idx].id };
  res.json({ success: true, message: 'Student updated', data: students[idx] });
});

// DELETE /api/students/:id
app.delete('/api/students/:id', (req, res) => {
  const idx = students.findIndex(s => s.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success: false, message: 'Student not found' });
  const deleted = students.splice(idx, 1)[0];
  res.json({ success: true, message: 'Student deleted successfully', data: deleted });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
