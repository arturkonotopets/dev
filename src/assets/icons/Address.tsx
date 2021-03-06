import * as React from 'react';

function SvgAddress(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M12.5 18.7l-.3.3c-.5.3-1.1.2-1.4-.3l-3.9-5.9c-.6-.9-.9-2-.9-3.1C6 6.5 8.5 4 11.7 4c1.1 0 2.2.3 3.1.9 2.6 1.7 3.3 5.2 1.6 7.8l-3.9 6zm-.8-6.7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgAddress;
