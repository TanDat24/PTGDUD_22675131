import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">Cột 1</div>
          <div className="col-span-10">
            <div className="grid grid-rows-2 gap-4">
              <Header />
              <div className="row-span-4">
                <div>Overview</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">cot 1</div>
                  <div className="col-span-1">cot 2</div>
                  <div className="col-span-1">cot 3</div>
                </div>
              </div>
              <div className="row-span-8">Detailed report</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
