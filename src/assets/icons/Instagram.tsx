import * as React from 'react';

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="1em" height="1em" {...props}>
      <circle cx={11} cy={11} r={10.5} fill="none" stroke="currentColor" />
      <path
        d="M11 6h2.1c.5 0 .9.1 1.2.2.3.1.6.3.9.6.3.3.4.6.6.9.1.3.1.7.2 1.2v4.2c0 .5-.1.9-.2 1.2-.1.3-.3.6-.6.9-.3.3-.6.4-.9.6-.3.1-.7.2-1.2.2H8.9c-.5 0-.9-.1-1.2-.2-.3-.1-.6-.3-.9-.6-.3-.3-.4-.6-.6-.9-.1-.3-.1-.7-.2-1.2V8.9c0-.5.1-.9.2-1.2.1-.3.3-.6.6-.9.3-.3.6-.4.9-.6.3-.1.7-.1 1.2-.2H11zm0 .9H9c-.5.1-.8.1-.9.2-.3.1-.4.2-.6.4-.2.2-.3.3-.4.6-.1.1-.1.4-.2.9v4c0 .5.1.8.2.9.1.2.2.4.4.6.2.2.3.3.6.4.1.1.4.1.9.2h4c.5 0 .8-.1.9-.2.2-.1.4-.2.6-.4.2-.2.3-.3.4-.6.1-.2.1-.4.2-.9V9c0-.5-.1-.8-.2-.9-.1-.2-.2-.4-.4-.6-.2-.2-.3-.3-.6-.4-.1-.1-.4-.1-.9-.2h-2zm0 1.5c1.4 0 2.6 1.1 2.6 2.6 0 1.4-1.1 2.6-2.6 2.6-1.4 0-2.6-1.1-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6zm0 4.3c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7 0 .9.8 1.7 1.7 1.7zm3.3-4.4c0 .3-.3.6-.6.6s-.6-.3-.6-.6.3-.6.6-.6.6.3.6.6z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default Instagram;