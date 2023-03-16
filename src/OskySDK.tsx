import React from "react";
import { SpinnerComponent } from "./components/SpinnerComponent";
import { StateMachine } from "./components/StateMachine";
import { DashboardData } from "./interfaces/types";
import { API } from "./network/API";

class OskySDK extends React.Component<{}, { isLoading: boolean; session: DashboardData | null }> {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    API.getSession("ccfe7f50-2f2e-4470-b145-5974d62189b6")
      .then((data: DashboardData) => {
        this.setState({
          session: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log('Error fetching session data: ', error);
      });
  }

  render() {
    const { isLoading, session } = this.state;
    return (
      <>
        {isLoading ? (
          <SpinnerComponent />
        ) : (
          session !== null && <StateMachine session={session} />
        )}
      </>
    );
  }
}

export { OskySDK };
