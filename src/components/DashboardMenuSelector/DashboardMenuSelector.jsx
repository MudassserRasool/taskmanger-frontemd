import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import useFetch from '../../hooks/useFetch';
import { API_ROUTES } from '../../routes/apiRoutes';
import SelectorStyle from '../common/selector-style';
const DashboardMenuSelector = ({
  selectedSubject,
  setSelectedSubject,
  subjectId,
  setSubjectId,
  selectedTopic,
  setSelectedTopic,
  setTopicId,
  otherPropsForSubjectsMenu = {},
  otherPropsForTopicsMenu = {},
}) => {
  const { data } = useFetch(API_ROUTES.PREFERENCES);
  const { data: topics, loading } = useFetch(
    subjectId ? API_ROUTES.TOPICS_FIND_BY_SUBJECT_ID(subjectId) : null
  );
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject.subjects.name);
    setSelectedTopic('');
    setSubjectId(subject.subjectId);
  };
  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex gap-6 mb-6 items-center">
      <div>
        <Menu>
          {({ open }) => (
            <>
              <MenuButton
                as={SelectorStyle}
                icon={<IoIosArrowDown />}
                title={selectedSubject || 'Select Subject'}
              />
              <MenuItems
                className="absolute mt-1 w-[10rem] origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                {...otherPropsForSubjectsMenu}
              >
                {data &&
                  data.data.map((subject) => (
                    <MenuItem key={subject.name}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } group flex rounded-md items-center  px-2 py-2 text-sm`}
                          onClick={() => handleSelectSubject(subject)}
                        >
                          {subject.subjects.name}
                        </button>
                      )}
                    </MenuItem>
                  ))}
              </MenuItems>
            </>
          )}
        </Menu>
      </div>

      {selectedSubject && (
        <div>
          <Menu>
            {({ open }) => (
              <>
                {topics?.data?.length > 0 ? (
                  <MenuButton
                    as={SelectorStyle}
                    icon={<IoIosArrowDown />}
                    title={selectedTopic || 'Select Topic'}
                  />
                ) : (
                  <>{loading ? 'Loading Topics...' : 'No Topics Found'}</>
                )}

                <MenuItems
                  className="absolute mt-1 w-auto origin-top-right bg-white  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  {...otherPropsForTopicsMenu}
                >
                  {topics &&
                    topics?.data?.map((topic, index) => (
                      <MenuItem key={index}>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            onClick={() => {
                              setTopicId(topic._id);
                              handleSelectTopic(topic.name);
                            }}
                          >
                            {topic.name}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                </MenuItems>
              </>
            )}
          </Menu>
        </div>
      )}
    </div>
  );
};
export default DashboardMenuSelector;
