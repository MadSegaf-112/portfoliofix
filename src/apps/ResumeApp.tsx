import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { resumeData } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export const ResumeApp: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="macx-resume-container">
      {/* macOS Document Toolbar */}
      <header className="macx-resume-toolbar">
        <div className="macx-resume-doc-meta">
          <div className="macx-resume-file-icon">
            <FileText size={16} className="text-blue-600" />
          </div>
          <div className="macx-resume-doc-info">
            <span className="macx-resume-filename">{resumeData.downloadName}</span>
            <span className="macx-resume-doc-badge">PDF Document • {t('resume.updated')}</span>
          </div>
        </div>

        <div className="macx-resume-actions">
          <a
            href={resumeData.file}
            target="_blank"
            rel="noopener noreferrer"
            className="macx-resume-btn macx-resume-btn-secondary"
            title="Open in new browser tab"
          >
            <ExternalLink size={13} />
            <span>Open in Tab</span>
          </a>
          <a
            href={resumeData.file}
            download={resumeData.downloadName}
            className="macx-resume-btn macx-resume-btn-primary"
            title="Download CV PDF"
          >
            <Download size={13} />
            <span>{t('resume.download')}</span>
          </a>
        </div>
      </header>

      {/* PDF Document Canvas */}
      <div className="macx-resume-canvas">
        <iframe
          src={resumeData.file}
          title="CV Muhammad Assegaf Preview"
          className="macx-resume-pdf-frame"
        />
      </div>
    </div>
  );
};
