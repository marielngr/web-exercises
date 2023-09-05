import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(
    id ? `https://reqres.in/api/users/${id}` : null
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { first_name, last_name, avatar } = data.data;

  return (
    <>
      <h1>
        {first_name} {last_name}
      </h1>
      <Image
        src={avatar}
        alt={`${first_name} ${last_name}`}
        width={200}
        height={200}
      />
      <Link href="/">Back to all</Link>
    </>
  );
}
