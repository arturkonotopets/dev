import * as React from 'react';

function SvgPassword(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M6 7V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2h1c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h1zm2 2H5v10h14V9H8zm0-4v2h8V5H8zm2 8h4c.6 0 1 .4 1 1s-.4 1-1 1h-4c-.6 0-1-.4-1-1s.4-1 1-1z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPassword;
