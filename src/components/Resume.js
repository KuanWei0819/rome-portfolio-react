import React from 'react';

function Resume() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Download My Resume</h2>
      <a href={`${process.env.PUBLIC_URL}/resume-kuanwei-lin.pdf`} download className="btn btn-primary">
  Download Resume
</a>
    </div>
  );
}

export default Resume;
