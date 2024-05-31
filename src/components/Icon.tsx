import { type SVGProps } from 'react';

export function Icon({
  name,
  className,
}: SVGProps<SVGSVGElement> & {
  name: string;
  childClassName?: string;
}) {
  return (
    <svg className={`inline self-center ${className}`}>
      <use xlinkHref={`./icons/sprite.svg#${name}`} />
    </svg>
  );
}
