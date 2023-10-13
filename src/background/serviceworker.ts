import { BackgroundMessage } from "../interfaces/background-message";
import { chatCompletion } from "./openai";

chrome.runtime.onMessage.addListener((request: BackgroundMessage, sender, sendResponse) => {
  console.log('📩 onMessage', request, sender);
  (async () => {
    if (request.action == "GenerateProductDescription") {
      const response = await chatCompletion('Generate Product Description with engaging tone, and try to keep between 200 - 300 words: \n' +
        request.data.productTitle + '\n\n' +
        request.data.originalProductDescription);
      sendResponse(response?.[0]?.message?.content || undefined);
    }
  })();
  return true;
});