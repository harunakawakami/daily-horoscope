import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-b, rgba(168, 123, 195, 1), rgba(41, 34, 96, 1))",
        bgRepeat: "no-repeat",
        color: "#F5F5F5",
      },
    },
  },
  fonts: {
    heading: `'Unbounded',  sans-serif;`,
    body: `'Unbounded',  sans-serif;`,
  },
});

export default theme;
