import Image from "next/image";

const Team = () => {
  return (
    <section className="flex flex-col h-screen justify-center items-center text-center">
      <h1 className="text-3xl mb-8">Our Team</h1>
      {/* <div className="flex flex-col justify-around items-center text-center">
        <div className="flex justify-center items-center p-8 border-2 rounded-lg backdrop-blur-lg">
          <Image
            className="rounded-lg bg-black mr-4"
            src=""
            alt=""
            height={72}
            width={72}
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-xl opacity-75">Lorem ipsum dolor sit</h3>
            <p className="opacity-50">Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-8 border-2 rounded-lg backdrop-blur-lg">
          <Image
            className="rounded-lg bg-black mr-4"
            src=""
            alt=""
            height={72}
            width={72}
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-xl opacity-75">Lorem ipsum dolor sit</h3>
            <p className="opacity-50">Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-8 border-2 rounded-lg backdrop-blur-lg">
          <Image
            className="rounded-lg bg-black mr-4"
            src=""
            alt=""
            height={72}
            width={72}
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-xl opacity-75">Lorem ipsum dolor sit</h3>
            <p className="opacity-50">Lorem ipsum dolor</p>
          </div>
        </div>
      </div> */}
      <div className="flex justify-evenly items-center text-center">
        <div className="card w-1/3 bg-base-100 shadow-xl">
          <Image src="" alt="" className="px-10 pt-10" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Lorem ipsum dolor sit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
        <div className="card w-1/3 bg-base-100 shadow-xl">
          <Image src="" alt="" className="px-10 pt-10" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Lorem ipsum dolor sit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
        <div className="card w-1/3 bg-base-100 shadow-xl">
          <Image src="" alt="" className="px-10 pt-10" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Lorem ipsum dolor sit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
