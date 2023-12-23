import { Link, LinkProps } from "theme-ui";

/**
 * A link wrapper that adds `target=_blank` to a normal themed link
 * @param props link props
 * @returns A themed, linked anchor tag.
 */
export default function ExternalLink(props: LinkProps) {
  return (
    <Link {...props} target="_blank">
      {props.children}
    </Link>
  );
}
