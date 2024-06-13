import React, { useState } from "react";

export default function QRCode() {

  const [qname, setQname] = useState('');
  const [qrdef, setQrdef] = useState(false);
  const [qage, setQage] = useState('');
  const [qrimg, serQrimg] = useState('');

  const generateQR = async(event) => {
     setQrdef(true);
     try{
       const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Name:-${qname}, Age:-${qage}`
     }
     catch{
        
     }
  }

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <form className="border-black border-2 p-4"> 
          <h3 className="font-bold text-xl text-gray-600">QR Generator</h3>
          { qrdef && <p>Here your QR code</p> }
          <img src="" alt="" />
          <div className="flex flex-col w-fit mt-2 gap-1">
            <label htmlFor="qname">Name:-</label>
            <input
              type="text"
              name="qname"
              placeholder="Enter Name"
              className="border-black border-2 rounded-sm p-1"
            />
          </div>
          <div className="flex flex-col w-fit mt-2 gap-1">
            <label htmlFor="qage">Age:-</label>
            <input
              type="text"
              name="qage"
              placeholder="Enter Age"
              className="border-black border-2 rounded-sm p-1"
            />
          </div>
          <div className="flex justify-center m-2">
            <button
              type="submit"
              className="m-2 bg-sky-400 rounded-lg p-1 hover:shadow-lg hover:shadow-black transition-shadow"
            >
              Generate QR Code
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
