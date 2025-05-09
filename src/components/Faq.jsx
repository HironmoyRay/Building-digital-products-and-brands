import React from "react";
import faqData from "../data/faqData.json";
import DownIcon from "../svg/DownIcon";
import UpIcon from "../svg/UpIcon";

export default function Faq() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush">
            {faqData.map((faq, i) => (
              <React.Fragment key={faq.id}>
                <h3 id={`accordion-flush-heading-${faq.id}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    data-accordion-target={`#accordion-flush-body-${faq.id}`}
                    aria-expanded={i === 0 ? "true" : "false"}
                    aria-controls={`accordion-flush-body-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    {i === 0 ? <UpIcon /> : <DownIcon />}
                  </button>
                </h3>
                <div
                  id={`accordion-flush-body-${faq.id}`}
                  className={i === 0 ? "" : "hidden"}
                  aria-labelledby={`accordion-flush-heading-${faq.id}`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faq.answers[0]}
                    </p>

                    {faq.more ? (
                      <>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          {faq.answers[1]}
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          {faq.more}
                        </p>
                        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                          <li>
                            <a
                              href="#"
                              className="text-purple-600 dark:text-purple-500 hover:underline"
                            >
                              {faq.list[0]}
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-purple-600 dark:text-purple-500 hover:underline"
                            >
                              {faq.list[1]}
                            </a>
                          </li>
                        </ul>
                      </>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">
                        {faq.answers[1]}{" "}
                        <a
                          href="#"
                          className="text-purple-600 dark:text-purple-500 hover:underline"
                        >
                          {faq.link}
                        </a>{" "}
                        {faq.answers[2]}
                      </p>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
