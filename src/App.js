
import React, { useState } from 'react';
import './App.css';

const internsData = [
  {
    id: 1,
    name: 'Charles Active',
    picture: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
    program: 'Statistics',
    email: 'charlesactive@gmailcom.com',
    grade: 92,
  },
  {
    id: 2,
    name: 'Daniel Mirin',
    picture: 'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg',
    program: 'Data Science',
    email: 'danielmirin@gamil.com',
    grade: 88,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    picture: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    program: 'Data Engineering',
    email: 'michaeljohnson@gmail.com',
    grade: 95,
  },
  {
    id: 4,
    name: 'Emily Brown',
    picture: 'https://www.shutterstock.com/image-photo/human-face-260nw-371192081.jpg',
    program: 'UX/UI Design',
    email: 'emilybrown@gmail.com',
    grade: 90,
  },
  {
    id: 5,
    name: 'Victor Asogwa',
    picture: 'https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=',
    program: 'UX/UI Design',
    email: 'victorasogwa@gmail.com',
    grade: 90,
  },
  {
    id: 6,
    name: 'Chika Yung',
    picture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    program : 'Software Engineering',
    email: 'chikayung@gmail.com',
    grade: 80,
  },
  {
    id: 7,
    name: 'Boma Gift',
    picture: 'https://img.freepik.com/free-photo/portrait-young-woman-smiling-isolated_23-2149158566.jpg?t=st=1711402140~exp=1711405740~hmac=88927b9c5ea1654c6361e1d8b23f78bcad046c5d4aba17f5eb72cb723cea7e8f&w=740',
    program : 'WEB DEVELOPER',
    email: 'boma@gmail.com',
    grade: 87,
  },
  {
    id: 8,
    name: 'Chioma Glory',
    picture: 'https://img.freepik.com/premium-photo/you-know-what-i-love-about-you-your-smile-shot-beautiful-young-woman-smiling-while-posing-against-grey-background_590464-43411.jpg?w=900',
    program : 'Content Creator',
    email: 'glorychioma23@gmail.com',
    grade: 85,
  },
  {
    id: 9,
    name: 'Joy Okwudire',
    picture: 'https://img.freepik.com/premium-photo/black-woman-arms-crossed-standing-isolated-gray-background-confident-profile-empowerment-portrait-african-american-female-model-with-serious-face-leadership-management_590464-154634.jpg?w=740',
     program : 'FrontEnd WebDeveloper',
    email: 'joyokwu@gmail.com',
    grade: 92,
  },
  {
    id: 10,
    name: 'Tappi Messi',
    picture: 'https://img.freepik.com/free-photo/black-man-posing_23-2148171684.jpg?w=740&t=st=1711403647~exp=1711404247~hmac=b3ddb5ab562de65ec8c076e71345c54cdd6a83d196dacc71aab31947237b78e2',
     program : 'Data Analyst',
    email: 'tappi@gmail.com',
    grade: 88,
  }
  
];

const InternGradingDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedBy, setSortedBy] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortByGrade = () => {
    setSortedBy('grade');
  };

  const handleSortByName = () => {
    setSortedBy('name');
  };

  const filteredInterns = internsData.filter(intern => 
    intern.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedInterns = sortedBy ? [...filteredInterns].sort((a, b) => {
    if (sortedBy === 'grade') {
      return b.grade - a.grade;
    } else if (sortedBy === 'name') {
      return a.name.localeCompare(b.name);
    }
  }) : filteredInterns;

  return (
    <div className="intern-dashboard">
      <div className="header">
        <h2>Interns Overview</h2>
        <div className="actions">
          <input 
            type="text" 
            placeholder="Search by name" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <button onClick={handleSortByGrade}>Sort by Grade</button>
          <button onClick={handleSortByName}>Sort by Name</button>
        </div>
      </div>
      {sortedInterns.map(intern => (
        <div className="intern-card" key={intern.id}>
          <img src={intern.picture} alt={intern.name} />
          <div className="intern-info">
            <h3>{intern.name}</h3>
            <p><strong>Program:</strong> {intern.program}</p>
            <p><strong>Email:</strong> {intern.email}</p>
            <p><strong>Overall Grade:</strong> {intern.grade}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternGradingDashboard;