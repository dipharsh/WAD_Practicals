require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3002;
const USE_MOCK = process.env.USE_MOCK_DB === 'true' || !process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// ─── MOCK DATA ────────────────────────────────────────────────────
let mockBooks = [
  { _id:'B001', title:'Introduction to Algorithms', author:'Thomas H. Cormen', category:'Computer Science', isbn:'978-0262046305', quantity:5, available:3 },
  { _id:'B002', title:'Clean Code', author:'Robert C. Martin', category:'Programming', isbn:'978-0132350884', quantity:4, available:4 },
  { _id:'B003', title:'JavaScript: The Good Parts', author:'Douglas Crockford', category:'Web Development', isbn:'978-0596517748', quantity:3, available:2 },
];
let mockMembers = [
  { _id:'M001', name:'Harsh Pansuriya', email:'harsh@example.com', phone:'9876543210', course:'Computer Engineering' },
  { _id:'M002', name:'Riya Sharma', email:'riya@example.com', phone:'9876543211', course:'Computer Engineering' },
];
let mockIssues = [];

// ─── BOOKS API ────────────────────────────────────────────────────
app.get('/api/books', (req, res) => {
  res.json({ success: true, count: mockBooks.length, data: mockBooks });
});
app.get('/api/books/:id', (req, res) => {
  const book = mockBooks.find(b => b._id === req.params.id);
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
  res.json({ success: true, data: book });
});
app.post('/api/books', (req, res) => {
  const { title, author, category, isbn, quantity } = req.body;
  if (!title || !author) return res.status(400).json({ success: false, message: 'Title and author required' });
  const book = { _id: 'B' + Date.now(), title, author, category: category||'', isbn: isbn||'', quantity: quantity||1, available: quantity||1 };
  mockBooks.push(book);
  res.status(201).json({ success: true, data: book });
});
app.put('/api/books/:id', (req, res) => {
  const idx = mockBooks.findIndex(b => b._id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Book not found' });
  mockBooks[idx] = { ...mockBooks[idx], ...req.body };
  res.json({ success: true, data: mockBooks[idx] });
});
app.delete('/api/books/:id', (req, res) => {
  const idx = mockBooks.findIndex(b => b._id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Book not found' });
  mockBooks.splice(idx, 1);
  res.json({ success: true, message: 'Book deleted' });
});

// ─── MEMBERS API ──────────────────────────────────────────────────
app.get('/api/members', (req, res) => {
  res.json({ success: true, count: mockMembers.length, data: mockMembers });
});
app.post('/api/members', (req, res) => {
  const { name, email, phone, course } = req.body;
  if (!name || !email) return res.status(400).json({ success: false, message: 'Name and email required' });
  const member = { _id: 'M' + Date.now(), name, email, phone: phone||'', course: course||'' };
  mockMembers.push(member);
  res.status(201).json({ success: true, data: member });
});
app.put('/api/members/:id', (req, res) => {
  const idx = mockMembers.findIndex(m => m._id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Member not found' });
  mockMembers[idx] = { ...mockMembers[idx], ...req.body };
  res.json({ success: true, data: mockMembers[idx] });
});
app.delete('/api/members/:id', (req, res) => {
  const idx = mockMembers.findIndex(m => m._id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Member not found' });
  mockMembers.splice(idx, 1);
  res.json({ success: true, message: 'Member deleted' });
});

// ─── ISSUES API ───────────────────────────────────────────────────
app.get('/api/issues', (req, res) => {
  res.json({ success: true, count: mockIssues.length, data: mockIssues });
});
app.post('/api/issues', (req, res) => {
  const { bookId, memberId, issueDate, dueDate } = req.body;
  const book = mockBooks.find(b => b._id === bookId);
  const member = mockMembers.find(m => m._id === memberId);
  if (!book || !member) return res.status(404).json({ success: false, message: 'Book or member not found' });
  if (book.available <= 0) return res.status(400).json({ success: false, message: 'No copies available' });
  const issue = { _id: 'I' + Date.now(), bookId, memberId, bookTitle: book.title, memberName: member.name, issueDate, dueDate, returnDate: null, status: 'issued' };
  mockIssues.push(issue);
  book.available -= 1;
  res.status(201).json({ success: true, data: issue });
});
app.put('/api/issues/:id/return', (req, res) => {
  const issue = mockIssues.find(i => i._id === req.params.id);
  if (!issue) return res.status(404).json({ success: false, message: 'Issue not found' });
  issue.status = 'returned';
  issue.returnDate = req.body.returnDate || new Date().toISOString().split('T')[0];
  const book = mockBooks.find(b => b._id === issue.bookId);
  if (book) book.available += 1;
  res.json({ success: true, data: issue });
});

// ─── HEALTH ───────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ success: true, mode: USE_MOCK ? 'mock' : 'mongodb', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Library Management API running on http://localhost:${PORT}`);
  console.log(`Mode: ${USE_MOCK ? 'Mock (in-memory)' : 'MongoDB'}`);
});
