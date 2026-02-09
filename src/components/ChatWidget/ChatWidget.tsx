import { useState } from 'react';
import { IconSend } from '@/icons';
import './ChatWidget.scss';

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  return (
    <>
      <button
        type="button"
        className="chat-fab"
        onClick={() => setOpen(true)}
        aria-label="Open CAi Chat"
      >
        <span className="label">CAi</span>
      </button>
      {open && (
        <div className="chat-widget">
          <div className="header">
            <span className="title">CAi Chat</span>
            <button
              type="button"
              className="close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="body">
            <div className="message">
              <p>Hi welcome to Client Materials!</p>
              <p>How can I help you today?</p>
            </div>
          </div>
          <div className="footer">
            <input
              type="text"
              className="input"
              placeholder="Show me the latest market update for this quarter"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Chat message"
            />
            <button type="button" className="send" aria-label="Send">
              <IconSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
