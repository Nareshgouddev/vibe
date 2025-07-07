import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "Code-agent",
      system: "You are an expert next.js developer. You write  readable,maintable code.you write simple next.js & react snippet",
      model: openai({ model: "gpt-4",apiKey: process.env.OPENAI_API_KEY }),
    });

    const { output } =await codeAgent.run(
      `write the following snippet:${event.data.value}`,
    );
    return{output};
    
    // [{ role: 'assistant', content: 'function removeUnecessaryWhitespace(...' }]
    //return { message: `Hello ${event.data.value}!` };
  },
);
