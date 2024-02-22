const parseEnv = () => {
  
  const envVariables = process.env;
 const mitsoVariables = Object.keys(envVariables).filter((key) =>
    key.startsWith('MITSO_')
  );
 const formattedEnv = mitsoVariables
    .map((key) => `MITSO_${key}=${envVariables[key]}`)
    .join('; ');
    console.log(formattedEnv);
};

parseEnv();
