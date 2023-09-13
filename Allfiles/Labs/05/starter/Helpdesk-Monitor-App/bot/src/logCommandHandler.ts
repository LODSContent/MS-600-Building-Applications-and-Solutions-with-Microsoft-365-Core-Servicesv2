import { Activity, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
} from "@microsoft/teamsfx";
import * as appInsights  from "applicationinsights";

export class LogCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "Log Info Message";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage
  ): Promise<string | Partial<Activity> | void> {
    console.log(`Bot received message: ${message.text}`);

    let client = appInsights.defaultClient;

    client.trackEvent({name: "LogCommandHandler event", properties: {customProperty: "CommandHandler"}});

    client.trackMetric({name: "Teams App custom metric", value: Date.now()});

    client.trackTrace({message: "wrote an informational message to app insights"});

    await context.sendActivity(`The logCommandHandler is triggered.`);
  }
}
