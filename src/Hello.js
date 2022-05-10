import React from "react";

function Hello({name, isSpecial}) {
  return <div>Welcome my world!! {name}</div>
}

Hello.defaultProps = {
  name: "Stephen"
}

export default Hello;
