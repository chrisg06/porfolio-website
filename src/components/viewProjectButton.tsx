import React from "react";
import Link from "next/link";

interface ViewProjectButtonProps {
  href: string;
  internal?: boolean;
  GithubLink?: string;
}

const ViewProjectButton: React.FC<ViewProjectButtonProps> = ({
  href,
  internal,
  GithubLink,
}) => {
  if (internal && GithubLink) {
    return (
      <div className="flex flex-wrap gap-x-2">
        <button
          type="button"
          className="rounded-full bg-white px-3 py-1.5 mb-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Link href={href}>View Project</Link>
        </button>
        <button
          type="button"
          className="rounded-full bg-white px-3 py-1.5 mb-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <a target="_blank" href={GithubLink} rel="noopener noreferrer">
            View Project Github
          </a>
        </button>
      </div>
    );
  } else if (internal) {
    return (
      <button
        type="button"
        className="rounded-full bg-white px-3 py-1.5 mb-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <Link href={href}>View Project</Link>
      </button>
    );
  } else if (GithubLink) {
    return (
      <div className="flex flex-wrap gap-x-2">
        <button
          type="button"
          className="rounded-full bg-white px-3 py-1.5 mb-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <a target="_blank" href={href} rel="noopener noreferrer">
            View Project
          </a>
        </button>
        <button
          type="button"
          className="rounded-full bg-white px-3 py-1.5 mb-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <a target="_blank" href={GithubLink} rel="noopener noreferrer">
            View Project Github
          </a>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="rounded-full bg-white px-3 py-1.5 mb-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <a target="_blank" href={href} rel="noopener noreferrer">
        View Project
      </a>
    </button>
  );
};

export default ViewProjectButton;
