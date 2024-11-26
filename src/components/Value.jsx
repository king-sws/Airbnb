import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const AccordionCustomIcon = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {[1, 2, 3].map((id) => (
        <div key={id} className="bg-slate-100 p-6 mb-3 rounded-xl">
          <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(id)} className="text-blue-900">
              Best interest rates on the market
            </AccordionHeader>
            <AccordionBody className="text-gray-600 mt-3">
              <p className="mt-5">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionBody>
          </Accordion>
        </div>
      ))}
    </>
  );
};

const Value = () => {
  return (
    <section id="value" className="bg-gray-200 py-10 mb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <img src="./value.png" alt="Value" className="img-containerr rounded-lg shadow-lg" />
          <div>
            <p className="text-orange-400 mt-5 font-semibold text-[25px] lg:text-[35px] md:text-[35px]">Our Value</p>
            <p className="text-blue-900 mb-3 font-semibold text-[30px] lg:text-[50px] md:text-[40px]">Value We Give You</p>
            <div className="flex flex-col mb-5">
              <span className="text-slate-500 mb-2">We are always ready to help by providing the best for you.</span>
              <span className="text-slate-500">We believe a good place to live can make your life better.</span>
            </div>
            <div className="flex flex-wrap max-w-[550px]">
              <AccordionCustomIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
