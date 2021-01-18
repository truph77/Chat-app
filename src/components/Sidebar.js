import React, { useState, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import Contact from "./Contact";
import Conversation from "./Conversation";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  useEffect(() => {
    console.log(activeKey);
  }, [setActiveKey, activeKey]);

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="pills" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="CONVERSATIONS_KEY">Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="CONTACTS_KEY">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
      <Tab.Content>
        <Tab.Pane eventKey={CONVERSATIONS_KEY}>
          <Conversation />
        </Tab.Pane>
        <Tab.Pane eventKey={CONTACTS_KEY}>
          <Contact />
        </Tab.Pane>
      </Tab.Content>
    </div>
  );
};

export default Sidebar;
