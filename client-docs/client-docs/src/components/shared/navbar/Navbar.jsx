import { Link } from "react-router-dom";
import AccordionItem from "./AccordionItem";

const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="row justify-content-center">
          <div className="">
            <div className="card">
              <div className="">
                <Link to="/">
                  <h1 className="text-center font-bold text-2xl py-4 uppercase">
                    Menu
                  </h1>
                </Link>
                <AccordionItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
