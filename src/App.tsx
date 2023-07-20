import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Visualizer } from "./components/Visualizer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Visualizer />
    </ThemeProvider>
  );
}

export default App;
