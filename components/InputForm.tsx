import React from 'react';
import type { FormData } from '../types';

interface InputFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const InputForm: React.FC<InputFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="letterDate" className="block text-sm font-medium text-gray-700 mb-1">
          วันที่ทำหนังสือ
        </label>
        <input
          type="text"
          id="letterDate"
          name="letterDate"
          value={formData.letterDate}
          onChange={handleChange}
          placeholder="เช่น ๑ มกราคม ๒๕๖๗"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
        />
      </div>
      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
          ชื่อผู้ใช้ไฟฟ้า
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          placeholder="เช่น นายสมชาย ใจดี"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
        />
      </div>
      <div>
        <label htmlFor="customerNumber" className="block text-sm font-medium text-gray-700 mb-1">
          หมายเลขผู้ใช้ไฟฟ้า
        </label>
        <input
          type="text"
          id="customerNumber"
          name="customerNumber"
          value={formData.customerNumber}
          onChange={handleChange}
          placeholder="เช่น ๑๒๓๔๕๖๗๘๙๐๑๒"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
        />
      </div>
      <div>
        <label htmlFor="billAmount" className="block text-sm font-medium text-gray-700 mb-1">
          ค่าไฟฟ้า (บาท)
        </label>
        <input
          type="text"
          id="billAmount"
          name="billAmount"
          value={formData.billAmount}
          onChange={handleChange}
          placeholder="เช่น ๕๐๐.๐๐"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          ที่อยู่
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          placeholder="บ้านเลขที่, ถนน, ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
        />
      </div>
    </form>
  );
};