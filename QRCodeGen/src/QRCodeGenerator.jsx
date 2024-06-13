import React, { useRef } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
  const qrCodeRef = useRef(null);

  const generateQR = async (event) => {
    event.preventDefault();
    const name = event.target.qname.value;
    const age = event.target.qage.value;
    const data = `Name: ${name}, Age: ${age}`;

    try {
      const qrCodeUrl = await QRCode.toDataURL(data);
      const qrCodeImage = document.createElement("img");
      qrCodeImage.src = qrCodeUrl;
      qrCodeRef.current.innerHTML = "";
      qrCodeRef.current.appendChild(qrCodeImage);
    } catch (error) {
      console.error("Failed to generate QR code:", error);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="border-black border-2 p-4" onSubmit={generateQR}>
        <h3 className="font-bold text-xl text-center text-gray-600">
          QR Generator
        </h3>
        <p className="text-center">Here your QR Code</p>
        <div ref={qrCodeRef} className="flex justify-center"></div>
        <div className="flex flex-col w-fit mt-2 gap-1">
          <label htmlFor="qname">Name:</label>
          <input
            type="text"
            name="qname"
            placeholder="Enter Name"
            className="border-black border-2 rounded-sm p-1"
            required
          />
        </div>
        <div className="flex flex-col w-fit mt-2 gap-1">
          <label htmlFor="qage">Age:</label>
          <input
            type="number"
            name="qage"
            placeholder="Enter Age"
            className="border-black border-2 rounded-sm p-1"
            required
          />
        </div>
        <div className="flex justify-center m-2">
          <button
            type="submit"
            className="m-2 bg-sky-400 rounded-lg p-1 hover:shadow-lg hover:shadow-black transition-shadow duration-300"
          >
            Generate QR Code
          </button>
        </div>
      </form>
    </section>
  );
}
