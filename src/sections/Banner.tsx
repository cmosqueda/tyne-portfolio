import { useState } from "react";

const skillset = [
  { skill: "Technical Writing" },
  { skill: "Design" },
  { skill: "Creatives" },
  { skill: "Web Development" },
  { skill: "Quality Assurance" },
  { skill: "Documentations" },
];

export default function Banner() {
  const [htmlCode, setHtmlCode] = useState(
    `<!-- You can freely edit this HTML code :D - Tine -->

<p style="font-size:1.25rem;">
  Hello world! I'm
</p>
<p style="font-size:2.5rem; font-weight:800; text-transform: uppercase;">
  Tine Mosqueda
</p>
<p style="font-size:1.5rem;">
  An aspiring
  <i><strong>Systems Analyst</strong></i>
</p>
`
  );

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 mt-20 sm:my-5 text-white space-y-8">
      {/* Dual display container */}
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-5xl">
        {/* Input box */}
        <div className="flex flex-col w-full sm:w-1/2 space-y-2">
          {/* <p className="text-sm font-semibold text-lvlnine">Input</p> */}
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-5 shadow-md font-mono text-sm relative">
            <div className="absolute top-2 left-2 flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            <textarea
              className="w-full h-50 mt-3 bg-transparent text-neutral-100 outline-none resize-none scrollbar-thin scrollbar-thumb-lvlfive scrollbar-track-lvleight"
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
            />
          </div>
        </div>

        {/* Output box */}
        <div className="flex flex-col w-full sm:w-1/2 space-y-2">
          {/* <p className="text-sm font-semibold text-lvlnine">Output</p> */}
          <div
            className="bg-white text-black rounded-lg p-5 shadow-md h-full max-h-64 overflow-auto scrollbar-thin scrollbar-thumb-lvlfive scrollbar-track-lvleight"
            dangerouslySetInnerHTML={{ __html: htmlCode }}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 items-center justify-center mt-5">
        {skillset.map((item, index) => (
          <span
            key={index}
            className="bg-lvlfive text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md"
          >
            {item.skill}
          </span>
        ))}
      </div>
    </section>
  );
}
