import Projects from "./Projects";
import Tech from "./Tech";
import Me from "./Me";
import { Box } from "@mui/system";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <Box width="100%">
      <Me />
      <Tech />
      <Projects />
      <Footer />
    </Box>
  );
};
