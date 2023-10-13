import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'OPENAI_API_HERE', // To replace with runtime config
});

export async function chatCompletion(prompt: string) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-4',
    });
    return chatCompletion.choices;
}
