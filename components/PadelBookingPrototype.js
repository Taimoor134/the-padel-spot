import { useState } from "react";

const courts = ["Court 1", "Court 2"];

export default function PadelBookingPrototype() {
  const [selectedCourt, setSelectedCourt] = useState(courts[0]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">The Padel Spot Booking</h1>

      {/* Court Selector */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Court</label>
        <select
          className="w-full border rounded p-2"
          value={selectedCourt}
          onChange={(e) => setSelectedCourt(e.target.value)}
        >
          {courts.map((court) => (
            <option key={court} value={court}>
              {court}
            </option>
          ))}
        </select>
      </div>

      {/* Date Picker */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Select Date</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <p className="text-gray-600">Next: Display time slots here...</p>
    </div>
  );
}
