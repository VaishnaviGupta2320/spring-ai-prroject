import React, { useState } from "react";
import "../styles/ChatComponent.css";
function ChatComponent() {

    const [prompt, setPrompt] = useState('');
    // const [chatResponse, setChatResponse] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const AskAI = async () => {

        if (!prompt.trim()) return;

        try {

            setLoading(true);

            const response = await fetch(
                `http://localhost:8080/ask-ai?prompt=${encodeURIComponent(prompt)}`
            );

            // const data = await response.text();

            // setChatResponse(data);
            // setPrompt('');

            const data = await response.text();

setMessages(prev => [
    ...prev,
    {
        sender: "user",
        text: prompt
    },
    {
        sender: "ai",
        text: data
    }
]);

setPrompt('');

        } catch (error) {

            console.error("Error generating chat :", error);

        } finally {

            setLoading(false);

        }

    };

    return (
<div className="chat-page">
        <div className="chat-container">

            <div className="header">
                <h1>🤖 AI Studio</h1>
                <p>Powered by Gemini + Spring Boot</p>
            </div>

            <div className="chat-window">

                {/* {prompt && (
                    <div className="user-message">
                        <strong>You</strong>
                        <p>{prompt}</p>
                    </div>
                )}

                {loading ? (
                    <div className="ai-message">
                        <strong>AI</strong>
                        <p>Thinking...</p>
                    </div>
                ) : (
                    chatResponse && (
                        <div className="ai-message">
                            <strong>AI</strong>
                            <p>{chatResponse}</p>
                        </div>
                    )
                )} */}

<div className="chat-window">

{
    messages.map((msg,index)=>(

        <div
            key={index}
            className={
                msg.sender==="user"
                ? "user-message"
                : "ai-message"
            }
        >

            <strong>
                {msg.sender==="user" ? "You" : "AI"}
            </strong>

            <p>{msg.text}</p>

        </div>
        

    ))
}

{
    loading &&
    <div className="ai-message">
        <strong>AI</strong>
        <p>Thinking...</p>
    </div>
}

</div>
</div>
            </div>

            <div className="input-area">

                <input
                    type="text"
                    placeholder="Ask anything..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            AskAI();
                        }
                    }}
                />

                <button onClick={AskAI}>
                    Send
                </button>

            </div>

        </div>

    );
}

export default ChatComponent;