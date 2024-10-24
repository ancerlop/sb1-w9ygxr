import React from 'react';
import { FileText } from 'lucide-react';

interface MatchingFilesProps {
  files: string[];
}

export function MatchingFiles({ files }: MatchingFilesProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Matching Files</h3>
        <FileText className="w-6 h-6 text-indigo-600" />
      </div>
      
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FileText className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-700 font-medium">{file}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">No matching files found</p>
        )}
      </div>
    </div>
  );
}