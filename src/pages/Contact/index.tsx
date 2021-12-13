const Contact = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center w-[calc(100vw-56px] ml-[56px] px-5">
      <div className="flex flex-col items-center justify-center w-full max-w-xs">
        <form className="flex flex-col items-center justify-center bg-white dark:bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="fullname">Full Name</label>
            <input id="fullname" type="text" placeholder="Full Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="email@domain" />
          </div>
          <div className="mb-6">
            <label htmlFor="tel">Phone</label>
            <input id="tel" type="tel" placeholder="(00) 0 0000-0000" />
          </div>
          <div className="mb-6 flex flex-row gap-10 justify-center items-center">
            <div className="radio-division">
              <label htmlFor="optionWhats">Whats</label>
              <input name="optionContact" id="optionWhats" type="radio" />
            </div>
            <div className="radio-division">
              <label htmlFor="optionPhone">Phone</label>
              <input name="optionContact" id="optionPhone" type="radio" />
            </div>
            <div className="radio-division">
              <label htmlFor="optionEmail">Email</label>
              <input name="optionContact" id="optionEmail" type="radio" />
            </div>
          </div>
          <button type="submit" className="border-2 p-2">
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export { Contact };
