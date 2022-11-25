export const jacobsTemplate = (vendor, friend, friendEmail, code) => {
  return `
  <h1>New Refer a friend</h1>
  <p>${vendor} has reffered their friend ${friend} at ${friendEmail}</p>
  <p>Their code is ${code}</p>
`;
};
