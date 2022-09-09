// @ts-check
const createElement = ({ element, innerHTML, classList = [] }) => {
  const elem = document.createElement(element);
  elem.innerHTML = innerHTML;
  elem.classList.add(...classList);
  return elem;
};

export default createElement;
