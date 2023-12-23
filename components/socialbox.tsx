import { FaGraduationCap, FaLinkedinIn } from "react-icons/fa";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { Box, Link, useThemeUI } from "theme-ui";

export default function SocialBox() {
  const { colorMode } = useThemeUI();

  const icons = [
    {
      icon: <VscGithub />,
      href: "https://github.com/camtheman256",
    },
    {
      icon: <VscTwitter />,
      href: "https://twitter.com/cmk256",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/cameron-kleiman",
    },
    {
      icon: <FaGraduationCap />,
      href: "https://www.mit.edu/~ckleiman",
    },
  ];

  return (
    <Box
      sx={{
        fontSize: "large",
        color: "extra-muted",
      }}
    >
      {icons.map((i, idx) => (
        <Link
          key={idx}
          href={i.href}
          target="_blank"
          sx={{
            mr: 3,
          }}
        >
          {i.icon}
        </Link>
      ))}
    </Box>
  );
}
