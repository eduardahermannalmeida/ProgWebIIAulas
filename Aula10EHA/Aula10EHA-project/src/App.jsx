import { ThemeProvider } from "./context/ThemeProvider";
import { DevLinks } from "./devlinks/devlinks";

export function App() {
  return (
    <>
      <ThemeProvider>
        <DevLinks />
      </ThemeProvider>
    </>
  );
}
