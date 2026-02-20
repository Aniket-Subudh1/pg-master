"use client";

const calendarData = [
  {
    date: "Feb 21, 2026",
    events: [
      {
        time: "10:00",
        category: "Move-In",
        title: "Anil Mehta – Sunrise PG",
        color: "#0891B2",
      },
      {
        time: "13:00",
        category: "Inspection",
        title: "Room 104 – Metro Residency",
        color: "#EA580C",
      },
    ],
  },
  {
    date: "Feb 22, 2026",
    events: [
      {
        time: "10:00",
        category: "Rent Due",
        title: "Batch 1 – ₹42,000",
        color: "#7C3AED",
      },
      {
        time: "12:00",
        category: "Complaint",
        title: "AC repair – BlueSky",
        color: "#EA580C",
      },
      {
        time: "15:00",
        category: "Meeting",
        title: "Staff review – Online",
        color: "#0891B2",
      },
    ],
  },
  {
    date: "Feb 24, 2026",
    events: [
      {
        time: "10:00",
        category: "Move-Out",
        title: "Priya Kapoor – Sunrise PG",
        color: "#7C3AED",
      },
      {
        time: "11:00",
        category: "Rent Due",
        title: "Batch 2 – ₹28,500",
        color: "#059669",
      },
    ],
  },
];

export default function CalendarPanel() {
  return (
    <aside
      className="w-[265px] flex-shrink-0 h-full overflow-y-auto flex flex-col"
      style={{
        background: "#ffffff",
        borderLeft: "1px solid #E5E7EB",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-7 pb-4">
        <h2
          className="font-fustat font-bold text-[17px] text-[#0F0F0F]"
          style={{ letterSpacing: "-0.5px" }}
        >
          Calendar
        </h2>
        <button
          className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-gray-100"
          style={{
            background: "#F4F7FB",
            border: "1px solid #E5E7EB",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8C18 5.791 15.314 4 12 4C8.686 4 6 5.791 6 8C6 12 4 13 4 13H20C20 13 18 12 18 8ZM13.73 19C13.554 19.304 13.302 19.557 12.999 19.731C12.696 19.906 12.351 20 12 20C11.649 20 11.304 19.906 11.001 19.731C10.698 19.557 10.446 19.304 10.27 19"
              stroke="#5D5B63"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Event groups */}
      <div className="flex-1 px-4 pb-6 flex flex-col gap-5">
        {calendarData.map((group) => (
          <div key={group.date}>
            {/* Date header */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-inter text-[11.5px] font-semibold text-[#5D5B63]">
                {group.date}
              </span>
              <button className="opacity-40 hover:opacity-80 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="5" cy="12" r="1.5" fill="#5D5B63" />
                  <circle cx="12" cy="12" r="1.5" fill="#5D5B63" />
                  <circle cx="19" cy="12" r="1.5" fill="#5D5B63" />
                </svg>
              </button>
            </div>

            {/* Events */}
            <div className="flex flex-col gap-2.5">
              {group.events.map((event, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  {/* Time */}
                  <span className="font-inter text-[12px] font-semibold text-[#0F0F0F] w-10 pt-0.5 flex-shrink-0">
                    {event.time}
                  </span>

                  {/* Accent line + card */}
                  <div className="flex items-stretch gap-2 flex-1 min-w-0">
                    <div
                      className="w-0.5 rounded-full flex-shrink-0"
                      style={{ background: event.color }}
                    />
                    <div
                      className="flex-1 rounded-xl px-3 py-2"
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E5E7EB",
                      }}
                    >
                      <p className="font-inter text-[10px] text-[#9CA3AF] mb-0.5">
                        {event.category}
                      </p>
                      <p
                        className="font-inter text-[12px] font-semibold text-[#0F0F0F] leading-tight truncate"
                      >
                        {event.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
