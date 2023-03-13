import React from "react";
import { DashboardData } from "./interfaces/types";
declare class OskySDK extends React.Component<{}, {
    isLoading: boolean;
    session: DashboardData | null;
}> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export { OskySDK };
