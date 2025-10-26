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
      description: "Mahasiswa Teknik Komputer 2023 - Universitas Diponegoro",
      photo: profile3
    },
    {
      id: 4,
      name: "Farrell Farros Fausto",
      nim: "21120123120002",
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
            <div style={styles.photoContainer}>
              <img
                src={member.photo}
                alt={member.name}
                style={styles.photo}
              />
            </div>
            <div style={styles.textContent}>
              <h2 style={styles.name}>{member.name}</h2>
              <p style={styles.nim}>NIM: {member.nim}</p>
              <p style={styles.description}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f5f7fa',
    padding: '60px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#1a1a1a',
    fontSize: '2.5em',
    marginBottom: '60px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '30px 20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  photoContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  photo: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #f0f0f0',
  },
  textContent: {
    textAlign: 'center',
    width: '100%',
  },
  name: {
    fontSize: '1.1em',
    color: '#1a1a1a',
    marginBottom: '8px',
    fontWeight: '600',
    letterSpacing: '-0.3px',
    lineHeight: '1.3',
  },
  nim: {
    color: '#0066ff',
    fontSize: '0.9em',
    marginBottom: '12px',
    fontWeight: '500',
  },
  description: {
    color: '#666',
    fontSize: '0.85em',
    lineHeight: '1.5',
    fontWeight: '400',
  },
};

export default ProfilePage;