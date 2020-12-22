import {useLocation} from './LocationContext.client';

export default function Link(props) {
  const [_, setLocation] = useLocation();
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const url = new URL(window.location);
        url.pathname = props.href;
        setLocation(url);
      }}
      {...props}
    />
  );
}
