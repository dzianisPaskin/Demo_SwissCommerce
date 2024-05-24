import { Icons } from '@/lib/shared/icons/icons';

const OrganizeIcons = () => {
  console.log();
  return (
    <>
      <span className="font-bold text-4xl">Organize Icons</span>
      <ul className="flex flex-wrap justify-around pt-10">
        <li>
          <Icons.biAccessibility className="w-10 h-10" />
        </li>
        <li>
          <Icons.ciLogin className="w-10 h-10" />
        </li>
        <li>
          <Icons.ciLogout className="w-10 h-10" />
        </li>
        <li>
          <Icons.faInstagram className="w-10 h-10" />
        </li>
        <li>
          <Icons.ioClose className="w-10 h-10" />
        </li>
        <li>
          <Icons.mdError className="w-10 h-10" />
        </li>
      </ul>
    </>
  );
};
export default OrganizeIcons;
