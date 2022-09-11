// @ts-check
const createElement = ({ tagName, innerHTML, classList = [] }) => {
  const elem = document.createElement(tagName);
  elem.innerHTML = innerHTML;
  elem.classList.add(...classList);
  return elem;
};

export default createElement;
