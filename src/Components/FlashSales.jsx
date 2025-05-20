// src/components/FlashSales.jsx
import { useEffect, useState, useMemo } from "react";

function FlashSales({
  rounded = "rounded-full",
  bgColor = "bg-white",
  textColor = "text-black",
}) {
  // compute a Date 3 days from now
  const target = useMemo(() => {
    const t = new Date();
    t.setDate(t.getDate() + 3);
    return t;
  }, []);

  // state is an array of { id, name, value }
  const [timeLeft, setTimeLeft] = useState([
    { id: 1, name: "Days", value: "03" },
    { id: 2, name: "Hours", value: "24" },
    { id: 3, name: "Minutes", value: "19" },
    { id: 4, name: "Seconds", value: "56" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft((prev) =>
          prev.map((u) => ({ ...u, value: "00" }))
        );
        return;
      }

      const days = String(Math.floor(diff / 86400000)).padStart(2, "0");
      const hours = String(Math.floor((diff / 3600000) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / 60000) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft([
        { id: 1, name: "Days", value: days },
        { id: 2, name: "Hours", value: hours },
        { id: 3, name: "Minutes", value: minutes },
        { id: 4, name: "Seconds", value: seconds },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <section className="py-4">
      <div className="flex flex-row gap-3">
        {timeLeft.map((item, idx) => (
          <div key={item.id} className="flex items-center">
            {/* circle box */}
            <div
              className={`
                ${bgColor} ${textColor} ${rounded}
                w-16 h-16 flex flex-col items-center justify-center
              `}
            >
              <span className="text-lg font-bold">{item.value}</span>
              <span className="text-xs font-medium">{item.name}</span>
            </div>

            {/* separator colon, except after last */}
            {idx < timeLeft.length - 1 && (
              <span className="mx-1 text-white text-xl font-bold">:</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlashSales;
