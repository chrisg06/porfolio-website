import React from "react";

interface Technology {
  icon: React.ComponentType<{ size: number }>;
  title: string;
}

interface TechnologyCardListProps {
  technologies: Technology[];
}

export const TechnologyList: React.FC<TechnologyCardListProps> = ({
  technologies,
}) => {
  return (
    <div className="flex flex-wrap pb-4">
      {technologies.map(({ icon: Icon, title }, index) => (
        <div
          key={index}
          className="flex items-center mr-4 mb-2 py-2 px-4 bg-slate-100  rounded-lg shadow-md text-center">
          <span className="mr-2">
            <Icon size={16} />
          </span>
          <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};
