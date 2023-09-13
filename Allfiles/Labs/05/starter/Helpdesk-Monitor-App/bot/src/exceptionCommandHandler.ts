import { Activity, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
} from "@microsoft/teamsfx";
import * as appInsights  from "applicationinsights";

/**
 * The `HelloWorldCommandHandler` registers a pattern with the `TeamsFxBotCommandHandler` and responds
 * with an Adaptive Card if the user types the `triggerPatterns`.
 */
export class ExceptionCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "Throw Exception";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage
  ): Promise<string | Partial<Activity> | void> {
    console.log(`Bot received message: ${message.text}`);

    let client = appInsights.defaultClient;

    client.trackEvent({name: "ExceptionCommandHandler event", properties: {customProperty: "CommandHandler"}});

    await context.sendActivity(`The exceptionCommandHandler is triggered.`);

    client.trackException({exception: new Error("The Contoso Helpdesk bot has an exception.")});

    throw new Error('Something went wrong');
  }
}
