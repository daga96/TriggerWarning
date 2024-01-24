import ListElement from "../components/ListElement";
import TriggerDetails from "../components/TriggerDetails";
import Layout from "../layouts/main";
import { CiCirclePlus } from "react-icons/ci";

const Triggerlist = () => {
  return (
    <Layout>
      <TriggerDetails
        problem={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget urna est. Vestibulum eu massa fringilla metus aliquam ultricies. Duis sodales justo felis, id pretium felis egestas non. Quisque vehicula efficitur risus. "
        }
        emotions={["sadness", "anger", "fear"]}
        physical={["pain", "chills"]}
      />
      <div className="md:grid grid-cols-4 sm:flex flex-col">
        <ListElement
          date={"12.12"}
          problem={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget urna est. Vestibulum eu massa fringilla metus aliquam ultricies. Duis sodales justo felis, id pretium felis egestas non. Quisque vehicula efficitur risus. "
          }
        />
        <ListElement
          date={"12.12"}
          problem={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget urna est. Vestibulum eu massa fringilla metus aliquam ultricies. Duis sodales justo felis, id pretium felis egestas non. Quisque vehicula efficitur risus. "
          }
        />
        <ListElement
          date={"12.12"}
          problem={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget urna est. Vestibulum eu massa fringilla metus aliquam ultricies. Duis sodales justo felis, id pretium felis egestas non. Quisque vehicula efficitur risus. "
          }
        />
        <ListElement
          date={"12.12"}
          problem={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget urna est. Vestibulum eu massa fringilla metus aliquam ultricies. Duis sodales justo felis, id pretium felis egestas non. Quisque vehicula efficitur risus. "
          }
        />
      </div>

      <button className="flex items-center justify-center max-w-sm m-4 rounded overflow-hidden shadow-lg">
        <CiCirclePlus size="100px" />
      </button>
    </Layout>
  );
};

export default Triggerlist;
