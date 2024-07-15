import axios from "axios";

export const fetchChats = async () => {
  try {
    const response = await axios.get(
      "https://devapi.beyondchats.com/api/get_all_chats?page=1"
    );
    if (
      response.data &&
      response.data.data &&
      Array.isArray(response.data.data.data)
    ) {
      const chatsWithLastMessage = await Promise.all(
        response.data.data.data.map(async (chat) => {
          const lastMessageData = await fetchLastMessage(chat.id);
          return { ...chat, ...lastMessageData };
        })
      );
      return chatsWithLastMessage;
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error fetching chats:", error);
    return [];
  }
};

export const fetchLastMessage = async (chatId) => {
  try {
    const response = await axios.get(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
    );
    if (response.data && Array.isArray(response.data.data)) {
      const messages = response.data.data;
      const lastMessage =
        messages[messages.length - 1]?.message || "No messages yet";
      const lastMessageTime =
        messages[messages.length - 1]?.created_at || "Unknown time";
      return { lastMessage, lastMessageTime };
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error fetching last message:", error);
    return {
      lastMessage: "Error fetching message",
      lastMessageTime: "Unknown time",
    };
  }
};

export const fetchMessages = async (chatId) => {
  try {
    const response = await axios.get(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
    );
    if (response.data && Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};
