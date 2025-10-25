import React from 'react';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';

const ProfilePage = () => {
  const members = [
    {
      id: 1,
      name: "Desca Rahma Kholisa",
      nim: "21120123130071",
      description: "Mahasiswa Teknik Komputer 2023 - Universitas Diponegoro",
      photo: profile1
    },
    {
      id: 2,
      name: "Aurellio Ma'rifat Armando Lubis",
      nim: "21120123140106",
      description: "Mahasiswa Teknik Komputer 2023 - Universitas Diponegoro",
      photo: profile2
    },
    {
      id: 3,
      name: "Resvanda Bagas Saputra",
      nim: "21120123130103",
      role: "Anggota",
      description: "Mahasiswa Teknik Komputer 2023 - Universitas Diponegoro",
      photo: profile3
    },
    {
      id: 4,
      name: "Farrell Farros Fausto",
      nim: "21120123120002",
      role: "Anggota",
      description: "Mahasiswa Teknik Komputer 2023 - Universitas Diponegoro",
      photo: profile4
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kelompok 42 - Modul 4</h1>

      <div style={styles.grid}>
        {members.map((member) => (
          <div key={member.id} style={styles.card}>
            <img
              src={member.photo}
              alt={member.name}
              style={styles.photo}
            />
            <h2 style={styles.name}>{member.name}</h2>
            <p style={styles.nim}>NIM: {member.nim}</p>
            <p style={styles.role}>{member.role}</p>
            <p style={styles.description}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 20px',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: '2.5em',
    marginBottom: '50px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid #667eea',
    marginBottom: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  },
  name: {
    fontSize: '1.5em',
    color: '#333',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  nim: {
    color: '#667eea',
    fontSize: '1.1em',
    marginBottom: '15px',
    fontWeight: '600',
  },
  role: {
    color: '#666',
    fontSize: '0.95em',
    marginBottom: '15px',
    fontStyle: 'italic',
  },
  description: {
    color: '#555',
    fontSize: '0.9em',
    lineHeight: '1.6',
  },
};

export default ProfilePage;