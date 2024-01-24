const ListElement = ({ date, problem }) => {
  return (
    <div className="max-w-sm h-200 m-4 rounded overflow-hidden shadow-lg">
      <div className="h-10 p-2 border-b border-gray-100">{date}</div>
      <div className="flex flex-col gap-2 p-4">
        <p className="font-bold">Trigger</p> {problem}
      </div>
    </div>
  );
};

export default ListElement;
