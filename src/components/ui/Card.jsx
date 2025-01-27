import React from 'react';

const Card = ({ children, className, title, content, contentStyle }) => {
  return (
    <div className="rounded-lg bg-white pb-2 shadow dark:bg-black-100 dark:text-dark ">
      {(title || content) && (
        <div className="flex items-center justify-between border-b p-4 px-5 border-black-300">
          {title && (
            <h3 className="text-[18px] font-bold text-black ">{title}</h3>
          )}

          {content && <div className={`${contentStyle}`}>{content}</div>}
        </div>
      )}
      <div className={`${className} p-5`}>{children}</div>
    </div>
  );
};

export default Card;
