import { useState } from 'react';
import * as _ from 'lodash';

export const submitForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
    setInputs(() => ({ ...initialValues }));
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => {
      const newInputs = _.cloneDeep(inputs);
      _.set(newInputs, event.target.name, event.target.value);
      return newInputs;
    });
  };

  const handleDropdownChange = event => {
    setInputs(inputs => {
      const newInputs = _.cloneDeep(inputs);
      _.set(newInputs, event.item.props.title, event.key);
      return newInputs;
    });
  };

  return {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
  };
};
