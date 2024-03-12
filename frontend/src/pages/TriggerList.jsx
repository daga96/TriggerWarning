import { useState, useEffect } from "react";
import ListElement from "../components/ListElement";
import TriggerDetails from "../components/TriggerDetails";
import Layout from "../layouts/main";
import { CiCirclePlus } from "react-icons/ci";
import { getAllTriggers } from "../../api/apiService";

const Triggerlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggers, setTriggers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getTriggerInfo();
  }, []);

  const getTriggerInfo = async () => {
    const triggers = await getAllTriggers({
      userId: "65af51c3b78b3fdac42f4f97",
    });

    setTriggers(triggers.data);
  };

  const handleListElementClick = (idx) => {
    setIndex(idx);
    setIsOpen(true);
  };

  return (
    <Layout>
      {isOpen && (
        <TriggerDetails
          trigger={triggers[index]}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <div className="md:grid grid-cols-4 sm:flex flex-col">
        {triggers?.map((trigger, idx) => {
          return (
            <ListElement
              key={idx}
              date={"12.12"}
              problem={trigger.problem}
              setIsOpen={handleListElementClick}
              idx={idx}
            />
          );
        })}
        <a
          href="/create"
          className="flex items-center justify-center max-w-sm m-4 rounded overflow-hidden shadow-lg "
        >
          <CiCirclePlus className="text-mute-orange" size="100px" />
        </a>
      </div>
    </Layout>
  );
};

export default Triggerlist;
