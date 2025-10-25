import React from 'react';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';

const ProfilePage = () => {
  const members = [
    {
      id: 1,
      name: "Nama Anggota 1",
      nim: "123456789",
      role: "Ketua Kelompok",
      description: "Mahasiswa Teknik Informatika yang tertarik pada Web Development dan UI/UX Design.",
      photo: profile1
    },
    {
      id: 2,
      name: "Nama Anggota 2",
      nim: "987654321",
      role: "Anggota",
      description: "Passionate tentang Data Science dan Machine Learning. Suka coding dan problem solving.",
      photo: profile2
    },
    {
      id: 3,
      name: "Nama Anggota 3",
      nim: "456789123",
      role: "Anggota",
      description: "Tertarik pada Cybersecurity dan Network Administration. Hobi eksplorasi teknologi baru.",
      photo: profile3
    },
    {
      id: 4,
      name: "Nama Anggota 4",
      nim: "321654987",
      role: "Anggota",
      description: "Fokus pada Mobile Development dan Game Development. Suka berkreasi dan berinovasi.",
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