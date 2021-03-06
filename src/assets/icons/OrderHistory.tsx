import * as React from 'react';

function SvgOrderHistory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M11.4 14.8l-1.1-1.1c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l1.4 1.4c.2.2.5.2.7 0l3.5-3.5c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-3.1 3.2zM8 5v1c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V5h2c.6 0 1 .4 1 1v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-.6.4-1 1-1h2zm1-1h6v1c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V4z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgOrderHistory;
