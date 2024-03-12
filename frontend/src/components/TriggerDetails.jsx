import "../styles/triggerDetails.css";

const TriggerDetails = ({ trigger, isOpen, setIsOpen }) => {
  return (
    <div
      className="absolute w-100 h-100 inset-0 flex items-center justify-between bg-black bg-opacity-50 z-500"
      onClick={(e) => setIsOpen(false)}
    >
      <div
        className={`relative ml-auto mr-0 rounded-l-lg bg-white w-1/2 h-full p-4 ${
          isOpen ? "animate-slide-left" : "animate-slide-right"
        }`}
      >
        <h1 className="font-bold">Overview</h1>
        <h2>{trigger.timestamp}</h2>
        <h2 className="font-bold">Trigger</h2>
        <p>{trigger.problem}</p>
        <h2 className="font-bold">Emotions</h2>
        {trigger.emotions.map((emotion, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {emotion}
          </span>
        ))}

        <h2 className="font-bold">Physical State</h2>
        {trigger.physical_state.map((state, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {state}
          </span>
        ))}
        <h2 className="font-bold">External Stimuli</h2>
        {trigger.external_stimuli.map((state, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {state}
          </span>
        ))}
        <h2 className="font-bold">Feeling</h2>
        {trigger.feeling.map((feel, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {feel}
          </span>
        ))}
        <h2 className="font-bold">Response</h2>
        <p>{trigger.response}</p>
        <h2 className="font-bold">Consequences</h2>
        {trigger.consequences.map((cons, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {cons}
          </span>
        ))}
        <h2 className="font-bold">Solutions</h2>
        {trigger.solutions.map((solution, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
          >
            {solution}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TriggerDetails;
