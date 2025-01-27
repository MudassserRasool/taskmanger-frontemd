import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { API_ROUTES } from '../../../routes/apiRoutes';
import SubjectsMenuSelector from '../../TeacherComponents/SubjectsMenuSelector/SubjectsMenuSelector';
import ToastNotification from '../../ToastNotification/ToastNotification';
import PreLoader from '../Preloader/PreLoader';
const SelectClass = ({ bgColor, heading }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState({
    name: 'All Subjects',
    _id: 'all',
  });
  const [classes, setClasses] = useState([]);
  const { data, error, loading } = useFetch(
    selectedSubject ? API_ROUTES.CLASSES_BY_SUBJECT(selectedSubject?._id) : null
  );
  const { data: subjectData, loading: subjectLoading } = useFetch(
    API_ROUTES.SUBJECTS
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      ToastNotification.error(error);
      setClasses([]);
      return;
    }
    if (data) {
      setClasses(data.data);
    }
  }, [data, error]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    navigate(
      `/teacher-dashboard/teacher-dashboard?classId=${option.class[0]?._id}&subjectId=${option.subject._id}`
    );
  };

  return (
    <div>
      <SubjectsMenuSelector
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        subjectData={subjectData?.data}
      />
      <div className="mt-4">
        <h1 className="text-[26px] font-medium text-[#2a2a2a]">{heading}</h1>

        <div className="grid grid-cols-2 gap-4 bg-white px-12 py-8 shadow-lg rounded-lg mt-2">
          {subjectLoading ? (
            <PreLoader />
          ) : (
            classes.map(
              (classItem, index) =>
                classItem.class.length > 0 && (
                  <button
                    key={index}
                    className={`flex justify-center px-4 py-2 border border-[#696969] border-opacity-45 rounded ${
                      selectedOption === classItem ? 'text-white' : ''
                    }`}
                    style={{
                      backgroundColor:
                        selectedOption === classItem ? bgColor : 'transparent',
                      color: selectedOption === classItem ? 'white' : 'initial',
                    }}
                    onClick={() => handleSelect(classItem)}
                  >
                    <div>
                      {classItem.class[0]?.className}{' '}
                      {selectedSubject._id === 'all' && (
                        <span>(Subject: {classItem.subject.name})</span>
                      )}
                    </div>
                  </button>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectClass;
