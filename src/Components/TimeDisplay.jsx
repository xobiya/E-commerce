
const TimeDisplay = ({ data }) => (
  <div className="flex items-center">
    {data.map((item, idx, arr) => (
      <div key={item.id} className="flex items-center">
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-3xl font-bold">{item.value}</span>
          <span className="text-xs md:text-sm font-medium text-gray-600">
            {item.name}
          </span>
        </div>
        {idx < arr.length - 1 && (
          <span className="mx-2 text-red-300 text-2xl font-bold">:</span>
        )}
      </div>
    ))}
  </div>
);

export default TimeDisplay;
