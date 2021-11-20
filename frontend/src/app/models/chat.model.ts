export interface Chat{
    user : any,
    message : string
}

export interface Storage{
     roomId: string;
     chats: { user: any; message: string; }[];
}
