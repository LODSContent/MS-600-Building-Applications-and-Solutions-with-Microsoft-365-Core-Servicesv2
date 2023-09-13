import { useContext } from "react";
import { TeamsFxContext } from "./Context";
import { Divider, List, Provider } from "@fluentui/react-northstar";

export default function TrendingTab(props: { environment?: string }) {
    const { themeString } = useContext(TeamsFxContext);

    const items = [
        {
        header: '1. They can’t log in.',
        content: 'Solution: Make sure the employee isn’t trying to enter a password with caps lock turned on. Also, check to see if the password has expired, or the account is suspended due to inactivity. Send the employee a password reset link. Other solutions can involve establishing a self-service password reset portal or adopting password management software in your organization.',
        },
        {
        header: '2. They’ve deleted files they shouldn’t have.',
        content: 'Solution: First check to determine if the file is in the recycling bin or not. If the recycling bin has been emptied, you may need to reinstate the file for the user from the server backup.',
        },
        {
        header: '3. Computer is too slow.',
        content: 'Solution: Assess the user’s CPU usage to determine if they have too many apps running at once – especially if these use up a lot of memory. Remove any temporary files from the Windows folder with the user’s permission and delete any large unused programs and files taking up space on their hard disk drive. Also, check that the user does not have viruses or malware on their machine.',
        },
        {
        header: '4. Internet outages.',
        content: 'Solution: Determine whether or not there is a widespread outage being experienced across the company. If not, work with the user to troubleshoot why they might not be able to connect to the internet.',
        },
        {
        header: '5. Problems with printing.',
        content: 'Solution: Identify the specific issue. Get the user to check the printer is turned on and that the printer is showing up for them to print to. They may need to add a specific network printer in their settings. For other issues such as paper jams, talk them through the instructions from the manufacturer relevant to the specific machine.',
        },
        {
        header: '6. User has lost access to the shared drive.',
        content: 'Solution: Ping the server to see that the user is able to connect with it. Then you will have to help them to remap their network drives so they can access them once more.',
        },
    ]

    const { environment } = {
        environment: window.location.hostname === "localhost" ? "local" : "azure",
        ...props,
    };
    const friendlyEnvironmentName =
    {
        local: "local environment",
        azure: "Azure environment",
    }[environment] || "local environment";

    const { teamsfx } = useContext(TeamsFxContext);

    return (
        <div className={themeString === "default" ? "" : "dark"}>
            <div className="welcome page">
                <div className="narrow page-padding">
                    <h1 className="center">Contoso IT Help desk Trending Topics</h1>
                    <p className="center">Your app is running in your {friendlyEnvironmentName}</p>
                </div>
                <Divider color="grey" />
                <div className="narrow page-padding">
                    <Provider>
                        <List items={items}  />
                    </Provider>
                </div>
            </div>
        </div>
    );
}
