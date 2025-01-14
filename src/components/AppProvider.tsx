import theme from "@/theme";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppRouterCacheProvider
      options={{ key: "css", enableCssLayer: true, prepend: true }}
    >
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledEngineProvider>
    </AppRouterCacheProvider>
  );
};

export default AppProvider;
