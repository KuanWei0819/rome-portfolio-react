import React from 'react';

export default function Projects() {
  return (
    <section className="resume-section bg-light py-5" id="project">
      <div className="resume-section-content container">
        <h2 className="mb-5">Projects</h2>

        <div className="mb-5">
          <h4 className="fw-bold">Real Estate End-to-End Data Science Project</h4>
          <p>Developed a FastAPI machine learning prediction software to predict housing prices based on different features.</p>
          <p><strong>Tech Stack:</strong> Python, Apache Airflow, AWS S3, FastAPI (Render), Streamlit</p>
          <a href="https://github.com/CSE583-24Fall/CSE583-redfin-realestatepredict" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>

        <div className="mb-4">
          <h4 className="fw-bold">Retail Data Warehouse & Visualization Project</h4>
          <p>Designed and implemented a STAR schema-based OLAP data warehouse using Snowflake SQL. Created SQL views and Tableau dashboards to uncover key business insights.</p>
          <p><strong>Tech Stack:</strong> SQL, Snowflake, Tableau</p>
          <a href="https://github.com/KuanWei0819/RetailDataEng" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
}
