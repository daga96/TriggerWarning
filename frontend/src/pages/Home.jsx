const Home = () => {
  return (
    <section className="max-container w-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          Empower your emotional well-being with TriggerWarning.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Navigate triggers, cultivate resilience, and embrace a happier you!
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-mute-orange hover:text-mute-orange hover:border-mute-orange hover:bg-white"
          >
            Register
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-mute-orange rounded-lg border border-mute-orange hover:bg-mute-orange hover:border-mute-orange hover:text-white   "
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
