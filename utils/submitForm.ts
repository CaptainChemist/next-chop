import { useState } from 'react';

export const submitForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
    setInputs(() => ({ ...initialValues }));
  };

  return {
    inputs,
    handleSubmit,
  };
};
