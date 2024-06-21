import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});
export async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
      {
        role: "system",
        content: `Generate text base on user requirement, Please just reply content of question, not explain "Here is a...:"`,
      },
    ],
    model: "llama3-8b-8192",
  });
}

export const getAnswer = async (content) => {
  try {
    const chatCompletion = await getGroqChatCompletion(content);
    console.log(chatCompletion.choices[0]?.message?.content);
    return chatCompletion.choices[0]?.message?.content;

  } catch (error) {
    console.error("Error fetching profile information:", error);
  }
};
