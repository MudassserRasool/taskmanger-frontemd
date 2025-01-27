import React from 'react';
import { capitalizeFirstLetter } from '../../../../utils/helper/HelperFunctions';
import PreLoader from '../../Preloader/PreLoader';

const PaperCard = ({
  topicArray,
  topicsLoading,
  setTopicAndStartPaper,
  subjectName,
  paperName,
  setPdf,
  startQuiz,
  handelCreateQuiz,
  setTopicId,
}) => {
  return (
    <>
      {topicsLoading ? (
        <PreLoader />
      ) : (
        <div className="px-12">
          <div className="rounded-lg overflow-hidden border border-secondary">
            <div className="flex">
              <div className="flex-1 border-r last:border-r-0 border-secondary">
                <div className="bg-secondary py-2 rounded-t-lg">
                  <div className="text-[18px] font-medium text-white text-center">
                    {capitalizeFirstLetter(subjectName)}
                  </div>
                </div>
                <div className="bg-white py-2">
                  <div className="text-[18px] font-medium text-secondary text-center">
                    {capitalizeFirstLetter(paperName)}
                  </div>
                </div>
                <div className="grid grid-cols-2 py-2 bg-primary">
                  {startQuiz ? (
                    <>
                      {topicArray &&
                        topicArray.map((item, index) => (
                          <button
                            onClick={() => {
                              setTopicAndStartPaper(item._id);
                            }}
                            key={index}
                            className={`text-[16px] text-center py-4 text-white border-opacity-50 ${
                              topicArray.length > 2 ? 'border-b' : ''
                            } border-r border-white font-medium last:border-r-0`}
                          >
                            {item.name}
                          </button>
                        ))}
                    </>
                  ) : (
                    <>
                      {topicArray &&
                        topicArray.map((item, index) => (
                          <button
                            onClick={() => {
                              setPdf(item.pdfLink);
                              setTopicId(item._id);
                            }}
                            key={index}
                            className={`text-[16px] text-center py-4 text-white border-opacity-50 ${
                              topicArray.length > 2 ? 'border-b' : ''
                            } border-r border-white font-medium last:border-r-0`}
                          >
                            {item.name}
                          </button>
                        ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaperCard;
