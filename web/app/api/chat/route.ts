import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: `You are a Detroit Tech Equity AI assistant specializing in:
- Swift development and automotive tech careers
- Detroit tech community resources
- Mobility and manufacturing innovation
- Career guidance for underrepresented groups in tech

Provide actionable, Detroit-focused advice.`,
    messages,
  });

  return result.toDataStreamResponse();
}
