import * as React from 'react';

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="1em" height="1em" {...props}>
      <circle cx={11} cy={11} r={10.5} fill="none" stroke="currentColor" />
      <path
        d="M11.7 17.5H9.2v-5.8H8v-2h1.2V8.6C9.2 7 9.9 6 11.9 6h1.6v2h-1c-.8 0-.8.3-.8.8v1h1.8l-.2 2h-1.6v5.7z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default Facebook;
