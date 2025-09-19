import Link from "next/link";

export default function StudentInfo() {
  const name = "Usman Basharat";
  return (
    <div>
      <p>Student Name: {name}</p>
      <p>
        Click on:{" "}
        <strong>
          <Link
            target="_blank"
            href="https://github.com/usman1736/cprg306-assignments.git"
          >
            Github
          </Link>
        </strong>{" "}
        to access my repository
      </p>
    </div>
  );
}
