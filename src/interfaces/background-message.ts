type BackgroundMessageAction = 'GenerateProductDescription';

interface BackgroundMessageDataGenerateProductDescription {
    productTitle: string;
    originalProductDescription: string;
}

export interface BackgroundMessage {
    action: BackgroundMessageAction;
    data: BackgroundMessageDataGenerateProductDescription;
}
