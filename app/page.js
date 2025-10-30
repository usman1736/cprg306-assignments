import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        Go to{" "}
        <strong>
          <Link href="/week-2">Week 2</Link> →{" "}
        </strong>
        <strong>
          <Link href="/week-3">Week 3</Link>
        </strong>{" "}
        →{" "}
        <strong>
          <Link href="/week-4">Week 4</Link>
        </strong>{" "}
        →{" "}
        <strong>
          <Link href={"/week-5"}>Week 5</Link>{" "}
        </strong>
        →{" "}
        <strong>
          <Link href={"/week-6"}>Week 6</Link>
        </strong>{" "}
        →{" "}
        <strong>
          <Link href={"/week-7"}>Week 7</Link>
        </strong>
        →{" "}
        <strong>
          <Link href={"/week-8"}>Week 8</Link>
        </strong>
      </p>
    </main>
  );
}
