import * as React from 'react';

export const GenerateContent = ({ textString }: { textString: string }) => (
  <p>
    {textString.split('\n').map((item, key) => (
      <React.Fragment key={key}>
        {item}
        <br />
      </React.Fragment>
    ))}
  </p>
);
