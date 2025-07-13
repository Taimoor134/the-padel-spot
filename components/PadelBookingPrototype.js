"use client";
import { useState } from "react";

const courts = ["Court 1", "Court 2"];

export default function PadelBookingPrototype() {
  const [selectedCourt, setSelectedCourt] = useState(courts[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const generateTimeSlots = () => {
    const slots = [];
    let startHour = 14; // 2 PM
    let current = new Date();
    current.setHours(startHour, 0, 0, 0);

    for (let i = 0; i < 20; i++) {
      slots.push(current.toTimeString().slice(0, 5));
      current = new Date(current.getTime() + 30 * 60000); // 30 min increment
    }

    return slots;
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Book Your Court</h1>

      {/* Court Selector */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Select Court:</label>
        <select
          value={selectedCourt}
          onChange={(e) => setSelectedCourt(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {courts.map((court) => (
            <option key={court} value={court}>
              {court}
            </option>
          ))}
        </select>
      </div>

      {/* Date Selector */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      {/* Time Slot Selector */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Select Time Slot:</label>
        <div className="grid grid-cols-3 gap-2">
          {generateTimeSlots().map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`p-2 border rounded ${
                selectedTime === slot ? "bg-blue-500 text-white" : ""
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 border rounded bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Booking Summary</h2>
        <p>
          <strong>Court:</strong> {selectedCourt}
        </p>
        <p>
          <strong>Date:</strong> {selectedDate || "Not selected"}
        </p>
        <p>
          <strong>Time:</strong> {selectedTime || "Not selected"}
        </p>
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={!selectedDate || !selectedTime}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
