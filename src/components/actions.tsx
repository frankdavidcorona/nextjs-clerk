"use client";
import { useRouter } from "next/navigation";

interface Props {
  label: string;
  description: string;
  route: string;
}

export default function Actions({ label, description, route }: Props) {
  const router = useRouter();
  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <a
      onClick={() => {
        navigate(route);
      }}
      className="hover:cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {label}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </a>
  );
}
