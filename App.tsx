import React, { useState, useRef } from 'react';
import { InputForm } from './components/InputForm';
import { DocumentPreview } from './components/DocumentPreview';
import type { FormData } from './types';
import { PrintIcon } from './components/icons/PrintIcon';

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    customerNumber: '',
    billAmount: '',
    address: '',
    letterDate: '',
    subject: 'ขอให้ชำระค่าไฟฟ้าค้างชำระ',
  });

  const previewRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sarabun text-gray-800 p-4 sm:p-8 print:p-0 print:bg-white">
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 print:block print:max-w-none">
        <div className="lg:col-span-2 print:hidden">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-700 mb-2">เครื่องมือสร้างใบแจ้งหนี้</h1>
            <p className="text-gray-500 mb-6">กรุณากรอกข้อมูลเพื่อสร้างเอกสาร</p>
            <InputForm formData={formData} setFormData={setFormData} />
            <button
              onClick={handlePrint}
              className="mt-6 w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
            >
              <PrintIcon />
              <span>พิมพ์เอกสาร</span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-3">
          <DocumentPreview ref={previewRef} formData={formData} />
        </div>
      </main>
      <style>
        {`
          @page {
            size: A4;
            margin: 0;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              background-color: white;
            }
            .print-container {
              position: static;
            }
            .page {
              box-shadow: none;
              margin: 0;
              width: 100%;
              height: 100vh;
              page-break-after: always;
            }
            .page:last-child {
              page-break-after: auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;