import { BackgroundMessage } from "../interfaces/background-message";


export async function generateProductDescription(productTitle: string, originalDescription: string) {
    const message: BackgroundMessage = {
        action: "GenerateProductDescription",
        data: {
            productTitle: productTitle,
            originalProductDescription: originalDescription
        }
    };
    console.log(await chrome.runtime.sendMessage(message));
}