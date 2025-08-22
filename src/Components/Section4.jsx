import React, { useState, useEffect } from "react";
import section40 from "../assets/section40.svg";
import section41 from "../assets/section41.svg";
import section42 from "../assets/section42.svg";
import section43 from "../assets/section43.svg";

const steps = [
  {
    id: 1,
    title: "L1 – Take the First Leap – Enroll Today",
    content1:
      "Choose the course that aligns with your goals and enroll in just a few clicks",
    content2:
      "Instantly access your personalized dashboard where you can track progress.",
    image: section40,
  },
  {
    id: 2,
    title: "L2 – Learn Anytime with Video Lessons",
    content1:
      "Learn through structured video lessons created by industry experts.",
    content2:
      "Replay lessons anytime to strengthen your understanding and mastery.",
    image: section41,
  },
  {
    id: 3,
    title: "L3 – Celebrate Achievement with Certification",
    content1:
      "Earn certificates that validate your new skills and achievements.",
    content2:
      "Use certifications to boost your resume, portfolio, and career credibility.",
    image: section42,
  },
  {
    id: 4,
    title: "L4 – Launch Your Career and Unlock Opportunities",
    content1:
      "Apply your skills to real-world opportunities and freelance projects.",
    content2:
      "Unlock access to career resources, mentorship, and exclusive opportunities.",
    image: section43,
  },
];

const Section4 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find((s) => s.id === activeStep);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        return prevStep === steps.length ? 1 : prevStep + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white font-outfit max-w-screen-xl mx-auto h-[1700px] md:h-auto py-16 px-6 lg:px-20">

      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-[#5E4BDA] text-white text-sm font-medium px-4 py-1 rounded-full">
          How it works
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4">
          Your Roadmap to Mastering Skills
        </h2>
        <p className="mt-4 text-[#C0C6D0] text-base sm:text-lg font-light">
          Turn learning into earning. Master the skills that matter, transform
          your future, and step confidently toward growth and financial
          independence.
        </p>
      </div>


      <div className="mt-12 bg-[#112B4C] lg:h-[500px] rounded-3xl  md:p-6 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center lg:items-stretch">

        <div className="space-y-4 flex pt-5 lg:gap-5 p-2 pb-3 flex-col w-full lg:max-w-[300px]">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-4 py-8 md:py-5 lg:py-3 rounded-tl-xl flex-1 text-xl lg:text-lg rounded-bl-xl  flex items-center font-medium cursor-pointer transition ${activeStep === step.id
                  ? "bg-gradient-to-r from-[#0181f9a6] border-b border-l border-t border-[#127adcb7] via-[#0181f970] to-[#ffffff00] text-white"
                  : "text-white/80 hover:text-white"
                }`}
            >
              {step.title}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-2 md:p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-[750px] mx-auto">

          {activeStep % 2 !== 0 ? (

            <>

              <div className="flex-1 space-y-4 h-full flex flex-col max-w-[800px]">
                <div className="bg-[#0B2342] flex-1 text-white p-4 rounded-3xl py-10 text-2xl ">
                  {currentStep.content1}
                </div>
                <div className="bg-gradient-to-r flex-1 from-[#3384EC] to-[#108FBD] py-10 text-white p-4 rounded-3xl text-2xl">
                  {currentStep.content2}
                </div>
              </div>

              <div className="flex-1 w-full h-full">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
            </>
          ) : (

            <>

              <div className="flex-1 w-full h-full">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>


              <div className="flex-1 space-y-4 h-full flex flex-col max-w-[800px]">
                <div className="bg-[#0B2342] flex-1 text-white p-4 rounded-3xl py-10 text-2xl ">
                  {currentStep.content1}
                </div>
                <div className="bg-gradient-to-r flex-1 from-[#3384EC] to-[#108FBD] text-white p-4 rounded-3xl py-10 text-2xl">
                  {currentStep.content2}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section4;
