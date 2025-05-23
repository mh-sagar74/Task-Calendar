export default function Days({
  handleDatePick,
  week,
  startDate,
  daysInMonth,
  selectedDate,
  tasks,
}) {
  return (
    <div className="flex flex-wrap gap-[25px] mt-5">
      {week.map((day, i) => (
        <div
          key={i}
          className="bg-gradient-to-b from-gray-300 via-white to-gray-300 rounded-lg w-[50px] h-[41px] pt-2 pb-2">
          {day}
        </div>
      ))}
      {Array.from({ length: startDate }).map((_, i) => (
        <div
          key={i}
          className="bg-gradient-to-b from-gray-300 via-white to-gray-300 rounded-lg w-[50px] h-[41px] pt-2 pb-2"
        />
      ))}
      {daysInMonth.map((day, i) => (
        <div
          onClick={() => handleDatePick(i, day)}
          key={i}
          className={`bg-gradient-to-b from-gray-300 via-white to-gray-300 rounded-lg w-[50px] h-[41px] pt-2 pb-2 ${
            new Date().getFullYear() === day.getFullYear() &&
            new Date().getMonth() === day.getMonth() &&
            new Date().getDate() === day.getDate()
              ? "bg-gradient-to-b from-red-200 via-white to-red-200 shadow-lg shadow-red-900/50 ring-3 ring-red-300 font-bold"
              : "" ||
                (selectedDate.clicked &&
                  selectedDate.sDay.getDate() === day.getDate() &&
                  selectedDate.sDay.getMonth() === day.getMonth() &&
                  selectedDate.sDay.getFullYear() === day.getFullYear())
              ? "bg-gradient-to-b from-yellow-200 via-white to-yellow-200 shadow-lg shadow-yellow-900/50 ring-3 ring-yellow-300/50"
              : "" ||
                tasks.map((markDay) =>
                  markDay.taskDay.sDay.getFullYear() === day.getFullYear() &&
                  markDay.taskDay.sDay.getMonth() === day.getMonth() &&
                  markDay.taskDay.sDay.getDate() === day.getDate()
                    ? "bg-gradient-to-b from-gray-200 via-white to-gray-200 ring-2 ring-green-600 font-normal"
                    : ""
                )
          }`}>
          {day.getDate()}
        </div>
      ))}
    </div>
  );
}
