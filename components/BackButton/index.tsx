import Link from 'next/link';
import React from 'react';
type ButtonBackProps = {
  title: string;
  href: string;
};
export const BackButton: React.FC<ButtonBackProps> = ({ title, href }) => {
  return (
    <div>
      <Link href={href}>
        <a>
          <span>{title}</span>
        </a>
      </Link>
    </div>
  );
};
