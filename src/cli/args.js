const parseArgs = () => {

  const args = process.argv.slice(2);

  const parsedArgs = {};


  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2); // Удаляем префикс "--"
    const propValue = args[i + 1];
    parsedArgs[propName] = propValue;
  }


  Object.keys(parsedArgs).forEach((propName) => {
    const propValue = parsedArgs[propName];
    console.log(`${propName} is ${propValue}`);
  });
};

parseArgs();
