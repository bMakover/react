import React, { useState, useEffect } from 'react';
import { auth, database } from '../firebase'; // Update the path accordingly
import { collection, query, where, getDocs } from 'firebase/firestore'; // Import Firestore methods

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);
  
  useEffect(() => {
    const fetchResumes = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const userId = user.uid;
          const resumesCollection = collection(database, 'resumes');
          const q = query(resumesCollection, where('userId', '==', userId));
          
          try {
            const querySnapshot = await getDocs(q);
            const resumeList = [];
            querySnapshot.forEach((doc) => {
              resumeList.push({ id: doc.id, ...doc.data() });
            });
            setResumes(resumeList);
          } catch (error) {
            console.error('Error fetching resumes: ', error);
          }
        }
      });
    };

    fetchResumes();
  }, []);

  return (
    <div >
      
      {resumes.length === 0 ? (
        <></>
      ) : (
        <>
        <h2 style={{ textAlign: 'center' }}>Your Resumes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            
          {resumes.map((resume) => (
            <div key={resume.id} style={{ border: '1px solid #ccc',backgroundColor: '#f0f0f0' , borderRadius: '8px', padding: '10px', margin: '10px', width: '300px' }}>
              
      
              <p><strong>Full Name:</strong> {resume.fullName}</p>
              <p><strong>Work Experience:</strong></p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                {resume.experience.map((exp, index) => (
                  <li key={index}>
                    <p><strong>Company Name:</strong> {exp.companyName}</p>
                    <p><strong>Time Frame:</strong> {exp.timeFrame}</p>
                  </li>
                ))}
              </ul>
              <p><strong>Education Details:</strong></p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                {resume.education.map((edu, index) => (
                  <li key={index}>
                    <p><strong>Institution:</strong> {edu.institution}</p>
                    <p><strong>Degree:</strong> {edu.degree}</p>
                  </li>
                ))}
              </ul>
              {/* Add other resume fields accordingly */}
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default ResumeList;
