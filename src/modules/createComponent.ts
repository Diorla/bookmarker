const createComponent = ({
  tagName,
  innerHTML,
  classList = [],
}: {
  tagName: string;
  innerHTML: string;
  classList?: string[];
}) => {
  const elem = document.createElement(tagName);
  elem.innerHTML = innerHTML;
  elem.classList.add(...classList);
  return elem;
};

export default createComponent;
