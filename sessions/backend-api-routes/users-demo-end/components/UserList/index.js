import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

export default function UserList() {
  const { data, isLoading } = useSWR("/api/users");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const users = data.data;

  return (
    <ul>
      {users.map(({ id, avatar, first_name, last_name }) => (
        <li key={id}>
          <Link href={`/${id}`}>
            <Image
              src={avatar}
              alt={`${first_name} ${last_name}`}
              width={150}
              height={150}
            />
            <span>
              {first_name} {last_name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
