import * as React from 'react';

function SvgPreferences(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M17 14V6.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V14h-1c-.6 0-1 .4-1 1s.4 1 1 1h1v1.5c0 .3.2.5.5.5s.5-.2.5-.5V16h1c.6 0 1-.4 1-1s-.4-1-1-1h-1zm-4-6V6.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V8h-1c-.6 0-1 .4-1 1s.4 1 1 1h1v7.5c0 .3.2.5.5.5s.5-.2.5-.5V10h1c.6 0 1-.4 1-1s-.4-1-1-1h-1zm-4 6V6.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V14H7c-.6 0-1 .4-1 1s.4 1 1 1h1v1.5c0 .3.2.5.5.5s.5-.2.5-.5V16h1c.6 0 1-.4 1-1s-.4-1-1-1H9zM7 4h11c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPreferences;
