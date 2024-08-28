import React from "react";
import Link from "next/link";

interface ViewProjectButtonProps {
  href: string;
  internal?: boolean;
}

const ViewProjectButton: React.FC<ViewProjectButtonProps> = ({
  href,
  internal,
}) => {
  if (internal) {
    return (
      <button
        type="button"
        className="rounded-full bg-white px-3 py-1.5 mb-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <Link href={href}>View Project</Link>
      </button>
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
