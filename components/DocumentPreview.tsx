import React, { forwardRef } from 'react';
import type { FormData } from '../types';
import { PeaLogo } from './icons/PeaLogo';

interface DocumentPreviewProps {
  formData: FormData;
}

export const DocumentPreview = forwardRef<HTMLDivElement, DocumentPreviewProps>(({ formData }, ref) => {
  return (
    <div className="print-container" ref={ref}>
      {/* Page 1 */}
      <div className="page bg-white p-12 shadow-lg aspect-[1/1.414] text-black text-sm leading-relaxed mb-8 relative" style={{ fontSize: '15px' }}>
        <div className="flex items-center mb-6">
          <PeaLogo className="w-24 h-24" />
          <div className="ml-4">
            <p className="font-bold">การไฟฟ้าส่วนภูมิภาค</p>
            <p>PROVINCIAL ELECTRICITY AUTHORITY</p>
          </div>
        </div>

        <div className="flex justify-between items-start mb-2">
          <p>ที่ มท ๕๓๐๖.๔/หด(บร.)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/๒๕๖๘</p>
          <div className="text-right">
            <p>การไฟฟ้าส่วนภูมิภาคอำเภอหางดง</p>
            <p>๑๙๗ หมู่ ๘ ตำบลหนองแก๋ว อำเภอหางดง</p>
            <p>จังหวัดเชียงใหม่ ๕๐๒๓๐</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <p>{formData.letterDate || '[วันที่ทำหนังสือ]'}</p>
        </div>

        <div className="mb-4">
          <p><span className="font-bold">เรื่อง</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formData.subject || '[เรื่อง]'}</p>
        </div>
        <div className="mb-6">
          <p><span className="font-bold">เรียน</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;คุณ {formData.customerName || '[ชื่อผู้ใช้ไฟฟ้า]'}</p>
        </div>

        <div className="space-y-6 text-justify" style={{ textIndent: '3rem' }}>
          <p>
            ตามที่ท่านได้ใช้กระแสไฟฟ้าในนาม {formData.customerName ? `คุณ ${formData.customerName}` : '[ชื่อผู้ใช้ไฟฟ้า]'} หมายเลขผู้ใช้ไฟฟ้า {formData.customerNumber || '[หมายเลขผู้ใช้ไฟฟ้า]'} สถานที่ใช้ไฟฟ้า {formData.address || '[ที่อยู่]'} นั้น การไฟฟ้าส่วนภูมิภาคอำเภอหางดง จังหวัดเชียงใหม่ ได้งดจ่ายกระแสไฟฟ้า และถอดมิเตอร์คืน เนื่องจากค้างชำระค่าไฟฟ้า จากการตรวจสอบพบว่า ท่านยังคงค้างชำระค่าไฟฟ้าจำนวนเงิน {formData.billAmount || '[ค่าไฟฟ้า]'} บาท
          </p>
          <p>
            ดังนั้น จึงขอให้ท่านติดต่อชำระเงินค่ากระแสไฟฟ้าจำนวนดังกล่าว ให้เสร็จสิ้นครบถ้วนภายใน ๗ วัน นับจากวันที่ได้รับหนังสือฉบับนี้ ที่แผนกบริหารรายได้ค่าไฟฟ้า การไฟฟ้าส่วนภูมิภาคอำเภอหางดง หรือช่องทางออนไลน์อื่น หากพ้นกำหนด การไฟฟ้าส่วนภูมิภาค มีความจำเป็นจะต้องดำเนินการตามกฎหมายต่อไป
          </p>
          <p>
            จึงเรียนมาเพื่อทราบ หากท่านมีเหตุขัดข้องประการใด กรุณาติดต่อต่อแผนกบริหารรายได้ค่าไฟฟ้า การไฟฟ้าส่วนภูมิภาคอำเภอหางดง จะขอบคุณยิ่ง
          </p>
        </div>

        <div className="mt-12 text-center">
          <p>ขอแสดงความนับถือ</p>
        </div>

        <div className="mt-12 text-center w-2/3 mx-auto">
          <p>(นางวรนุช แสนมงคล)</p>
          <p>ผู้ช่วยผู้จัดการ (บริการลูกค้า) ปฏิบัติงานแทน</p>
          <p>ผู้จัดการ การไฟฟ้าส่วนภูมิภาคอำเภอหางดง</p>
        </div>
        
        <div className="absolute bottom-12 left-12 text-xs">
          <p>แผนกบริหารรายได้ค่าไฟฟ้า</p>
          <p>โทร ๐-๕๓๔๔-๑๗๗๑, ๐-๕๓๔๔-๑๘๒๐</p>
          <p>โทรสาร ๐-๕๓๔๔-๑๑๗๖</p>
        </div>
      </div>
      
      {/* Page 2 */}
      <div className="page bg-white p-12 shadow-lg aspect-[1/1.414] text-black text-sm leading-relaxed" style={{ fontSize: '15px' }}>
        <div className="text-center font-bold text-lg mb-8 border-b-2 border-black pb-4">
          ช่องทางการชำระเงินค่าไฟฟ้า
        </div>
        <div className="space-y-5">
            <div>
                <h3 className="font-bold text-md mb-2">๑. ชำระผ่านแอปพลิเคชัน PEA Smart Plus</h3>
                <p className="ml-6">สะดวก รวดเร็ว สามารถชำระค่าไฟฟ้า ตรวจสอบประวัติการใช้งาน และรับข่าวสารจากการไฟฟ้าส่วนภูมิภาคได้ทุกที่ทุกเวลา</p>
            </div>
            <div>
                <h3 className="font-bold text-md mb-2">๒. ชำระผ่านตัวแทนเก็บเงินค่าไฟฟ้า</h3>
                <p className="ml-6">ชำระผ่านเคาน์เตอร์เซอร์วิส, 7-Eleven, Tesco Lotus, Big C และตัวแทนอื่นๆ ที่มีเครื่องหมาย PEA</p>
            </div>
            <div>
                <h3 className="font-bold text-md mb-2">๓. ชำระผ่าน Mobile Banking ของธนาคารต่างๆ</h3>
                <p className="ml-6">สามารถสแกนบาร์โค้ด/คิวอาร์โค้ดบนใบแจ้งหนี้เพื่อชำระเงินผ่านแอปพลิเคชันของธนาคารที่ท่านใช้งาน</p>
            </div>
            <div>
                <h3 className="font-bold text-md mb-2">๔. ชำระที่สำนักงานการไฟฟ้าส่วนภูมิภาค</h3>
                <p className="ml-6">ติดต่อชำระได้ที่การไฟฟ้าส่วนภูมิภาคอำเภอหางดง หรือสำนักงานการไฟฟ้าส่วนภูมิภาคสาขาอื่นที่สะดวก</p>
            </div>
            <div>
                <h3 className="font-bold text-md mb-2">๕. หักบัญชีเงินฝากธนาคาร หรือบัตรเครดิต</h3>
                <p className="ml-6">สมัครใช้บริการหักบัญชีอัตโนมัติเพื่อความสะดวกในการชำระค่าไฟฟ้าในแต่ละเดือน สามารถติดต่อขอสมัครได้ที่สำนักงานการไฟฟ้าส่วนภูมิภาค</p>
            </div>
        </div>
        <div className="mt-12 border-t-2 border-dashed border-gray-400 pt-4 text-center">
            <p className="font-bold">หมายเหตุ:</p>
            <p>กรุณาชำระเงินภายในวันที่กำหนดเพื่อหลีกเลี่ยงการงดจ่ายกระแสไฟฟ้า</p>
            <p>หากมีข้อสงสัยเพิ่มเติม กรุณาติดต่อแผนกบริหารรายได้ค่าไฟฟ้า โทร ๐-๕๓๔๔-๑๗๗๑</p>
        </div>
      </div>
    </div>
  );
});

DocumentPreview.displayName = 'DocumentPreview';