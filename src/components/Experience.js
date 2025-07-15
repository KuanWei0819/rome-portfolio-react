import React from 'react';

export default function Experience() {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content container">
        <h2 className="mb-5">Industry Experience</h2>

        {/* PitchBook */}
        <div className="mb-4">
          <h4 className="fw-bold">
            Data Engineer Intern <span className="text-muted">@ PitchBook Data</span>
          </h4>
          <div className="text-muted mb-2">Sept. 2024 – Present</div>
          <ul>
            <li>Applied NLP to analyze and classify customer feedback to discover ongoing trends & issues.</li>
            <li>Improved researcher workflows by enabling 92% accuracy in root cause analysis of customer issues.</li>
          </ul>
        </div>

        {/* TSMC */}
        <div className="mb-4">
          <h4 className="fw-bold">
            Data Engineer Intern <span className="text-muted">@ TSMC</span>
          </h4>
          <div className="text-muted mb-2">June 2024 – Sept. 2024</div>
          <ul>
            <li>Built and deployed ETL pipelines using Apache Airflow to extract manufacturing data and features for machine learning.</li>
            <li>Fine tuned time-series RNN models and improved forecast accuracy by 3%.</li>
          </ul>
        </div>

        {/* Micron */}
        <div className="mb-4">
          <h4 className="fw-bold">
            Industrial Engineer <span className="text-muted">@ Micron Technology</span>
          </h4>
          <div className="text-muted mb-2">Aug. 2022 – Aug. 2023</div>
          <ul>
            <li>Developed capacity and CapEx models to streamline manufacturing and new product introduction, cutting $10 million waste.</li>
            <li>Collaborated with external personnel to ensure on-time delivery of materials across global sites.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
