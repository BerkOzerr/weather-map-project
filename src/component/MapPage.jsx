import Header from "./Header";
import Mapping from "./Mapping";

const MapPage = () => {
  return (
    <div className="dark:bg-black/80 text-gray-600 dark:text-gray-500 flex flex-col">
      <Header />
      <Mapping />
    </div>
  );
};

export default MapPage;
