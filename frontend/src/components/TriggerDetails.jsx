const TriggerDetails = ({ problem, emotions, physical }) => {
  return (
    <div className="absolute w-100 h-100 inset-0 flex items-center justify-between bg-black bg-opacity-50 z-100 ">
      <div className="relative ml-auto mr-0 rounded-l-lg bg-white w-1/2 h-full p-4 ">
        <h1 className="font-bold">Overview</h1>
        <h2 className="font-bold">Trigger</h2>
        <p>{problem}</p>
        <h2 className="font-bold">Emotions</h2>
        {emotions.map((emotion, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {emotion}
          </span>
        ))}

        <h2 className="font-bold">Physical State</h2>
        {physical.map((state, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {state}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TriggerDetails;
