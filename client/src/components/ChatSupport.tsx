import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MdChat } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import Draggable from 'react-draggable';

// Sound alert (replace this with your actual sound file in /public folder if needed)
const alertSound = new Audio('/chat-alert.mp3');

const ChatButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 1rem;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 50;
`;

const NotificationDot = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 10px;
  height: 10px;
  background: #f43f5e;
  border-radius: 50%;
`;

const ChatBox = styled.div`
  background: #fff;
  color: #1e293b;
  width: 300px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  border: 1px solid #cbd5e1;
  padding: 0.5rem;
  border-radius: 4px;
  background: #f8fafc;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  width: 100%;
`;

const ChatSupport = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    alertSound.play().catch(() => {
      console.warn('⚠️ Sound play was blocked by browser autoplay policy');
    });
  };

  return (
    <>
      {!open && (
        <ChatButton
          onClick={handleOpen}
          whileHover={{ scale: 1.1, rotate: 10 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <MdChat />
          <NotificationDot />
        </ChatButton>
      )}

      {open && (
        <Draggable>
          <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50 }}>
            <ChatBox>
              <ChatHeader>
                Chat Support
                <IoClose
                  onClick={() => setOpen(false)}
                  style={{ cursor: 'pointer' }}
                />
              </ChatHeader>
              <Messages>
                <p>👋 Hi! How can we help you today?</p>
              </Messages>
              <Input placeholder="Type your message..." />
            </ChatBox>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default ChatSupport;
