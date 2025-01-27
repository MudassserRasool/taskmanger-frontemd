import * as React from 'react';
import { useMatch } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper';
import TailwindSidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

export default function Layout({ toggleFullScreen, isFullScreen, children }) {
  const matchStudentQuiz = useMatch('/student-dashboard/primarily-quiz');
  const matchTeacherQuiz = useMatch('/teacher-dashboard/quiz-preview');

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const match = matchStudentQuiz || matchTeacherQuiz;

  return (
    <>
      <div
        className={`grid ${
          sidebarOpen ? 'grid-cols-[1fr_16fr]' : 'grid-cols-[3fr_17fr]'
        }`}
      >
        <div>
          {!match && (
            <TailwindSidebar
              sidebarOpen={sidebarOpen}
              handleDrawerOpen={handleDrawerOpen}
            />
          )}
        </div>
        <div>
          {!match && (
            <Topbar
              handleDrawerOpen={handleDrawerOpen}
              toggleFullScreen={toggleFullScreen}
              isFullScreen={isFullScreen}
              isSidebarOpen={sidebarOpen}
            />
          )}
          <ContentWrapper isSidebarOpen={sidebarOpen}>
            {children}
          </ContentWrapper>
        </div>
      </div>
    </>
  );
}
