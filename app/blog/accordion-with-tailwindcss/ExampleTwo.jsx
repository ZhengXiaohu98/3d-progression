const ExampleTwo = () => {
  return (
    <div className="group">
      <div className="peer p-2 w-fit border relative rounded-lg">
        Click to show collapse
        <input type="checkbox" className="absolute inset-0 opacity-0 cursor-pointer" />
      </div>
      <div className="grid grid-rows-[0fr] peer-has-[:checked]:grid-rows-[1fr] transition-all ease-in-out duration-500">
        <ul className="overflow-hidden">
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
      </div>
    </div>
  )
};

export default ExampleTwo;