import { createContext, ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface BreakpointsContextProps {
	xsScreen: boolean;
	smScreen: boolean;
	mdScreen: boolean;
	lgScreen: boolean;
	xlScreen: boolean;
}

const BreakpointsContext = createContext<BreakpointsContextProps>({
	xsScreen: false,
	smScreen: false,
	mdScreen: false,
	lgScreen: false,
	xlScreen: false,
});

function BreakpointsProvider({ children }: { children: ReactNode }) {
	const theme = useTheme();
	const xsScreen = useMediaQuery(theme.breakpoints.up("xs"));
	const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
	const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
	const xlScreen = useMediaQuery(theme.breakpoints.up("xl"));

	return (
		<BreakpointsContext.Provider
			value={{
				xsScreen,
				smScreen,
				mdScreen,
				lgScreen,
				xlScreen,
			}}
		>
			{children}
		</BreakpointsContext.Provider>
	);
}

export { BreakpointsContext, BreakpointsProvider };
