import Image from "next/image";

const team = [
  {
    image: "",
    name: "Name 1",
    role: "Role 1",
  },
  {
    image: "",
    name: "Name 2",
    role: "Role 2",
  },
  {
    image: "",
    name: "Name 3",
    role: "Role 3",
  },
];

const Team = () => {
  return (
    <section className="flex flex-col h-screen w-full justify-center items-center text-center">
      <h1 className="text-3xl mb-8">Our Team</h1>
      <div className="flex w-full justify-evenly items-center text-center">
        {team.map((member) => (
          <div
            key={member.name}
            className="card w-1/3 mx-4 bg-base-100 shadow-xl"
          >
            <Image
              src={member.image}
              alt=""
              width={150}
              height={150}
              className="mx-auto mt-8 bg-white rounded-xl"
            />
            <div className="card-body items-center text-center">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
