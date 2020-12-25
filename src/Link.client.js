import {history} from './history';

export default function Link(props) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        history.push(props.href);
      }}
      {...props}
    />
  );
}
